import assert from "node:assert/strict";

class Robot {
  // Static property: shared across ALL instances
  static robotCount = 0;

  constructor(name, color, battery) {
    this.name = name;
    this.color = color;
    this.battery = battery;
    this.tasksCompleted = [];

    // Every time a robot is created, bump the class-wide counter
    Robot.robotCount += 1;
  }

  greet() {
    return `Beep boop! I am ${this.name}, the ${this.color} robot.`;
  }

  charge(amount) {
    this.battery = Math.min(100, this.battery + amount);
    return `${this.name} is now charged to ${this.battery}%.`;
  }

  doTasks(tasks) {
    const results = tasks.map(task => `${this.name} completed: ${task}`);
    this.tasksCompleted.push(...tasks);
    return results;
  }

  // Static method: called on the class, not an instance
  static describeFleet() {
    return `The robot fleet currently has ${Robot.robotCount} robot(s).`;
  }
}

const wallE = new Robot("Wall-E", "rusty brown", 40);
const robbie = new Robot("Robbie", "silver", 30);

console.log(Robot.describeFleet()); // "The robot fleet currently has 2 robot(s)."
assert.equal(Robot.robotCount, 2);
assert.equal(Robot.describeFleet(), "The robot fleet currently has 2 robot(s).");
assert.equal(wallE.describeFleet, undefined);
assert.equal(robbie.describeFleet, undefined);
