/*
Exercise 4 - Build a class (about 10 minutes)

Complete Robot:
- constructor(name, color, battery) creates name, color, battery,
  and an empty array, tasksCompleted
- greet() returns a string introducing the robot with its name and color
- charge(amount) increases the battery by amount, capped at 100, and returns a
  string reporting the robot's new battery percentage
- doTasks(tasks) takes an array of task names, records every task in the
  instance's tasksCompleted property, and returns one completion string per task
- printTasks() is already complete!
- test the methods with two robots, wallE and robbie
*/

class Robot {
  // TODO: add constructor and instance methods

  // Method 4: print the completed tasks
  printTasks() {
    console.log("Completed tasks:", this.tasksCompleted);
  }
}

// --- Try it out ---
const wallE = new Robot("Wall-E", "rusty brown", 40);
const robbie = new Robot("Robbie", "silver", 30);

// TODO: tell wallE to greet
// TODO: charge wallE by 30
// TODO: have wallE complete some tasks, like "collect trash" and 
//       "water plant" and any others you want.

// print the completed tasks
wallE.printTasks();

// TODO: use Robbie's methods in a similar fashion; charge Robbie by 40
//       and complete some tasks.

// print the completed tasks
robbie.printTasks();
