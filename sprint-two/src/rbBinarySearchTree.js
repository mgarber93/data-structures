/**
 * RB-BST object tracks the root of the tree, which is an instance of
 * RBNode. RBNode's keep a value, a color, and reference to their left
 * and right children. Given a node an alpha, beta, and gamma connection
 * refers to the previous left right choices in order of most recent to
 * least, respectively.
 *
 * TODO:
 *   1) make recoloring percolate upward
 *   2) better visualization besides show
 *   3) delete node method
 *
 */
class RbBinarySearchTree {
  constructor() {
    this.root = null;
  }

  addChild(value) {
    if (this.root === null) {
      this.root = new RBNode(value, false);
    } else {
      let path = this.root.insert(value);
      if (path.length > 1 ) {
        let alpha = path.pop();
        path.push(!path.pop()); //path to uncle
        if (this.updateNode(path, n => n.isRed)) {
          this.updateNode(path, n => n.isRed = false);
          path.push(!path.pop());
          this.updateNode(path, n => n.isRed = false);
          path.pop();
          this.updateNode(path, n => n.isRed = true);
        } else {
          let pathToParent = path.slice();
          let beta = !pathToParent.pop(); // done
          let pathToGP = pathToParent.slice();
          pathToGP.pop();
          let parent;
          if (pathToGP.length <= 0) {
            // gp is root
            if (alpha === beta) {
              parent = this.root[beta ? 'right' : 'left'];
              let gp = this.root;
              gp[beta ? 'right' : 'left'] = null;
              gp.isRed = true;
              this.root = parent;
              parent[!alpha ? 'right' : 'left'] = gp;
            } else {
              parent = this.root[beta ? 'right' : 'left'];
              let child = parent[alpha ? 'right' : 'left'];
              let gp = this.root;
              this.root = child;
              child[alpha ? 'left' : 'right'] = parent;
              parent[alpha ? 'right' : 'left'] = null;
              child[alpha ? 'right' : 'left'] = gp;
              gp[beta ? 'right' : 'left'] = null;
              child.isRed = false;
              parent.isRed = true;
              gp.isRed = true;
            }
          } else {
            // ggp gamma connection must be saved
            let gamma = pathToGP.pop();
            let ggp = this.updateNode(path, n => n);
            parent = ggp[beta ? 'right' : 'left'];
            if (alpha === beta) {
              let gp = ggp[gamma ? 'right' : 'false'];
              gp[beta ? 'right' : 'left'] = null;
              ggp[gamma ? 'right' : 'left'] = parent;
              parent[!alpha ? 'right' : 'left'] = gp;
              // everything gp down inclusive flips color
              gp.isRed = !gp.isRed;
              parent.isRed = !parent.isRed;
              parent[alpha ? 'right' : 'left'].isRed = !parent[alpha ? 'right' : 'left'].isRed;
            } else {
              let child = parent[alpha ? 'right' : 'left'];
              let gp = ggp[gamma ? 'right' : 'left'];
              ggp[gamma ? 'right' : 'left'] = child;
              child[alpha ? 'left' : 'right'] = parent;
              parent[alpha ? 'right' : 'left'] = null;
              child[alpha ? 'right' : 'left'] = gp;
              gp[beta ? 'right' : 'left'] = null;
              child.isRed = false;
              parent.isRed = true;
              gp.isRed = true;
            }
          }

        }
        this.root.isRed = false;
      }
    }
  }

  updateNode(path, cb) {
    let copy = path.slice();
    let node = this.root;
    while (copy.length > 0) {
      if (node === null) {
        return;
      }
      if (copy[0]) {
        node = node.right;
      } else {
        node = node.left;
      }
      copy.shift();
    }
    if (node !== null) {
      return cb(node);
    }
  }

  pathLength(value) {
    // return shortest path to value
  }

  show(nodes = [this.root]) {
    console.log(nodes.map(n => n.value).join(' '));
    let next = [];
    nodes.forEach(n => {
      if (n.left !== null) {
        next.push(n.left);
      }
      if (n.right !== null) {
        next.push(n.right);
      }
    });
    this.show(nodes);
  }

  contains(value) {
    if (this.root === null) { return false; }
    return RBNode.has(this.root, value);
  }

  depthFirstLog(cb) {
    if (this.root !== null) {
      this.root.depthFirstLog(cb);
    }
  }

  forEachBelow(cb) {
    if (this.root !== null) {
      this.root.forEachBelow(cb);
    }
  }

}

class RBNode {
  constructor(value, isRed = true) {
    this.value = value;
    this.isRed = isRed;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (this.value < value) {
      if (this.right !== null) {
        return [true].concat(this.right.insert(value));
      } else {
        this.right = new RBNode(value);
        return [true];
      }
    } else if (this.value > value) {
      if (this.left !== null) {
        return [false].concat(this.left.insert(value));
      } else {
        this.left = new RBNode(value);
        return [false];
      }
    } else {
      return [];
    }
  }

  depthFirstLog(cb) {
    cb(this.value);
    if (this.left !== null) {
      this.left.depthFirstLog(cb);
    }
    if (this.right !== null) {
      this.right.depthFirstLog(cb);
    }
  }

  getColor() {
    return this.isRed ? 'red' : 'black';
  }

  forEachBelow(cb) {
    cb(this);
    if (this.left !== null) {
      this.left.forEachBelow(cb);
    }
    if (this.right !== null) {
      this.right.forEachBelow(cb);
    }
  }

  static has(obj, value) {
    if (obj === null) {
      return false;
    }
    if (obj.value === value) {
      return true;
    }
    if (obj.left !== null) {
      if (RBNode.has(obj.left, value)) { return true; }
    }
    if (obj.right !== null) {
      if (RBNode.has(obj.right, value)) { return true; }
    }
    return false;
  }

}

