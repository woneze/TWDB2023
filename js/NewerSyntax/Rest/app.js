// function sum() {
//   return arguments.reduce((total, el) => total + el);
// }

function sum(...nums) {
  return nums.reduce((total, el) => total + el);
}

function raceResults(gold, silver, ...everyoneElse) {
  console.log(`Gold Medal Goes To: ${gold}`);
  console.log(`Silver Medal Goes To: ${silver}`);
  console.log(`And Thanks to Everyone Else: ${everyoneElse}`);
}
