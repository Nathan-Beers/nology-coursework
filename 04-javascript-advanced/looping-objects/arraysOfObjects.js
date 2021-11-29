const fruitObjectArray = [
    { fruit: "apple" },
    { fruit: "banana" },
    { fruit: "orange" }
];

// array[index].key

// console.log(fruitObjectArray[1].fruit);
// console.log(fruitObjectArray[0].fruit);

// iterate over our array => array of the values

const fruitValueArray = fruitObjectArray.map((fruitObject) => {
    const fruitValue = fruitObject.fruit;
    return fruitValue;
});

// console.log(fruitValueArray);

// const searchTerm = "apple"

// const searchTermCheck = fruitObjectArray.filter((fruitObject) => {
//     const fruitMatch = fruitObject.fruit.includes(searchTerm);
//     return fruitMatch;
// });

// console.log(searchTermCheck);


// create a function that takes an array of fruit
// -> Map over the array and generate some <li>FruitName</li>
// -> array turn it into a string
// Return a string

const fruitListing = fruitObjectArray => {
    const html = fruitObjectArray.map(fruitObject => {
        return `<li>${fruitObject.fruit}</li>`;
    })
    return html.join("");
};

// console.log(fruitListing(fruitObjectArray))