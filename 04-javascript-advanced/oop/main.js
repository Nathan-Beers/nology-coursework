// class Book {
//     constructor(title, author, genre, year) {
//         this.title = title;
//         this.author = author;
//         this.genre = genre;
//         this.year = year;
//     };

//     getSummary() {
//         return `${this.title} is written by ${this.author}. The genre is ${this.genre} and it was published in ${this.year}.`
//     };
// };

// const book1 = new Book("In an absent dream", "Seanan McGuire", "Fantasy", 2019);

// class Magazine extends Book {
//     constructor(title, author, genre, year, length) {
//         super(title, author, genre, year)
//         this.length = length;
//     }
// }

// const mag1 = new Magazine("Sourdough Monthly", "Nathan Beers", "Baking", 2022, 50);
// console.log(mag1);

// console.log(mag1.getSummary())

class Vehicle {
    constructor(name, gears, speed) {
        this.name = name;
        this.gears = gears;
        this.speed = speed;
        this.currentDirection = 0;
    };

    getSpeed() {
        return `You're currently traveling at ${this.speed} MPH.`
    }

    getCurrentDirection() {
        return `You're currently steering at${this.currentDirection} degrees.`;
    }

    setSteer(direction) {
        this.currentDirection = direction;
        return `You're now steering at ${this.currentDirection} degrees.`;
    }

    getSummary() {
        return `You've choosen ${this.name}. Currently it's in gear ${this.gears}. And it's speed is currently ${this.speed} MPH.`
    };

    setIncreaseGear() {
        if(this.gears <= 5) {
            this.gears += 1;
            this.speed += 10;
            return `You have increased your gear to ${this.gears}, and now moving at the speed of ${this.speed} MPH.`
        } else {
            return `You are in the top gear, you cannot go any faster.`
            
        };
    };

    setDecreaseGear() {
        if(this.gears >= 1) {
            this.gears -= 1;
            this.speed -= 10;
            return `You have decreased your gear to ${this.gears}, and now moving at the speed of ${this.speed} MPH.`
        } else {
            return `You're now parked.`
        };
    };

    setReverse() {
        if(this.gears === 0 && this.speed === 0) {
            return `You are now reversing`
        } else {
            return `You're in gear ${this.gears}, traveling at the speed of ${this.speed} MPH. Please slow down before reversing.`
        }
    }

};

const car = new Vehicle("Nissan Micra", 2, 20);

console.log(car)
console.log(car.setIncreaseGear())


class VW extends Vehicle {
    constructor(name, gears, speed, colour, isManual, doors){
        super(name, gears, speed);
        this.colour = colour;
        this.isManual = isManual;
        this.doors = doors;
    }

};

const VW1 = new VW("Up!", 6, 60, "red", true, 5);

console.log(VW1.setSteer(45));
console.log(VW1.setSteer(90));
console.log(VW1.getSpeed());
console.log(VW1.setDecreaseGear())
