var Tree = function(value) {
  var newTree = Object.create(Tree.prototype);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};

Tree.prototype.addChild = function(value) {
  this.children.push(Tree(value));
};

Tree.prototype.removeChild = function(value) {
  //create storage for children to remove and keep
  var toRemove = [];
  var toKeep = [];
  //iterate through the root's children
  this.children.forEach( child => {    
    //if an element's value equals the target, remove array, if not, keep it
    child.value === value ? toRemove.push(child) : toKeep.push(child);
  });
  //get the children from each object in toRemove
  toRemove.forEach( childToRemove => {
    if (childToRemove.children) {
      //keep the children
      toKeep = toKeep.concat(childToRemove.children);
    }
  });
  //reset children
  this.children = toKeep;
};

Tree.prototype.contains = function(target) {
  if (this.value === target) { return true; }
  for (let child of this.children) {
    if (child.contains(target)) { return true; }
  }
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 * addChild: constant
 * contains: linear
 * removeChild: linear
 */
