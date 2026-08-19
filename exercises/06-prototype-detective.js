/*
Exercise 6 - Prototype detective (about 8 minutes)

Complete SpaceRobot.
Before running the file, predict each answer. 
Then run the code and verify the results.
*/

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
        // TODO: add constructor with homePlanet property
    }

    // TODO: add makeCoffee(temp) to make coffee at the requested temperature
    //       when the battery charge is greater than 40.

}   
        
// Test your code
const c3po = new SpaceRobot("C3PO", "silver", 20, "Earth");

// TODO: predict the result for each before testing
console.log("owns name:", Object.hasOwn(c3po, "name"));
console.log("owns charge:", Object.hasOwn(c3po, "charge"));
console.log("owns makeCoffee:", Object.hasOwn(c3po, "makeCoffee"));
console.log("prototype is SpaceRobot.prototype:", Object.getPrototypeOf(c3po) === SpaceRobot.prototype);
console.log("inherits from Robot:", c3po instanceof Robot);
console.log("color is silver:", c3po.color === "silver");
