import assert from "node:assert/strict";

console.log("\n01 - First-class functions\n");

function greet(name) {
  return `Hello, ${name}`;
}
console.log(greet("Maya"));

const calledValue = greet("Maya");
const functionValue = greet;
console.log("greet('Maya'):", calledValue);
console.log("greet:", functionValue);

console.log("typeof greet:", typeof greet);
console.log(greet);

console.log("functionValue === greet:", functionValue === greet);

const sayHello = greet;
const action = greet;

console.log(sayHello("Alex"));
console.log(action("Sam"));

assert.equal(greet("Maya"), "Hello, Maya");
assert.equal(functionValue, greet);
assert.equal(sayHello("Alex"), "Hello, Alex");
assert.equal(action("Sam"), "Hello, Sam");

console.log("\nTakeaway: parentheses call a function; a bare name refers to its value.");
