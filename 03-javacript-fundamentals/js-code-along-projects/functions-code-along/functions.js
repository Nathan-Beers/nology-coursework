// **Challenge**

// 1. Write a function to find the perimeter of a rectangle

const calculatePerimeter = (width, height) => {
    return (width*2)+(height*2); 
}

// 2. Write a function to find the area of a circle. When given a radius, print the area to console.

const calculateAreaOfCircle = (radius) => {
    const area = (Math.PI * radius * radius);
    return area;
}

// 3. Now do the same to find the circumference of a circle...

const calculateCircumferenceOfCircle = (diameter) => {
    const circumference = (Math.PI * diameter);
    return circumference;
}

// Write a function name getDescription that;
// Takes 4 arguments: number of children, partner's name, geographic location, job title.
//Outputs your statement to the console like so: "I am currently a X living in Y, and married to Z with N kids."
// Call the function 3 times with 3 different values for the arguments.

const getDescription = (numberOfChildren, partner, location, job) => {
    return ("I am currently a " + job + " living in " + location + ", and married to " + partner + " with " + numberOfChildren + " kid/s");
}

// 
console.log(getDescription(4, "David", "Settle", "Artist"));

console.log(getDescription(2, "Anna", "London", "Chef"));

console.log(getDescription(3, "Emma", "Poland", "Amazon warehouse operator"));

// **The Lifetime Supply of Snickers**

// Write a function named calculateSupply that:
// Takes 2 arguements: age, amount per day,
// calculates the amount cosumed for the rest of your life (based on a consta max age).
// Outputs the result to the screen like so: "You will X to last you until the ripe old age of Y"
// Call the function three times, passing in different values each time.
// bonus: accept floating pint values for amount per day, and round the result to a round number.

const calculateSupply = (currentAge, amountPerDay) => {
    const maxAge = 72
    const  amountOfSnickersPerLifetime = (amountPerDay * 365) * (maxAge - currentAge);
    const message = `You will need ${amountOfSnickersPerLifetime} bars of Snickers to last you until the ripe old age of ${maxAge}`;
    console.log(message);
}

calculateSupply(25, 2);
calculateSupply(71, 4);
calculateSupply(45, 6)

// **The Temperature Converter **
// Celsius/farenheit converter

const celsiusToFarenheit = (celsius) => {
    const cToF = (celsius / 5 * 9)+ 32;
    console.log(`${celsius} °C is ${cToF} °F`);
}

const farenheitToCelsius = (farenheit) => {
    const fToC = (farenheit - 32)*5/9;
    console.log(`${farenheit} °F is ${fToC} °C`);
}
celsiusToFarenheit(20)
farenheitToCelsius(55)

//**The Puppy Age calculator **
// You know how old your dog is in human years but what about dog years?

const calculateDogYears = (humanYears) => {
    const dogYears = humanYears * 7;
    console.log(`Your dog is ${humanYears} in human years, and ${dogYears} in dog years!`);
}

calculateDogYears(5); 
