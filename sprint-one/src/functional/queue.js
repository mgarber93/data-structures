var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  storage['size'] = 0;
  storage['key'] = 0;
  

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[storage['key']] = value;
    storage['size']++;
    storage['key']++;
  };

  someInstance.dequeue = function() {
    if (storage['size'] <= 0) { return undefined; }
    var dequeuedElem = storage[storage['key'] - storage['size']];
    delete storage[storage['key'] - storage['size']];
    storage['size']--;
    return dequeuedElem;
  };

  someInstance.size = function() {
    return storage['size'];
  };

  return someInstance;
};
