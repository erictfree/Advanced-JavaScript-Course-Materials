/*
Exercise 5 - Add a static property and a static method to the Robot class

Complete Robot:
- static robotCount tracks how many instances have been created
- static describeFleet() returns a string with the number of robots
  in the fleet
*/

class Robot {
  // TODO: add robotCount to track the number of instances created
  constructor(name, color, battery) {
    this.name = name;
    this.color = color;
    this.battery = battery;
    this.tasksCompleted = [];
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
  
  // TODO: add describeFleet() to return a string with the number of
  //       robots in the fleet.
}

const wallE = new Robot("Wall-E", "rusty brown", 40);
const robbie = new Robot("Robbie", "silver", 30);

// TODO: print the result of calling Robot.describeFleet()
