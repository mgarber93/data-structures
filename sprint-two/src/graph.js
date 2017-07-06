

// Instantiate a new graph
var Graph = function() {
  this.home = null; // a node 
  this.neighbors = []; // array of graphs
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  if (this.home === null) { 
    this.home = node; 
  } else {
    let newGraph = new Graph();
    newGraph.addNode(node);
    this.neighbors.push(newGraph);
  }
  console.log(this.home);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  this.forEachNode(graph => {
    if (graph.home === node) { return true; } 
  });
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //return fromNode.neighbors.contains(toNode.home) && toNode.neighbors.contains(fromNode.home);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb, history = []) {
  cb(this.home);
  history.push(this);
  let newNeighbors = this.neighbors.filter( e => !history.includes(e)); // array of graphs
  for (let neighbor of newNeighbors) {
    if (neighbor !== undefined ) { neighbor.forEachNode(cb, history); }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


