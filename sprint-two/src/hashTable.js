

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, k, v);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index, k);
};

HashTable.prototype.remove = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.remove(index, k, v);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


