// Extension 3
// Construct a function intersection that compares input arrays and returns new arrays
// with elements found in all of the inputs. BONUS: Use reduce!

var nums = ["4", "2", "3", "15"];
var nums2 = ["1", "17", "15", "3", "4"];

function intersection(array, array2) {
  newArray = [];
  forEach(array, function(value) {
    forEach(array2, function(value2) {
      if (value == value2) {
        newArray.push(value);
      }
    });
  });
  return newArray;
}
console.log(intersection(nums, nums2));

function forEach(array, callback) {
  for (var i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

function reduce(array, callback, startHere) {
  var accumulator = startHere;
  forEach(array, function(value) {
    accumulator = callback(accumulator, value);
  });
  return accumulator;
}
