/*
Exercise 1 - Function values (about 5 minutes)

1. Implement selectGreeting so it returns formalGreeting when formal is true,
   and casualGreeting otherwise. Do not call either greeting inside
   selectGreeting.
2. Store the selected function in greetingForEvent.
3. Call greetingForEvent with "Maya" and store the result in message.
4. Print message.

Expected final value: "Welcome, Maya."
*/

function formalGreeting(name) {
  return `Welcome, ${name}.`;
}

function casualGreeting(name) {
  return `Hey, ${name}!`;
}

function selectGreeting(formal) {
    // TODO: return one of the two function values
}

const greetingForEvent = undefined; // TODO
const message = undefined; // TODO

console.log(message);
