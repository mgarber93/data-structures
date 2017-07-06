

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  this.nodes.push({'value': value, 'edges': []});
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(value) {
  for (let node of this.nodes) {
    if (node.value === value) {
      return true;
    } 
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(value) {
  this.nodes = this.nodes.filter( node => node.value !== value);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromValue, toValue) {
  let matchingNodes = this.nodes.filter( node => node.value === fromValue );
  if (matchingNodes.length <= 0) { return false; }
  return matchingNodes[0].edges.filter(edge => edge.value === toValue).length > 0;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromValue, toValue) {
  let nodesMatchFrom = this.nodes.filter( node => node.value === fromValue );
  let nodesMatchTo = this.nodes.filter( node => node.value === toValue );
  if (nodesMatchTo.length * nodesMatchFrom.length === 0) { return undefined; }
  nodesMatchFrom[0].edges.push(nodesMatchTo[0]);
  nodesMatchTo[0].edges.push(nodesMatchFrom[0]);
  console.log(true);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromValue, toValue) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.nodes.map(obj => obj.value).forEach(cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


