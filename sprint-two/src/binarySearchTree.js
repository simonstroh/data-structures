const BinarySearchTree = function(value) {
  let node = Object.create(BinarySearchTree.prototype);
  node.value = value;
  node.left = {};
  node.right = {};
  console.log(node)
  return node;
};

BinarySearchTree.prototype.insert = function(value) {
  if (value > this.value) {
    if (this.right.value) {
      this.right.insert(value);
    } else {
      this.right = BinarySearchTree(value);
    }
    
  } else if (value < this.value) {
    if (this.left.value) {
      this.left.insert(value);
    } else {
      this.left = BinarySearchTree(value);
    }
  }
}

BinarySearchTree.prototype.contains = function(target) {
  let result = false;
  let inner = function(){
    if (target === this.value) {
      result = true
    } else {
      if (this.left.value) {
        return this.left.contains(target);
      }
      if (this.right.value) {
        return this.right.contains(target);
      }
    } 
  }

  return result;
}

BinarySearchTree.prototype.depthFirstLog = function(cb) {

}

/*
 * Complexity: What is the time complexity of the above functions?
 */
