const numbers = [100, 50, 25, 4000, 365.3];
const namesArr = ["Jack", "Nathan", "Annie"];

// forEach just iterates over array, does create a new array

// numbers.forEach((number) => {
//     console.log(number)
// });

// const newnumbers = numbers.map((number) => {
    
//     return number + 100;

// });

// Map returns a new array, you must use return keyword

// filter only works on strings, filters for characters in values declared

// const newNames = namesArr.filter((name) => {
//     return name.includes("a")
// });

// console.log(newNames)

// const newNumbers = numbers.filter((number) => {
//     return number % 2 === 0;
// });

// console.log(newNumbers)

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61];
const colours = ["red", "yellow", "pink", "green", "orange", "purple", "blue"];

// ages.forEach((age) => {
//     console.log(age)
// });

const over18Array = ages.filter((age) => {
    return age > 18;
});

// console.log(over18Array)

const greaterThan5Letters = colours.filter((colour) => {
    return colour.length > 5

});

// console.log(greaterThan5Letters)

const evenAge = ages.filter((age) => {
    return age % 2 === 0
});

console.log(evenAge)