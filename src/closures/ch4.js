// Challenge 4
// Now we are going to creta a function addByX that returns a funcion that we will add an input by x.

function addByX(input) {
  var addByX = function(number) {
    console.log(input + number);
  };
  return addByX;
}

var addByTwo = addByX(2);
addByTwo(1); //should return 3
addByTwo(2); //should return 4
addByTwo(3); //should return 5

var addByThree = addByX(3);
addByThree(1); //should return 4
addByThree(2); //should return 5

var addByFour = addByX(4);
addByFour(4); //should return 8
addByFour(10); //should return 14
