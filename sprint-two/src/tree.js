var Tree = function(value) {
  var newTree = {};
  _.extend(newTree, treeMethods);
  newTree.value = value;
  // your code here
  newTree.children = [];  // fix me
 
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  let newChild = Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
  let result = false;
  
  function iterator(tree) {
    if(tree.value === target) {
      result = true;
    } else if (tree.children.length > 0) {
      tree.children.forEach(function(tree){
        iterator(tree);
      })
    }
  }
  
  iterator(this);
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
