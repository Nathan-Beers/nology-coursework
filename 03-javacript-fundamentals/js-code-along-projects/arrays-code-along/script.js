// 1. Create a coaches array
const coaches = ["Andy", "Sam", "Bex", "Ashlee", "Jake"];
console.log(coaches[1]);

// 2. Create a array of pets
const pets = ["Misty", "Snowy", "Archie", "Fenton"];
console.log(pets[2]);

const ages = [20, 25, 28, 50];
console.log(ages[3]);

// 3. Create a sample for loop
for (let i = 0; i < 5; i++) {
    console.log(`The index on this loop was ${i}`);
}

// Create a loop using an array
for (let index = 0; index < pets.length; index++) {
    console.log(pets[index]);
}

// Testing out different start position in the index

for (let index = 2; index < coaches.length; index++) {
    console.log(coaches[index]);
}