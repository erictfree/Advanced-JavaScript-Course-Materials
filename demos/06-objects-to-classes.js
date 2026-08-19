import assert from "node:assert/strict";

const player = {
  name: "Maya",
  score: 0,
  addPoint() { 
    this.score += 1;
  }
};
player.addPoint();
console.log(player);

// Version one of the Player class
/*
class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }

  addPoint() {
    this.score += 1;
  }
}
const maya = new Player("Maya");
const alex = new Player("Alex");
maya.addPoint();
alex.addPoint();
alex.addPoint();
console.log("Maya:", maya);
console.log("Alex:", alex);
*/

// Version two of the Player class
class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.level = 1;
  }

  addPoint(points = 1) {
    this.score += points;
  }

  levelUp() {
    this.level += 1;
  }

  describe() {
    return `${this.name}: ${this.score} points, level ${this.level}`;
  }
}

const maya = new Player("Maya");
const alex = new Player("Alex");
maya.addPoint(3);
maya.levelUp();

console.log(maya.describe());
console.log(alex.describe());

assert.equal(maya.describe(), "Maya: 3 points, level 2");
assert.equal(alex.describe(), "Alex: 0 points, level 1");

console.log("\nTakeaway: a class describes a repeatable shape and behavior; new creates an instance.");
