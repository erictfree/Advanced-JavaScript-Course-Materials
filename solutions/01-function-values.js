import assert from "node:assert/strict";

function formalGreeting(name) {
    return `Welcome, ${name}.`;
}

function casualGreeting(name) {
    return `Hey, ${name}!`;
}

function selectGreeting(formal) {
    if (formal) {
        return formalGreeting;
    } else {
        return casualGreeting;
    }
}

const greetingForEvent = selectGreeting(true);
const message = greetingForEvent("Maya");
console.log(`Message: ${ message }`);

assert.equal(message, "Welcome, Maya.");
assert.equal(greetingForEvent, formalGreeting);
