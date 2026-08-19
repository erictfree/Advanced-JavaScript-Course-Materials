/*
Exercise 2 - Callbacks and arrows

Complete each TODO. Keep the callbacks as arrow functions.
Expected result: ["MAYA", "SAM"]
*/

const players = [
  { name: "Maya", score: 91 },
  { name: "Alex", score: 65 },
  { name: "Sam", score: 84 }
];

const passingNames = players
  .filter(/* TODO: keep scores of 80 or more */)
  .map(/* TODO: get each name */)
  .map(/* TODO: uppercase each name */);

console.log(passingNames);

/*
Bonus: write makeMinimumScore(minimum). It should return a callback that can be
passed directly to filter.
*/

function makeMinimumScore(minimum) {
    // TODO: return a score-testing function
}

/*
Bonus: write a pipeline with a minimum score of 90, then return an array of
player names that pass that minimum score.
*/

const elitePlayers = players
    /* TODO: pipeline */
;
console.log(elitePlayers);
