// Odd or even number checker

function handleCheckOddOrEven(event) {
    
    const number = event.target.value;

    if(number % 2 == 0) {
        alert ('Your number is even');
    }
    else {
        alert ('Your number is odd');
    }
}