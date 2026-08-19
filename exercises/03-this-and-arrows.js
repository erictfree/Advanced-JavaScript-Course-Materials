/*
Exercise 3 - this and arrows (about 6 minutes)

Fix roster so print() returns the two expected strings.

Rules:
- The method that needs its own this should use regular method syntax.
- The short callback should be an arrow so it keeps the method's this.
*/

const roster = {
  team: "Comets",
  players: ["Maya", "Alex"],

  print: () => {
    return roster.players.map(function (player) {
      return `${player} plays for ${this.team}`;
    });
  }
};

console.log(roster.print());
// Expected: ["Maya plays for Comets", "Alex plays for Comets"]
