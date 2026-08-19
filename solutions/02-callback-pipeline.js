import assert from "node:assert/strict";

const players = [
  { name: "Maya", score: 91 },
  { name: "Alex", score: 65 },
  { name: "Sam", score: 84 }
];

const passingNames = players
  .filter(player => player.score >= 80)
  .map(player => player.name)
  .map(name => name.toUpperCase());

function makeMinimumScore(minimum) {
  return player => player.score >= minimum;
}

const elitePlayers = players
    .filter(makeMinimumScore(90))
    .map(player => player.name);


console.log("Passing names:", passingNames); // ["MAYA", "SAM"]
console.log("Elite players:", elitePlayers); // ["Maya"]

assert.deepEqual(passingNames, ["MAYA", "SAM"]);
assert.deepEqual(elitePlayers, ["Maya"]);
