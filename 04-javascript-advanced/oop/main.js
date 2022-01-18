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
    constructor(name, gear, speed) {
        this.name = name;
        this.gears = gear;
        this.speed = speed;
        this.currentDirection = 0;
    };

    getCurrentDirection() {
        return `You're currently steering at${this.currentDirection} degrees.`;
    }

    setSteer(direction) {
        this.currentDirection = direction;
        return `You're now steering at ${this.currentDirection} degrees.`;
    }

    getSummary() {
        return `You've choosen ${this.name}. Currently it's in gear ${this.gear}. And it's speed is currently ${this.speed} MPH.`
    };

    setIncreaseGear() {
        if(this.gear <= 5) {
            this.gear += 1;
            this.speed += 10;
            return `You have increased your gear to ${this.gear}, and now moving at the speed of ${this.speed} MPH.`
        } else {
            return `You are in the top gear, you cannot go any faster.`
            
        };
    };

    setDecreaseGear() {
        if(this.gear >= 1) {
            this.gear -= 1;
            this.speed -= 10;
            return `You have decreased your gear to ${this.gear}, and now moving at the speed of ${this.speed} MPH.`
        } else {
            return `You're now parked.`
        };
    };

    setReverse() {
        if(this.gear === 0 && this.speed === 0) {
            return `You are now reversing`
        } else {
            return `You're in gear ${this.gear}, traveling at the speed of ${this.speed} MPH. Please slow down before reversing.`
        }
    }

};

const car = new Vehicle("Nissan Micra", 2, 20);

class VW extends Vehicle {
    constructor(name, gear, speed, colour, isManual, doors){
        super(name, gear, speed);
        this.colour = colour;
        this.isManual = isManual;
        this.doors = doors;
    }

};

const VW1 = new VW("Up!", 6, 60, "red", true, 5);

console.log(VW1)