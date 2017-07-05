var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = [];

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage.push(value);
  };

  someInstance.dequeue = function() {
    return storage.shift();
  };

  someInstance.size = function() {
    return storage.length;
  };

  return someInstance;
};
