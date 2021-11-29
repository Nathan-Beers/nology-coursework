const validMessage = {
    userName : "Nathan",
    content : "Have a great day!",
};

const invalidMessage = {
    userName : "Charlie",
    error : 2531313,
};

// for (let key in message) {
//     console.log(key);
//     console.log(message[key]);
// }

// Create a function that loops through a message object
// Check that all of values are strings
// You will return true if they are and false otherwise

const isMessageObjectString = (messageObject) => {
    for (let key in messageObject) {
       const typeCheck = typeof messageObject[key] !== "string";
        
       if(typeCheck) {
            return false;
        };
     
    };
    return true;
};

// console.log(isMessageObjectString(message));
// console.log(isMessageObjectString(greeting));

// const validMessageValues = Object.values(validMessage);
// const invalidMessageValues = Object.values(invalidMessage);

// console.log(validMessageValues);
// console.log(invalidMessageValues);

// console.log(validMessageValues.every(validMessage => {
//     const typeCheck = typeof validMessage === "string";
//     return typeCheck;
// }));

// console.log(invalidMessageValues.every(invalidMessage => {
//     const typeCheck = typeof invalidMessage === "string";
//     return typeCheck;
// }));

const validMessageKeys = Object.keys(validMessage);
const invalidMessageKeys = Object.keys(invalidMessage);

// console.log(validMessageKeys);
// console.log(invalidMessageKeys);

// Write a function that will check the keys of a mesage object
// valid keys =>["username", "content"]
// so i want you to return true for valid, false for invalid


const validateKeys = (message) => {
    const objectKeys = Object.keys(message);

    const keyCheck = objectKeys.every(key => {
        const validKeys = ['userName', 'content'];
        return validKeys.includes(key);
    });

    return keyCheck;
};

console.log(validateKeys(validMessage));
console.log(validateKeys(invalidMessage));