import assert from "node:assert/strict";

const roster = {
  team: "Comets",
  players: ["Maya", "Alex"],

  print() {
    return this.players.map(player => {
      return `${player} plays for ${this.team}`;
    });
  }
};

const descriptions = roster.print();
console.log(descriptions);

assert.deepEqual(descriptions, [
  "Maya plays for Comets",
  "Alex plays for Comets"
]);
