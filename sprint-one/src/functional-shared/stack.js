var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.storage = [];
  instance.push = stackMethods.push;
  instance.pop = stackMethods.pop;
  instance.size = stackMethods.size;
  return instance;
};

var stackMethods = {
  'push': function(value) {
    this.storage.push(value);
  },
  'pop': function() {
    return this.storage.pop();
  },
  'size': function() {
    return this.storage.length;
  }
};


