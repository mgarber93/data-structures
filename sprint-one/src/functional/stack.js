var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  storage['size'] = 0;
    

  // Implement the methods below
  someInstance.push = function(value) {
    storage[storage['size']] = value;
    storage['size']++;
  };

  someInstance.pop = function() {
    if (storage['size'] <= 0 ) { 
      return undefined;
    } 
    var poppedElement = storage[storage['size'] - 1];
    delete storage[storage['size'] - 1];
    storage['size']--;
    return poppedElement;
  };

  someInstance.size = function() {
    return storage['size'];
  };

  return someInstance;
};
