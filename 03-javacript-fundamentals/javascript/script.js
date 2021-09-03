function calculateYearsUntilRetirement(event) {
    const currentAge = event.target.value;

    const yearsLeft = 65 - currentAge;
    alert(yearsLeft)
}

function getGreetingInFrench(event) {
    const greeting = event.target.value;

    if (greeting == "Hello") {
        alert ('Bonjour')
    } else if (greeting == "Goodbye"){
        alert ('Au revoir')
    } else {
        alert ('not recognised')
    }
}

function calulateLegalAge(event) {
    const age = event.target.value;

    if (age >= 18) {
        alert ('You can drink in the UK')
    } else {
        alert ('No grape juice for you!')
    }

    if (age < 21) {
        alert ('You cannot drink in the US') 
    } else {
        alert ('Party in the USA!')
    }

}