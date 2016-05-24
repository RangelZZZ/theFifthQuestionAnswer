function double_to_one(collection) {

  var newArray = [];

  for (var i = 0; i < collection.length; i++) {

    for (var j = 0; j < collection[i].length; j++) {

      if (!(isExist(collection[i][j], newArray))) {
        newArray.push(collection[i][j]);
      }
    }
  }
  return newArray;

}

function isExist(collection, newArray) {

  for (var i = 0; i < newArray.length; i++) {

    if (collection === newArray[i]) {
      return true;
    }
  }
  return false;
}

module.exports = double_to_one;
