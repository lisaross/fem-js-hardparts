// Challenge 2
// Create a function createFunctionPrinter that accepts one input and
// returns a function. When that created function is called, it should print
// out the input that was used when the function was created.

function createFunctionPrinter(printThis) {
  var createdFunctionPrinter = function() {
    console.log(printThis);
  };
  return createdFunctionPrinter;
}

var printSample = createFunctionPrinter("sample");
var printHello = createFunctionPrinter("hello");
printSample();
printHello();
