const HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  let index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, [k, v]);
};

HashTable.prototype.retrieve = function(k) {
  let index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);
  let tuple = _.find(bucket, item => item[0] === k);
  return (tuple ? tuple[1] : undefined);
};

HashTable.prototype.remove = function(k) {
  let index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);
  console.log(bucket)
  let bucketIndex = findIndex(bucket, function(item) {
    return item[0] === k;
  })
  bucket.splice(bucketIndex, 1)
};

var findIndex = function(array, func) {
  for (var i = 0; i < array.length; i++) {
    if (func(array[i])) {
      return i;
    } else {
      return -1;
    }
  }
}



/*
 * Complexity: What is the time complexity of the above functions?
 */


