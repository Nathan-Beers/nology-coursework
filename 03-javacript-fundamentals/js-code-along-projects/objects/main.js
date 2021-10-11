// // OBJECTS SYNTAX

// const exampleObject = {
//     key: "value", // COMMA FOR OTHER KEYS
//     types: "any",
//     method() {
//         // DO SOMETHING?
//         // this.key
//         // RETRUNS SOMETHING?

//         // "this" keyword refers to the object
//         return this.key + " " + this.types
//     }
// }

// // ACCESS KEYS
// // DOT NOTATION

// console.log(exampleObject.key)
// console.log(exampleObject.types)

// // CALLING A METHOD
// console.log(exampleObject.method())

// // SQUARE BRACKETS
// console.log(exampleObject["key"])
// console.log(exampleObject["types"])

// // CREATE NEW KEYS

// exampleObject.newKey = "new value";
// console.log(exampleObject.newKey)

const person = {
    firstName: "Nathan",
    lastName: "Beers",
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

person.age = 25;
console.log(`Hi my name is ${person.firstName} ${person.lastName}!`)
console.log(person)

console.log(person.getFullName())