// Challenge 1
// Write code that will log to the console: "I am at the beginning of the code".
// Beneath that console.log, set a timer(see setTimeout) that will log to the console "I am in the setTimeout callback function"
// after 3 seconds (3000ms)
// Next, add code to the end of  the challenge to log "i am at the end of the code". Rerun code
// Make sure the console and output panes are showing and run your code with the run with js button
// clear the console. Change the delay time to 0. Think hard about how the order should change and rerun again.

console.log("i am at the beginning of the code");
setTimeout(function() {
  console.log("I am in the setTimeout callback function");
}, 0);
console.log("I am at the end of the code");
