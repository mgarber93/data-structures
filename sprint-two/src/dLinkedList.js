var DLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    this.head === null ? this.head = newNode : 
      this.tail.next = newNode;
    this.tail = newNode;  
  };

  list.addToHead = function(value) {

  };
  
  list.removeTail = function() {

  };

  list.removeHead = function() {
    if (list.head === null) { return null; }
    var value = list.head.value;
    list.head = list.head.next;
    return value;
  };

  list.contains = function(target) {
    var nextLink = list.head;
    while (nextLink !== null) {
      if (nextLink.value === target) {
        return true;
      }
      nextLink = nextLink.next;
    }
    return false;
  };

  return list;
};

var DNode = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail = constant
 * removeHead = constant
 * contains = linear
 */
