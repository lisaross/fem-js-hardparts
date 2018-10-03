// Challenge 3
// Examine the code for the outer function. Notice that we are returning a
// function and that function is using variables that are outside of its scope.
// uncomment those lines of code.
// Try to deduce the output before executing.

function outer() {
  var counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log("counter", counter);
  }
  return incrementCounter;
}

var willCounter = outer();
var jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

willCounter();
willCounter();
willCounter();

jasCounter();
willCounter();
