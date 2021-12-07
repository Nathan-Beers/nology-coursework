// 1. declare an array of strings

const dogs = ["Archie", "Munchy", "Sky", "Lady"];

// 2. declare an array of number

const years = [1990, 1992, 2000, 1965, 2007];

// challenge: How do we access values?

console.log(years[3]);
console.log(dogs[2]);

let lastIndex = dogs.length -1
console.log(dogs[lastIndex]);

// challenge: How do we change values?

/*

dogs[1] = "Jasper";
//console.log(dogs[1]);

dogs.push("Lassy");
console.log(dogs[dogs.length -1]);

*/

// challenge: How do we find the index of a value?

console.log("Munchy is at index " + dogs.indexOf("Munchy"));
console.log(`Does our years have 1965 ${years.includes(1965)}`)

// 3. What about arrays of objects?

const nathan = {
    name: "Nathan",
    age: 25
}

console.log(nathan.age);

// Objects ====> collection of properties related to each other
// Arrays ====> list of items

const students = [
    {
        name: "James",
        age: 22
}, {
        name: "Jose",
        age: 32
}
];

console.log(students[1].name);

const game = [
   { title: "Legend of Zelda",
   releaseDate: 2017
}
];

console.log(game[0].title);

for (let i = 0; i < years.length; i++) {
    if (years[i] < 2000) {
        console.log(`The year is: ${years[i]}`);
    }
    
};

for (let i = 0; i < years.length; i++) {
    let yearsSince = 2021 - years[i];
    console.log(`Its been ${yearsSince} years since ${years[i]} `)
};