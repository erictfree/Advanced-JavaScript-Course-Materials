import assert from "node:assert/strict";

class Robot {
  constructor(name, color, battery) {
    this.name = name;
    this.color = color;
    this.battery = battery;
  }

  greet() {
    return `Beep boop! I am ${this.name}, the ${this.color} robot.`;
  }
  
  charge(amount) { 
    this.battery = Math.min(100, this.battery + amount);
    return `${this.name} is now charged to ${this.battery}%.`;
  }
}

class SpaceRobot extends Robot {
    static numSpaceRobots = 0;

    constructor(name, color, battery, homePlanet) {
        super(name, color, battery);
        this.homePlanet = homePlanet;
        SpaceRobot.numSpaceRobots += 1;
    }

    makeCoffee(temp) {
        if (this.battery > 40) {
            return `${ this.name } is making ${ temp } coffee`;
        } else {
            return `${ this.name } doesn't have enough charge to make coffee`;
        }
    }
}

const c3po = new SpaceRobot("C3PO", "silver", 20, "Earth");

console.log(c3po.makeCoffee("hot"));
c3po.charge(40);
console.log(c3po.makeCoffee("hot"));
console.log(`Space robots created: ${SpaceRobot.numSpaceRobots}`);

console.log("owns name:", Object.hasOwn(c3po, "name"));
console.log("owns charge:", Object.hasOwn(c3po, "charge"));
console.log("owns makeCoffee:", Object.hasOwn(c3po, "makeCoffee"));
console.log("prototype is SpaceRobot.prototype:", Object.getPrototypeOf(c3po) === SpaceRobot.prototype);
console.log("inherits from Robot:", c3po instanceof Robot);
console.log("color is silver:", c3po.color === "silver");

assert.equal(Object.hasOwn(c3po, "name"), true);
assert.equal(Object.hasOwn(c3po, "charge"), false);
assert.equal(Object.hasOwn(c3po, "makeCoffee"), false);
assert.equal(Object.getPrototypeOf(c3po), SpaceRobot.prototype);
assert.equal(c3po instanceof Robot, true);
assert.equal(c3po.color, "silver");
