var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.storage = {};
  instance.storage.size = 0;
  instance.size = stackMethods.size;
  instance.push = stackMethods.push;
  instance.pop = stackMethods.pop;
  return instance;
};

var stackMethods = {
  'size': function() {
    return this.storage.size;
  },
  'push': function(value) {
    this.storage[this.storage.size] = value;
    this.storage.size++;
  },
  'pop': function() {
    if (this.storage.size <= 0) { return undefined; }
    var poppedEl = this.storage[this.storage.size - 1];
    delete this.storage[this.storage.size - 1];
    this.storage.size--;
    return poppedEl;
  }
};


