var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.storage.size = 0;
};

Stack.prototype.pop = function() {
  if (this.storage.size <= 0) { return undefined; }
  return this.storage[--this.storage.size];
};


Stack.prototype.push = function(value) {
  this.storage[this.storage.size++] = value;
};

Stack.prototype.size = function() {
  return this.storage.size;
};

