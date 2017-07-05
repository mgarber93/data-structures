var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(Stack.prototype);
  instance.storage = [];
  return instance;
};

Stack.prototype.push = function(value) {
  this.storage.push(value);
};
Stack.prototype.pop = function() {
  return this.storage.pop();
};
Stack.prototype.size = function() {
  return this.storage.length;
};


var stackMethods = {};


