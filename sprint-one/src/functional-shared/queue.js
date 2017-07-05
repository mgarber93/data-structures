var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.storage = [];
  instance.enqueue = queueMethods.enqueue;
  instance.dequeue = queueMethods.dequeue;
  instance.size = queueMethods.size;
  return instance;
};

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


