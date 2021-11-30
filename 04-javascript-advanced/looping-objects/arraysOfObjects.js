// // array[index].key

// // console.log(fruitObjectArray[1].fruit);
// // console.log(fruitObjectArray[0].fruit);

// // iterate over our array => array of the values

// const fruitValueArray = fruitObjectArray.map((fruitObject) => {
//     const fruitValue = fruitObject.fruit;
//     return fruitValue;
// });

// // console.log(fruitValueArray);

// // const searchTerm = "apple"

// // const searchTermCheck = fruitObjectArray.filter((fruitObject) => {
// //     const fruitMatch = fruitObject.fruit.includes(searchTerm);
// //     return fruitMatch;
// // });

// // console.log(searchTermCheck);


// // create a function that takes an array of fruit
// // -> Map over the array and generate some <li>FruitName</li>
// // -> array turn it into a string
// // Return a string

// const fruitListing = fruitObjectArray => {
//     const html = fruitObjectArray.map(fruitObject => {
//         return `<li>${fruitObject.fruit}</li>`;
//     })
//     return html.join("");
// };

// // console.log(fruitListing(fruitObjectArray))

const fruitObjectArray = [
    { fruit: "apple" , rating: 8, price: 150 },
    { fruit: "banana" , rating: 5, price: 100 },
    { fruit: "orange" ,  rating: 6, price: 120 }
];

// console.log(fruitObjectArray[1].price)

const fruitListing = fruitObjectArray => {
    const html = fruitObjectArray.map(fruitObject => {
        const price = (fruitObject.price / 100).toFixed(2);
        const captialised = fruitObject.fruit[0].toUpperCase() + fruitObject.fruit.slice(1);
        const cardHtml = `
        <div>
            <h3>${captialised}</h3>
            <p>This fruit is ${fruitObject.rating} / 10</p>
            <p>Buy now for: £${price}</p>
        </div>
        `
        return cardHtml;
    })
    return html.join("");
};



const sortedByHighestRating = fruitObjectArray.sort((a, b) => {
    return b.rating - a.rating;
})

console.log(fruitListing(sortedByHighestRating))
// if you can convert the price to eg: £1.00, £1.50, £1.20
// I want you to captialise the first letter of the fruit name

// sort the objects by rating highest first
