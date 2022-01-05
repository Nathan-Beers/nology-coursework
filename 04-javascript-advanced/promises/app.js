// What is a promise
// A promise has 3 states... pending, resolved and rejected


let nathansPromise = new Promise((resolve, reject) => {
    let a = 1 + 2;
    if (a == 2) {
        resolve("Success");
    } else {
        reject("Failed");
    }
});

nathansPromise
    .then((message) => {
        console.log(`${message} I am in the THEN`)
    })
    .catch((message) => {
        console.log(`${message} I am in the CATCH`)
    });