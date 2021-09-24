// Functions ====> Writing a block of code once, and allows it to be used as many times as we like

// Function declared (old way)
// The parameter eg: (name) like a variable

function greeting(name, music) { 
console.log(`Hello ${name} your favourite music is ${music}`);
};

// Functions are called by function name, and parameters 
// Mupltiple parameters can be used, but have to be in the order they were declared

greeting("Nathan", "folk");
greeting("David", "rap");
greeting("Ash", "country");

// function declaration in a variable (Old way)
// Hoisting ====> non-variable declared function get move to the top of the page and runs first. 
// You want to decalre functions with variables to avoid any bugs
// Variables declared in the { } as with if statements can only be accessed within the function

const mySecondFunction = function () {
    console.log("Hello Nology")
};

mySecondFunction();

// Third way to declare function and the way you want to declare
// Arrow functions
// Parameters variables can only be used in that functions

const fullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`
};

// Return ====> Returns the function's results for use to the user
// console.log ====> Returns to the console, mainly used to testing/developers

console.log(fullName("Nathan", "Beers"));

// 

const years = 50

const calculateDaysPerYears = (amountOfYears) => {
    return amountOfYears * 365
};

console.log(calculateDaysPerYears(10));
console.log(calculateDaysPerYears(years))

// 1. Write a function to find the perimeter of a rectangle.

const calculatePerimeterRectangle = (height, width) => {
    return 2*height + 2*width;
}

console.log(calculatePerimeterRectangle(4, 2));
console.log(calculatePerimeterRectangle(40, 25));

// 2. Write a function to find the area of a circle when given the radius

const calculateAreaOfCircle = (radius) => {
    return Math.floor(Math.PI * (radius ** 2));
};

// parseInt ====> Returns a intenger number eg: 40, 20... not 40.3333, 50.4321
// Math.round ====> Rounds to the nearest intenger
// Math.ceil ====> Rounds up
// Math.floor ====> Round down
// parseFloat ====> Passes a decimal point number
// ** ====> Squared

console.log(calculateAreaOfCircle(20));

// 3. Write a function that takes 
// 4 arguments: number of children, partner's name, geographic location, job title

const getDescription = (numberOfChildren, partnerName, location, job) => {
    return `I am currently a ${job} living in ${location}, and married to ${partnerName} with ${numberOfChildren} kids.`
};

console.log(getDescription(2, "Cherly", "London", "chef"));
console.log(getDescription(4, "David", "Sydney", "graphic designer"));

// 5. caculate the lifetime of snickers

const calacuteSupply = (age, amountPerDay) => {
    const maxAge = 80;
    const daysPerYear = 365;
    const calculateAge = maxAge - age;
    const supply = (daysPerYear * calculateAge) * amountPerDay;

    return `You will need ${supply} snickers to last you until the ripe old age of ${maxAge}`
};

console.log(calacuteSupply(25, 20));