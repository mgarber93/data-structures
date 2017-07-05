var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.storage = {};
  instance.storage.size = 0;
  instance.storage.key = 0;
  instance.enqueue = queueMethods.enqueue;
  instance.dequeue = queueMethods.dequeue;
  instance.size = queueMethods.size;
  return instance;
};

var queueMethods = {
  'enqueue': function(value) {
    this.storage[this.storage.key] = value; 
    this.storage.size++;
    this.storage.key++;  
  },
  'dequeue': function() {
    if (this.storage.size <= 0) { return undefined; }
    var dequeuedEl = this.storage[this.storage.key -
      this.storage.size];
    delete this.storage[this.storage.key - this.storage.size];
    this.storage.size--;
    return dequeuedEl;
  },
  'size': function() {
    return this.storage['size'];
  }
};


