var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (this._storage.indexOf(item) === -1) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  if (this._storage.indexOf(item) !== -1) {
    return true;
  } else {
    return false;
  }
};

setPrototype.remove = function(item) {
  if (this._storage.indexOf(item) !== -1) {
    this._storage.splice(this._storage.indexOf(item), 1)
  }
};
    

/*
 * Complexity: What is the time complexity of the above functions?
 */
