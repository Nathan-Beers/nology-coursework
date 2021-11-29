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

console.log(fruitValueArray);