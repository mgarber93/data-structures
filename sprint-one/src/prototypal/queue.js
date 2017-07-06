var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.storage = {};
  obj.storage.key = 0;
  obj.storage.size = 0;
  return obj;
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
  },
};


