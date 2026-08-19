import assert from "node:assert/strict";

console.log("\n07 - Instance state, shared methods, and this\n");

class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }

  addPoint(points = 1) {
    this.score += points;
    return this.score;
  }

  describe() {
    return `${this.name}: ${this.score}`;
  }
}

const maya = new Player("Maya");
const alex = new Player("Alex");

maya.addPoint();
maya.addPoint(2);
alex.addPoint(5);

console.log(maya.describe());
console.log(alex.describe());

console.log(maya === alex);
console.log(maya.addPoint === alex.addPoint);

console.log(maya.name, maya.score);
console.log(alex.name, alex.score);
console.log(Object.keys(maya));
console.log(Object.keys(alex));
console.log("own score properties:", Object.hasOwn(maya, "score"), Object.hasOwn(alex, "score"));
console.log("owns addPoint:", Object.hasOwn(maya, "addPoint"));

assert.equal(maya.score, 3);
assert.equal(alex.score, 5);
assert.notEqual(maya, alex);
assert.equal(maya.addPoint, alex.addPoint);
assert.equal(Object.hasOwn(maya, "score"), true);
assert.equal(Object.hasOwn(maya, "addPoint"), false);

console.log("\nTakeaway: each instance owns its state; instances share method behavior.");
