const user = {
    id: "asdf123000",
    loggedIn: true,
    information: {
        firsName: "Nathan",
        lastName: "Beers",
        age: 25
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
    }
}

console.log(user.information.age);
console.log(user.contact.address.nameOfRoad);
console.log(user.contact.contactNumber)