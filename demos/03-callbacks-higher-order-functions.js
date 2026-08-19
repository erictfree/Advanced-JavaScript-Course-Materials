import assert from "node:assert/strict";

console.log("\n03 - Callbacks and higher-order functions\n");

function repeat(count, action) {
  for (let index = 0; index < count; index += 1) {
    action(index);
  }
}

repeat(3, function (index) {
  console.log(`Round ${index + 1}`);
});

// using filter and map array methods with callbacks
const scores = [72, 91, 84, 65, 98];
const highScores = scores.filter(function (score) {
  return score >= 80;
});
console.log(highScores);

// Quiz
function addFive(score) {
    return score + 5;
}
const bonusScores = highScores.map(addFive);
console.log(bonusScores);

// Another example
function makeMinimumScoreTest(minimum) {
  return function (score) {
    return score >= minimum;
  };
}

const isPassing = makeMinimumScoreTest(70);

console.log("high scores:", highScores);
console.log("with bonus:", bonusScores);
console.log("65 passes:", isPassing(65));
console.log("84 passes:", isPassing(84));

assert.deepEqual(highScores, [91, 84, 98]);
assert.deepEqual(bonusScores, [96, 89, 103]);
assert.equal(isPassing(65), false);
assert.equal(isPassing(84), true);

console.log("\nTakeaway: a callback supplies behavior to a higher-order function.");
