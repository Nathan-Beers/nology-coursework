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
    quote: "When you get tired, learn to rest, not quit.",
    skills: ["html", "css", "javascript", "lua"],
    imgURL: "https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png",
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    },
    getSkillsHTML() {
        const skillsHTML = this.skills.map(skill => `<li>${skill}</li>`)
        console.log(skillsHTML);
        return skillsHTML.join("\n");
    }
}

// WRITE A METHOD ON THE PERSON OBJECT THAT USES THE SKILLS ARRAY
// ITERATE OVER THE SKILLS ARRAY AND GENERATE A LIST ITEM FOR EACH SKILL
// E.G: <li>html</li>
// NEED TO RETURN A STRING -> ARRAY INTO A STRING

person.age = 25;

// console.log(`Hi my name is ${person.firstName} ${person.lastName}!`)
console.log(person.getSkillsHTML());

// console.log(person.getFullName())