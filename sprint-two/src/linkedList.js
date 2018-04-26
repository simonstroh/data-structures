var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newTail = Node(value);
    if (!list.head) {
      list.head = newTail;
    }
    if (list.tail) {
      list.tail.next = newTail;
    }
    list.tail = newTail;
  };

  list.removeHead = function() {
    var head = list.head;
    list.head = head.next;
    return head.value;
  };

  list.contains = function(target) {
    var result = false
    function checker(node) {
      if (node.value === target) {
        result = true;
      } else if (node.next !== null) {
        checker(node.next);
      }
    }
    checker(list.head);
    return result;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
