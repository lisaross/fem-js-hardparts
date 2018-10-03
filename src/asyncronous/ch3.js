// Challenge 3
// Write a function everXsecsForYsecs that will accept 3 arguments
// 1. a function
// 2. an interval time in seconds
// 3. total time in seconds
// everyXsecsForYsecs should invoke the given function ever X times 1000 ms,
// but stop invoiking after Y times 1000 ms

function helloWorld() {
  console.log("hello world");
}

function everyXsecsForYsecs(callback, x, y) {
  var startTime = new Date().getTime();
  var interval = setInterval(function() {
    if (new Date().getTime() - startTime > y * 1000) {
      clearInterval(interval);
      console.log("done at " + new Date().getTime());
      return;
    }
    callback();
  }, x * 1000);
}
everyXsecsForYsecs(helloWorld, 1, 5);
