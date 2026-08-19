import assert from "node:assert/strict";

console.log("\n04 - Arrow function syntax\n");
  
const scores = [72, 91, 84, 65, 98];
// original code
/*
const highScores = scores.filter(function (score) {
  return score >= 80;
});
console.log(highScores);
*/

// code with arrow functions
const highScores = scores.filter((score) => score >= 80);
console.log(highScores);


// A few examples
const announce = () => "Go!";
console.log(announce());

const double = value => value * 2;
console.log(double(3));

const add = (left, right) => left + right;
console.log(add(3, 4));

const doubleThenAddOne = value => {
  const doubled = value * 2;
  return doubled + 1;
};
console.log(doubleThenAddOne(3));

console.log(announce());
console.log("double 6:", double(6));
console.log("add 2 + 3:", add(2, 3));
console.log("double 4, then add 1:", doubleThenAddOne(4));

// player example

const makePlayer = name => ({ name, score: 0 });
console.log("object return:", makePlayer("Maya"));

const players = [
  { name: "Maya", score: 91, active: true },
  { name: "Alex", score: 65, active: false },
  { name: "Sam", score: 84, active: true }
];

// 1
let activeNames = players;
console.log(activeNames);

// 2
activeNames = players
  .filter(player => player.active);
console.log(activeNames);

// 3
activeNames = players
  .filter(player => player.active)
  .map(player => player.name);

console.log("active names:", activeNames);

assert.deepEqual(highScores, [91, 84, 98]);
assert.equal(announce(), "Go!");
assert.equal(double(6), 12);
assert.equal(add(2, 3), 5);
assert.equal(doubleThenAddOne(4), 9);
assert.deepEqual(makePlayer("Maya"), { name: "Maya", score: 0 });
assert.deepEqual(activeNames, ["Maya", "Sam"]);

console.log("\nTakeaway: expression-body arrows return implicitly; block bodies need return.");
