// Variables are a way to store data that we will use later/repeatingly

/*
Ways to declare variables:
const ====> this is a constant variable, meaning it cannot be changed
let ====> this variable is changeable
*/

// This is a string, a data type in a single or collection of letter
let user = "Nathan";
console.log(user);

// This is a Number data type
let age = 25;
console.log(age);
age = 16;
console.log(age);


// This is a boolean data type, meaning true or false
const isBritish = false;
console.log(isBritish);

let isWorking = true;
console.log(isWorking);

// if statements ====> check for certain conditions to run a section of code
// else ====> allows for a separate section of code to run if the if conditions aren't met

if (isBritish === true) {
    console.log("It worked")
} else {
    console.log("Where are you from?")
};

if (isWorking === true) {
    console.log("See you at work!")
} else {
    console.log("Have a nice day off!")
};

if (age >= 16) {
    console.log(`Your age is ${age}`)
} else {
    console.log(`Sorry your too young you are ${age}`)
};

// ===  ====> checks to see if the data type, and the actual data is the same
// || ====> Or, used for if one or another condition is true will return the section of code
// && ====> And, if both conditions are true it will run the code
// > ====> Greater than, this checks if data is greater than another
// < ====> Less than, checks if data is less than another
// != ====> Not equal too, runs no data type check

const age1 = 30;
const age2 = 29;

if (age1 === 29 || age2 === 30) {
    console.log("At least one is true")
} else {
    console.log("neither is true")
};

// Local Variables ====> Assigned in a statement and can only be accessed in that statement
// Scope ====> The space within { } in a statement

if (age1 > age2) {
    const localVariable = "Local"
    console.log(localVariable)
};

// Challenge

const greeting = "Bonjour";

if (greeting === "Bonjour") {
    console.log("Hello")
} else {
    console.log("Sorry I don't understand that...")
};