import assert from "node:assert/strict";

console.log("\n05 - Arrow functions, regular functions, and this\n");

const player = {
  name: "Maya",
  introduce() {
    console.log("this in Maya:", this);
    return `I'm ${this.name}`;
  }
};

console.log(player.introduce());

function revealName() {
  return this.name;
}

const firstTeam = { name: "Comets", revealName };
const secondTeam = { name: "Orbits", revealName };

console.log(firstTeam.revealName());
console.log(secondTeam.revealName());

const arrowMethod = {
  name: "Alex",
  introduce: () => {
    console.log("this in Alex:", this);
    return `I'm ${this.name}`;
  }
};

let arrowMethodError;
try {
  console.log(arrowMethod.introduce());
} catch (error) {
  arrowMethodError = error;
  console.log("arrow method error:", error.message);
}
assert.ok(arrowMethodError instanceof TypeError);

const team = {
  name: "Longhorns",
  players: ["Maya", "Alex", "Sam"],
  getPlayers() {
    return this.players.map(playerName => 
      `${playerName} plays for ${this.name}`
    );
  }
};

console.log(team.getPlayers());

assert.deepEqual(team.getPlayers(), [
  "Maya plays for Longhorns",
  "Alex plays for Longhorns",
  "Sam plays for Longhorns"
]);

console.log("\nTakeaway: regular-function this follows the call; arrows capture surrounding this.");
