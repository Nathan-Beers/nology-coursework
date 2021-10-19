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

const studentContainer = document.querySelector(".students-container");

// studentContainer.style.border = "50px solid red";

const person = {
    firstName: "Nathan",
    lastName: "Beers",
    quote: "When you get tired, learn to rest, not quit.",
    skills: ["html", "css", "javascript", "lua"],
    imgURL: "https://remaxgem.com/wp-content/themes/tolips/images/placehoder-user.jpg",
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    },
    getSkillsHTML() {
        const skillsHTML = this.skills.map(skill => `<li>${skill}</li>`)
        console.log(skillsHTML);
        return skillsHTML.join("\n");
    },
    getUserProfile() {
        const personHTML = `<article class="student-card">
        <img src=${this.imgURL} />
        <h2>${this.getFullName()}</h2>
        <blockquote>${this.quote}</blockquote>
        <h3>Skills</h3>
        <ul>${this.getSkillsHTML()}</ul>
    </article>
    `
    return personHTML;
    }
};


for(let index = 0; index < 10; index++) {
    studentContainer.innerHTML += person.getUserProfile();
}

// WRITE A METHOD ON THE PERSON OBJECT THAT USES THE SKILLS ARRAY
// ITERATE OVER THE SKILLS ARRAY AND GENERATE A LIST ITEM FOR EACH SKILL
// E.G: <li>html</li>
// NEED TO RETURN A STRING -> ARRAY INTO A STRING

person.age = 25;

// console.log(`Hi my name is ${person.firstName} ${person.lastName}!`)
console.log(person.getSkillsHTML());

// console.log(person.getFullName())