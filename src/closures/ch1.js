// Challenge 1
// Create a function createFunction that creates and returns a function.
// When that created function is called, it should print hello.

function createFunction() {
  var createdFunction = function() {
    console.log("hello");
  };
  return createdFunction;
}

var function1 = createFunction();
function1();
