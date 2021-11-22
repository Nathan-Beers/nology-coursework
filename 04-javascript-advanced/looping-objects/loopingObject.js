const message = {
    userName : "Nathan",
    content : "Have a great day!",
};

const greeting = {
    userName : "Charlie",
    content : 2531313,
};

for (let key in message) {
    console.log(key);
    console.log(message[key]);
}

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

console.log(isMessageObjectString(message));
console.log(isMessageObjectString(greeting));
