function double_to_one(collection) {

  var newArray = [];

  for (var i = 0; i < collection.length; i++) {

    if (typeof(collection[i]) === "number") {
      newArray.push(collection[i]);
    }
    else {
      for (var j = 0; j < collection[i].length; j++) {
        newArray.push(collection[i][j]);
      }
    }
  }

  return newArray;
}

module.exports = double_to_one;
