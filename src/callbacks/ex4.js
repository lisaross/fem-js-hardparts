// Extension 4
// construct a function union that compares input arrays and returns a new
// array that contains all elements. If there are duplicate elements, only add
// it once to the new array. Preserve the order of the elements starting from
// the first element of the first input array.

var nums = ["4", "2", "3", "15"];
var nums2 = ["1", "17", "15", "3", "4"];

// loop through first array and add values to newArray
// loop through second array
// for each value of second array, loop through new array
// check to see if value exists in array
// if value doesn't exist in array, push to array

function union(array, array2) {
  newArray = [];
  forEach(array, function(value) {
    newArray.push(value);
  });
  console.log(newArray);
  forEach(array2, function(value2) {
    console.log(value2);
    forEach(newArray, function(value3) {
      console.log(value3);
      if (value2 != value3) {
        console.log("notsame");
      }

      console.log(newArray);
    });
  });
  return newArray;
}
console.log(union(nums, nums2));

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
