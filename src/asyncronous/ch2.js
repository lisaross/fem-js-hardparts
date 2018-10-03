// Challenge 2
// Write code that will log to the console "Interval Hello!" every 2 seconds (see setInterval).
// Use the given clearAllIntervals function to clear all the messages when you have this functionality working.
// Next, modify your code so the "interval hello!" message will automatically stop after 10 seconds.
// Then, modify your code again so the message will automatically stop after 10 seconds without using
// the clearAllIntervals function, and using the clearInterval only once.
// perform research if you're unsure how to do this.

console.log("Start of Challenge 2");

var startTime = new Date().getTime();
var intervalLog = setInterval(function() {
  if (new Date().getTime() - startTime > 10000) {
    clearInterval(intervalLog);
    return;
  }
  console.log("Interval Hello!");
}, 2000);

console.log("End of Challenge 2");
