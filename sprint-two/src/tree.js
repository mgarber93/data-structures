var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  if (this.value === target) { return true; }
  for (let child of this.children) {
    if (child.contains(target)) { return true; }
  }

  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
addChild: constant
contains: linear
 */
