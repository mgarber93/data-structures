class RbBinarySearchTree {
  constructor() {
    this.root = null;
  }

  addChild(value) {
    if (this.root === null) {
      this.root = new RBNode(value, false);
    } else {
      //debugger;
      let path = this.root.insert(value);
      if (path.length > 2 ) {
        path.pop();
        path.push(!path.pop());  //path to uncle
        // recoloring
        // rebalancing
        if (updateNode(path, n => n.isRed)) {
          updateNode(path, n => n.isRed = false);
          path.push(!path.pop());
          updateNode(path, n => n.isRed = false);
          updateNode(path.pop(), n => n.isRed = true);
        } else {
          let pathToParent = path.slice();
          let beta = pathToParent.pop(); // done

          let pathToGP = pathToParent.slice();
          pathToGP.pop();

          let parent = updateNode(pathToParent, n => n);
          parent[beta ? 'left' : 'right'] = updateNode(
            pathToGP,
            n => n);
          let alpha = pathToGP.pop(); //now is ggp
          let ggp = updateNode(pathToGP, n => n);
          ggp[alpha ? 'right' : 'false'] = parent;

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
    show(nodes);
  }

  contains(value) {
    if (this.root === null) { return false; }
    return this.root.contains(value);
  }


  depthFirstLog(cb) {
   if(this.root !== null) {
    this.root.depthFirstLog(cb);
   }
  }
  // rotateCheck() {

  // }

  // rotate() {


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
        return [];
      }
    } else if (this.value > value) {
      if (this.left !== null) {
        return [false].concat(this.left.insert(value));
      } else {
        this.left = new RBNode(value);
        return [];
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

  contains(value) {
    // needs to be called from bst
    if (this.value === value) {
      return true;
    }
    if (this.left !== null) {
      if (this.right.contains(value)) { return true; }
    }
    if (this.right !== null) {
      if (this.right.contains(value)) { return true; }
    }
    return false;
  }

  getColor() {
    return this.isRed ? 'red' : 'black';
  }

}
