var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(Queue.prototype);
  instance.storage = [];
  //instance.enqueue = queueMethods.enqueue;
  //instance.dequeue = queueMethods.dequeue;
  //instance.size = queueMethods.size;
  return instance;
};

Queue.prototype.enqueue = function(value) {
  this.storage.push(value);
};
Queue.prototype.dequeue = function() {
  return this.storage.shift();
};
Queue.prototype.size = function() {
  return this.storage.length;
};

/*
Queue.prototype.enqueue = queueMethods.enqueue;
Queue.prototype.dequeue = queueMethods.dequeue;
Queue.prototype.size = queueMethods.size;
*/

var queueMethods = {
  'enqueue': function(value) {
    this.storage.push(value);
  },
  'dequeue': function() {
    return this.storage.shift();
  },
  'size': function() {
    return this.storage.length;
  }
};


