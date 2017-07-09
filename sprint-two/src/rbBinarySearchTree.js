class RbBinarySearchTree {
  constructor() {
    this.root = null;
  }

  addChild(value) {
    // debugger;
    if (this.root === null) {
      this.root = new RBNode(value, false);
    } else {
      let path = this.root.insert(value);
      if (path.length > 1 ) {
        let alpha = path.pop();
        path.push(!path.pop());  //path to uncle
        if (this.updateNode(path, n => n.isRed)) {
          this.updateNode(path, n => n.isRed = false);
          path.push(!path.pop());
          this.updateNode(path, n => n.isRed = false);
          path.pop()
          this.updateNode(path, n => n.isRed = true);
        } else {
          let pathToParent = path.slice();
          let beta = pathToParent.pop(); // done

          let pathToGP = pathToParent.slice();
          pathToGP.pop();
          let parent;
          if (pathToGP.length <= 0) {
            parent = this.root[beta ? 'left' : 'right'];
            let gp = this.root;
            gp[beta?'left':'right'] = null;
            gp.isRed = true;
            this.root = parent;
            parent[!alpha ? 'right' : 'left'] = gp;
          } else {
            parent = this.updateNode(pathToParent, n => n);
            parent[beta ? 'left' : 'right'] = this.updateNode(
              pathToGP,
              n => n);
            let gamma = pathToGP.pop(); //now is ggp
            let ggp = this.updateNode(pathToGP, n => n);
            ggp[gamma ? 'right' : 'false'] = parent;
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
   if(this.root !== null) {
    this.root.depthFirstLog(cb);
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
      // debugger;
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

  static has(obj, value) {
    if (obj === null) {
      return false;
    }
    if (obj.value === value) {
      return true;
    }
    if (obj.left !== null) {
      if(RBNode.has(obj.left, value)) { return true; }
    }
    if (obj.right !== null) {
      if (RBNode.has(obj.right, value)) { return true; }
    }
    return false;
  }

}

