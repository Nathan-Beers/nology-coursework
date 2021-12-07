// Shallow Copy

const simpleArray = [1, 2, 3];
const simpleObject = { key : "value"};

const shallowArrayCopy = simpleArray;
const shallowObjectCopy = simpleObject;

// Interacting with original complex data types
// simpleArray.push(4);
// simpleObject.newKey = "new value";


// console.log(simpleArray, simpleObject);

// Deep Copy
// spread operator -> ...

const deepArrayCopy = [...simpleArray];
const deepObjectCopy = {...simpleObject};

simpleArray.push(4);
simpleObject.newKey = "new value";

// console.log(deepArrayCopy, simpleArray);
// console.log(deepObjectCopy, simpleObject);

// Nested Objects
// Don't work with the spread operator, only happens on one level
// Arrays -> Instead you have to map over using the spread operator for arrays
// Objects -> Spread each key

const complexArray = [[1], [2], [3]];
const complexObject = {data : {key : "value"}};

const complexArrayCopy = complexArray.map(array => [...array]);
const complexObjectCopy = {...complexObject, data : {...complexObject.data}};

complexArray[0].push(2);
complexObject.data.newKey = "new value";

// console.log(complexObjectCopy);
// console.log(complexArrayCopy);

// JSON

// Turns into a string
const JSONObject = JSON.stringify(complexObject);

// Converts string JSON as normal object data
const parsedJSON = JSON.parse(JSONObject);

complexObject.data.newKey = "new value";

console.log(JSONObject);
console.log(parsedJSON.data);

// Lodash
