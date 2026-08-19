import assert from "node:assert/strict";

console.log("\n09 - Prototypes, lookup, and inheritance\n");

class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }

  addPoint(points = 1) {
    this.score += points;
  }

  describe() {
    return `${this.name}: ${this.score}`;
  }
}
const maya = new Player("Maya");
const alex = new Player("Alex");

console.log("maya owns name:", Object.hasOwn(maya, "name"));
console.log("maya owns addPoint:", Object.hasOwn(maya, "addPoint"));

console.log(Player.prototype);
console.log(Object.hasOwn(Player.prototype, "addPoint"));
console.log("maya -> Player.prototype:", Object.getPrototypeOf(maya) === Player.prototype);

maya.describe = function() {
    return "Special Maya";
};
console.log(maya.describe()); // uses the own describe property

console.log(alex.describe()); // uses describe from Player.prototype



class SuperPlayer extends Player {
  constructor(name, power) {
    super(name);
    this.power = power;
  }

  doubleScore() {
    this.score *= 2;
  }

  describe() {
    return `${super.describe()} [${this.power}]`;
  }
}

const nova = new SuperPlayer("Nova", "flight");
nova.addPoint(3);
nova.doubleScore();
console.log(nova);

console.log(nova.describe());


console.log(nova instanceof SuperPlayer);
console.log(nova instanceof Player);

assert.equal(Object.hasOwn(maya, "name"), true);
assert.equal(Object.hasOwn(maya, "addPoint"), false);
assert.equal(Object.getPrototypeOf(maya), Player.prototype);
assert.equal(maya.describe(), "Special Maya");
assert.equal(alex.describe(), "Alex: 0");
assert.equal(nova.score, 6);
assert.equal(nova.describe(), "Nova: 6 [flight]");
assert.equal(nova instanceof SuperPlayer, true);
assert.equal(nova instanceof Player, true);


console.log("\nTakeaway: lookup moves from an object through its prototype chain until it finds a property.");
