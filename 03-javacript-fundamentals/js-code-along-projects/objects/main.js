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

// const studentContainer = document.querySelector(".students-container");

// studentContainer.style.border = "50px solid red";

// const person = {
//     firstName: "Nathan",
//     lastName: "Beers",
//     quote: "When you get tired, learn to rest, not quit.",
//     skills: ["html", "css", "javascript", "lua"],
//     imgURL: "https://remaxgem.com/wp-content/themes/tolips/images/placehoder-user.jpg",
//     getFullName(){
//         return `${this.firstName} ${this.lastName}`
//     },
//     getSkillsHTML() {
//         const skillsHTML = this.skills.map(skill => `<li>${skill}</li>`)
//         console.log(skillsHTML);
//         return skillsHTML.join("\n");
//     },
//     getUserProfile() {
//         const personHTML = `<article class="student-card">
//         <img src=${this.imgURL} />
//         <h2>${this.getFullName()}</h2>
//         <blockquote>${this.quote}</blockquote>
//         <h3>Skills</h3>
//         <ul>${this.getSkillsHTML()}</ul>
//     </article>
//     `
//     return personHTML;
//     }
// };


// for(let index = 0; index < 10; index++) {
//     studentContainer.innerHTML += person.getUserProfile();
// }

// WRITE A METHOD ON THE PERSON OBJECT THAT USES THE SKILLS ARRAY
// ITERATE OVER THE SKILLS ARRAY AND GENERATE A LIST ITEM FOR EACH SKILL
// E.G: <li>html</li>
// NEED TO RETURN A STRING -> ARRAY INTO A STRING

// person.age = 25;

// console.log(`Hi my name is ${person.firstName} ${person.lastName}!`)
// console.log(person.getSkillsHTML());

// console.log(person.getFullName())

// CLASS SYNTAX

// PascalCase -> naming convention for classes
class ExampleClass {
    constructor(firstName, lastName, age) {
        this.firstName = firstName,
        this.lastName = lastName,
        this.age = age
    }

    greet() {
        return `Hi my name is ${this.firstName} ${this.lastName}.`
    }
};

// CLASS INHERTIANCE SYNTAX

class ExtendedClass extends ExampleClass {
    constructor(firstName, lastName, age, subject) {
        super(firstName, lastName, age),
        this.subject = subject
    }

    greet() {
        return `Hi I am Mr ${this.lastName}, I will teach you ${this.subject}.`
    }
}

console.log(new ExtendedClass("Nathan", "Beers", 25, "javascript").greet())

// const exampleOne = new ExampleClass("Nathan", "Beers", 25);
// const exampleTwo = new ExampleClass("John", "Doe", 37);


// console.log(exampleOne.greet());
// console.log(exampleTwo.greet());

class UserProfile {
    constructor(firstName, lastName, quote, skills, imgURL) {
        this.firstName = firstName,
        this.lastName = lastName,
        this.quote = quote,
        this.skills = skills,
        this.imgURL = imgURL
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
    getSkillsHTML() {
        const skillsHTML = this.skills.map(skill => `<li>${skill}</li>`)
        return skillsHTML.join("\n");
    }
    getProfileHTML() {
        const profileHTML = `<article class="student-card">
        <img src=${this.imgURL} />
        <h2>${this.getFullName()}</h2>
        <blockquote>${this.quote}</blockquote>
        <h3>Skills</h3>
        <ul>${this.getSkillsHTML()}</ul>
    </article>
    `
    return profileHTML;
    }
}

// const studentContainer = document.querySelector(".students-container")

const nathan = new UserProfile(
    "Nathan", 
    "Beers", 
    "When you get tired, learn to rest, not quit.",
    ["html", "css", "javascript", "lua"],
    "https://remaxgem.com/wp-content/themes/tolips/images/placehoder-user.jpg"
); 

const charlie = new UserProfile(
    "Charlie",
    "Richardson",
    "It doesn't get easier, you just go faster",
    ["html", "css", "javascript"],
    "https://remaxgem.com/wp-content/themes/tolips/images/placehoder-user.jpg"

);

const anna = new UserProfile(
    "Anna",
    "Racheva",
    "Out of the mountain of despair, a stone of hope.",
    ["html", "css"],
    "https://remaxgem.com/wp-content/themes/tolips/images/placehoder-user.jpg"
);

// studentContainer.innerHTML += nathan.getProfileHTML()
// studentContainer.innerHTML += charlie.getProfileHTML()
// studentContainer.innerHTML += anna.getProfileHTML()
