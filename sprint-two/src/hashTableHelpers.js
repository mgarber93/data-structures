/*
 ********** NOTE: **********
 * Do not edit this code unless you see a bug!
 */


// This class represents an array with limited functionality and a maximum size.
// It will ensure that you don't accidentally try to use up too much space.
//
// Usage:
//   limitedArray.set(3, 'hi');
//   limitedArray.get(3); // returns 'hi'

var LimitedArray = function(limit) {
  var limitedArray = {};
  var storage = [];
  // var size = 0; to track insert count TODO later


  // initalize
  for ( var i = 0; i < limit; i++) {
    // initalize a new linked list
    storage[i] = Bucket();
  }

  limitedArray.get = function(index, key) {
    checkLimit(index);
    return storage[index].retrieve(key);
  };
  limitedArray.set = function(index, key, value) {
    checkLimit(index);
    // size++; // to track insert count TODO later
    storage[index].addToTail(key, value);
  };
  limitedArray.each = function(callback) {
    for (var i = 0; i < storage.length; i++) {
      // this
      callback(storage[i], i, storage);
    }
  };
  limitedArray.remove = function(index, key, val) {
    // write this
    // size--;
    // go to the storage index and call delete pa
    storage[index].remove(key, val);
  };

  var checkLimit = function(index) {
    if (typeof index !== 'number') {
      throw new Error('setter requires a numeric index for its first argument');
    }
    if (limit <= index) {
      throw new Error('Error trying to access an over-the-limit index');
    }
  };

  return limitedArray;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between the
// numbers 0 and `max`
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var Bucket = function() {
  var obj = {};
  obj.head = null;
  obj.tail = null;
  obj.contains = BucketMethods.contains;
  obj.retrieve = BucketMethods.retrieve;
  obj.addToTail = BucketMethods.addToTail;
  obj.remove = BucketMethods.remove;
  return obj;
};

var BucketMethods = {
  'remove': function(targetKey, targetVal) {
    if (this.head === null) {
      return;
    }
    var prev = null;
    var current = this.head;

    while (current !== null) {
      if (current.value[0] === targetKey &&
        current.value[1] === targetVal) {
        if (current.value[2] > 1) {
          current.value--;
        } else if (prev === null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        break;
      }
      // we didn't find target
      prev = current;
      current = current.next;
    }
  },
  'retrieve': function(targetKey) {
    var current = this.head;
    var lastMatchedKey = undefined;
    while (current !== null) {
      if (current.value[0] === targetKey) {
        lastMatchedKey = current.value[1]; // value
      }
      current = current.next;
    }
    return lastMatchedKey;
  },
  'contains': function (key) {
    var current = this.head;
    while (current !== null) {
      if (current.value[0] === targetKey) {
        return true; // value
      }
      current = current.next;
    }
    return false;
  },
  'addToTail': function(key, value) {
    var newNode = TupNode(key, value);
    this.head === null ? this.head = newNode :
      this.tail.next = newNode;
    this.tail = newNode;
  }
};


var TupNode = function(key, value) {
  var tupnode = {};

  tupnode.value = [];
  tupnode.value[0] = key;
  tupnode.value[1] = value;
  tupnode.value[2] = 1;
  tupnode.next = null;
  tupnode.prev = null; // never used

  return tupnode;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
