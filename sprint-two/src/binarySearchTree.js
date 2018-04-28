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
  let inner = function(tree){
    if (target === tree.value) {
      result = true;
    } else if (target > tree.value) {
      if (tree.right.value) {
        inner(tree.right)
      }
    } else if (target < tree.value) {
      if (tree.left.value) {
        inner(tree.left)
      }
    }
  }
  inner(this)
  return result;
}

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left.value) {
    this.left.depthFirstLog(cb);
  }
  if (this.right.value) {
    this.right.depthFirstLog(cb);
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
