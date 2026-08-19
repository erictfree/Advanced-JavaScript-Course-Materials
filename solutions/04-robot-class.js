import assert from "node:assert/strict";

class Robot {
  constructor(name, color, battery) {
    this.name = name;
    this.color = color;
    this.battery = battery;
    this.tasksCompleted = [];
  }

  // Method 1: basic method using "this"
  greet() {
    return `Beep boop! I am ${this.name}, the ${this.color} robot.`;
  }

  // Method 2: mutates state
  charge(amount) {
    this.battery = Math.min(100, this.battery + amount);
    return `${this.name} is now charged to ${this.battery}%.`;
  }

  // Method 3: uses an array method (map) with an arrow function
  doTasks(tasks) {
    const results = tasks.map(task => `${this.name} completed: ${task}`);
    this.tasksCompleted.push(...tasks);
    return results;
  }

  // Method 4: print the completed tasks
  printTasks() {
    console.log("Completed tasks:", this.tasksCompleted);
  }
}

// --- Try it out ---
const wallE = new Robot("Wall-E", "rusty brown", 40);
console.log(wallE.greet());
console.log(wallE.charge(30));
wallE.doTasks(["collect trash", "water plant", "recharge solar panel"]);
wallE.doTasks(["clean floor", "make dinner"]);

wallE.printTasks();

const robbie = new Robot("Robbie", "silver", 30);
console.log(robbie.greet());
console.log(robbie.charge(40));
robbie.doTasks(["clean spaceship", "fight aliens", "recharge solar panel"]);
robbie.printTasks();

assert.equal(wallE.battery, 70);
assert.deepEqual(wallE.tasksCompleted, [
  "collect trash",
  "water plant",
  "recharge solar panel",
  "clean floor",
  "make dinner"
]);
assert.equal(robbie.battery, 70);
assert.deepEqual(robbie.tasksCompleted, [
  "clean spaceship",
  "fight aliens",
  "recharge solar panel"
]);
