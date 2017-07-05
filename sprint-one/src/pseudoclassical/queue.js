var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.storage.size = 0;
  this.storage.key = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.storage.key] = value;
  this.storage.size++;
  this.storage.key++;
};

Queue.prototype.dequeue = function() {
  if (this.storage.size <= 0) { return undefined; }
  var dequeueEl = this.storage[this.storage.key - this.storage.size];
  delete this.storage[this.storage.key - this.storage.size];
  this.storage.size--;
  return dequeueEl;
};

Queue.prototype.size = function() {
  return this.storage.size;
};


