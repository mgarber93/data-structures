var BinarySearchTree = function(value) {
  const bst = Object.create(BinarySearchTree.prototype);
  bst.value = value;
  bst.count = 1;
  bst.left = null;
  bst.right = null;
  return bst;
};

Object.prototype.insert = function (value) {
  if (this.value < value) {
    if (this.right !== null) {
      this.right.insert(value);
    } else {
      this.right = BinarySearchTree(value);
    }
  } else if (this.value > value) {
    if (this.left !== null) {
      this.left.insert(value);
    } else {
      this.left = BinarySearchTree(value);
    }
  } else {
    this.count++;
  }
};

Object.prototype.contains = function (value) {
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
};


Object.prototype.depthFirstLog = function (cb) {
  cb(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 * insert O(logN)
 * contains O(n)
 * depthFirstLog O(n)
 */
