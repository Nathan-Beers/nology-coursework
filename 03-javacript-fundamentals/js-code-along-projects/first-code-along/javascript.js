//  If a name, is a coaches name, log "It's a coach"
//  Had to change variable from name to user due to name being deprecated

const user = "Andy";
if (user == "Andy") {
    console.log("it's a coach")
}
//  If a greeting, is bonjour, log "comment ca va"

const greeting = "bonjour";
if (greeting == "bonjour") {
    console.log("comment ca va")
}else{
    console.log("Sorry I don't speak that")
    }

//  If a score, reaches ten, log "you won the game"

let score = 10;
if (score = 10) {
    console.log("you won the game")
}

//  If age, is greater than 65, "Time to retire"

let age = 65;
if (age >= 65) {
    console.log("Time to retire I'm afraid")
}else{
    console.log("Just a few more years...")
}

//  If hasCovid, log "time to isolate", else "Keep social distancing"

const hasCovid = true;
const isShielding = false;
if (hasCovid || isShielding) {
    console.log("time to isolate")
}else{
    console.log("Keep social distancing")
}

//  If age, greater than 18, and isBritish, "You can vote in the next election"

const isBritish = true;
age = 18;
if (age > 17 && isBritish) {
    console.log("Have you registered to vote?")
}