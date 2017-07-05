var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = [];

  // Implement the methods below
  someInstance.push = function(value) {
    storage.push(value);
  };

  someInstance.pop = function() {
    return storage.pop();
  };

  someInstance.size = function() {
    return storage.length;
  };

  return someInstance;
};
