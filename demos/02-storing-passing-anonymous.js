import assert from "node:assert/strict";

console.log("\n02 - Storing, passing, and creating functions\n");

const robot = {
  name: "R2",
  move() {
    return "Moving";
  }
};
console.log(robot.move());

function run(action) {
  return action();
}

function jump() {
  return "Jump!";
}

console.log(run(jump));
assert.equal(run(jump), "Jump!");
assert.throws(() => run(jump()), TypeError);

function duck() {
  return "Duck!";
}
console.log(run(duck));

console.log(run(function () {
  return "Skip!";
}));

assert.equal(run(duck), "Duck!");
assert.equal(run(() => "Skip!"), "Skip!");

console.log("\nTakeaway: run(jump) passes behavior; run(jump()) would pass its result.");
