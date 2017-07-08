class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.count = 1;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (this.value < value) {
      this.right !== null ? this.right.insert(value) : 
        this.right = new BinarySearchTree(value);
    } else if (this.value > value) {
      this.left !== null ? this.left.insert(value) : 
        this.left = new BinarySearchTree(value);
    } else {
      this.count++;
    }
  }

  contains(value) {
    if (this.value === value) {
      return true;
    }
    if (this.left !== null) {
      if (this.left.contains(value)) { return true; }
    }
    if (this.right !== null) {
      if (this.right.contains(value)) { return true; }
    }
    return false;
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

}

/*
 * Complexity: What is the time complexity of the above functions?
 * insert O(logN)
 * contains O(n)
 * depthFirstLog O(n)
 */
