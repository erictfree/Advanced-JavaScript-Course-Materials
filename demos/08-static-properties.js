import assert from "node:assert/strict";

console.log("\n08 - Static properties and methods\n");

class Player {
  static playerCount = 0;

  constructor(name) {
    this.name = name;
    this.score = 0;
    Player.playerCount += 1;
  }

  addPoint(points = 1) {
    this.score += points;
  }

  static getPlayerCount() {
    return Player.playerCount;
  }

  static compareScores(left, right) {
    return right.score - left.score;
  }
}

const maya = new Player("Maya");
const alex = new Player("Alex");
console.log("player count:", Player.getPlayerCount());

// keys() is a static method on Object.
console.log(Object.keys(maya));

// isArray() is a static method on Array.
const players = [maya, alex];
console.log(Array.isArray(players));

// MAX_SAFE_INTEGER is a static property on Number.
console.log(Number.MAX_SAFE_INTEGER);

const jordan = new Player("Jordan");
maya.addPoint(4);
jordan.addPoint(10);
alex.addPoint(7);

const ranking = [maya, alex, jordan].sort(Player.compareScores);

console.log("ranking:", ranking.map(player => player.name));
console.log("player count:", Player.getPlayerCount());

assert.equal(Player.getPlayerCount(), 3);
assert.deepEqual(ranking.map(player => player.name), ["Jordan", "Alex", "Maya"]);
assert.equal(maya.getPlayerCount, undefined);

console.log("\nTakeaway: instance properties describe one player; static properties belong to Player itself.");
