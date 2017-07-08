class Set {
  constructor() {
    this.storage = {}; 
  }

  add(item) {
    if (!this.storage.hasOwnProperty(JSON.stringify(item))) {
      this.storage[JSON.stringify(item)] = item;
    }
  }

  insert(item) {
    this.storage[JSON.stringify(item)] = item;
  }

  contains(item) {
    // linear
    return this.storage.hasOwnProperty(JSON.stringify(item));
  }

  remove(item) {
    delete this.storage[JSON.stringify(item)];
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
