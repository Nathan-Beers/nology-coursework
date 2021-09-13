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