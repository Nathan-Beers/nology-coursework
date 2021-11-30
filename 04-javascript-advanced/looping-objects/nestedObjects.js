const user = {
    id: "asdf123000",
    loggedIn: true,
    information: {
        firsName: "Nathan",
        lastName: "Beers",
        age: 25,
        likes: ["drawing", "running", "baking"]
    },
    contact: {
        email: "nathan@nathan.co.uk",
        contactNumber: "077579437283",
        address: {
            houseNumber: 30,
            nameOfRoad: "Couch End",
            postcode: "N18 5PS",
            country: "UK"
        }
    },
    
};

const userTwo = {
    id: "asdf123000",
    loggedIn: true,
    information: {
        firsName: "Nathan",
        lastName: "Beers",
        age: 25,
        likes: ["drawing", "running", "baking"]
    },
    contact: {
        email: "nathan@nathan.co.uk",
        contactNumber: "077579437283",
        address: {
            houseNumber: 30,
            nameOfRoad: "Couch End",
            postcode: "N18 5PS",
            country: "UK"
        }
    },
    
};

// console.log(user.information.age);
// console.log(user.contact.address.nameOfRoad);
// console.log(user.contact.contactNumber)

// age
// console.log(user.information.age);
// // country
// console.log(user.contact.address.country);
// // return whole contact object
// console.log(user.contact);

// console.log(user.information.likes[1])

const userArray = [user, userTwo];

userArray.forEach(user => {
    console.log(user.information.likes)
})