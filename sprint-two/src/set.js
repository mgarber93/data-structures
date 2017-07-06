var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = {}; // i'm told that arrays would be cheating
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.storage.hasOwnProperty(JSON.stringify(item))) {
    this.storage[JSON.stringify(item)] = item;
  }
};

setPrototype.contains = function(item) {
  return this.storage.hasOwnProperty(JSON.stringify(item));
};

setPrototype.remove = function(item) {
  delete this.storage[JSON.stringify(item)];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
