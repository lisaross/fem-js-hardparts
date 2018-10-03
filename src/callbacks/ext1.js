// Extension 1
// In the first part of the extension, you're going to rebuild
// map as mapWith. This time you're going to use forEach inside of
// mapWith instead of using a for loop

// array
const numbers = ["1", "2", "3", "4"];
//callback function
function multiplyByTwo(x) {
  return x * 2;
}
function forEach(array, callback) {
  for (var i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}
var newArray = [];
function mapWith(array, callback) {
  forEach(array, function(value) {
    newArray.push(callback(value));
  });

  return newArray;
}
console.log(mapWith(numbers, multiplyByTwo));
