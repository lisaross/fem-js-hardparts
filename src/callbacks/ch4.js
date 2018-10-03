// Challenge 4
// The function forEach takes an array and a callback,
// and runs the callback on each element of the array. forEach does not return anything.

var alphabet = "";
var letters = ["a", "b", "c", "d"];

function forEach(array, callback) {
  for (var i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

forEach(letters, function(char) {
  alphabet += char;
});

console.log(alphabet);
