

// Instantiate a new graph
var Graph = function() {
  this.storage = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = {}
  newNode.value = node
  newNode.edges = [];
  this.storage.push(newNode)
};

// Helper function for contains
var filterNodesByValue = function(array, value) {
  return array.filter(node => node.value === value)
}

// Helper function for addEdge
var findIndexOfNodeOfValue = function(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].value === value) {
      return i;
    }
  }
  return false;
}

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var matchingNodes = filterNodesByValue(this.storage, node)
  if (matchingNodes.length > 0) {
    return true
  } else {
    return false
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (let i = 0; i < this.storage.length; i++) {
    if (this.storage[i].value === node) {
      this.storage.splice(i, 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var result = false;
  var fromNodes = filterNodesByValue(this.storage, fromNode);
  var matchingNodes = filterNodesByValue(fromNodes[0].edges, toNode);
  if (matchingNodes.length > 0) { 
    result = true;  
  }
  return result;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var storage = this.storage;
  var fromNodeIndex = findIndexOfNodeOfValue(storage, fromNode);
  var toNodeIndex = findIndexOfNodeOfValue(storage, toNode);
  storage[fromNodeIndex].edges.push(storage[toNodeIndex]);
  storage[toNodeIndex].edges.push(storage[fromNodeIndex]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNodeValue, toNodeValue) {
  var storage = this.storage;
  var fromNodeIndex = findIndexOfNodeOfValue(storage, fromNodeValue);
  var fromNodeEdges = storage[fromNodeIndex].edges;
  var toNodeIndexInFromNodeEdges = findIndexOfNodeOfValue(fromNodeEdges, toNodeValue);
  var toNode = fromNodeEdges[toNodeIndexInFromNodeEdges];
  fromNodeEdges.splice(toNodeIndexInFromNodeEdges, 1);
  var fromNodeIndexInToNodeEdges = findIndexOfNodeOfValue(toNode.edges, fromNodeValue);
  toNode.edges.splice(fromNodeIndexInToNodeEdges, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


