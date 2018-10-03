// Challenge 3
// Create a function called map that takes 2 inputs:
// 1. an array of numbers (a list of numbers)
// 2. a 'callback' function -
//    a function that is applied to each element of the array (inside of the function'map')
// Have map return a new array filled with numbers that are the result of using the "callback" function
// on each element of the input array

const numbers = ["1", "2", "3", "4"];
//callback function
function multiplyByTwo(x) {
  return x * 2;
}
// function that uses callback
function map(array, callback) {
  const mappedArray = array.map(callback);
  return mappedArray;
}
console.log(map(numbers, multiplyByTwo));
