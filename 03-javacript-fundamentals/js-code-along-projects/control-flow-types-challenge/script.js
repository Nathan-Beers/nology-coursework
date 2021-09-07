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

// Days till weekend checker

function handleCheckDayUntilWeekend(event) {

    let today = event.target.value;

    today = today.toLowerCase()

    let day
    switch (today) {
        case "monday":
            day = "It's the start of the week 4 days to go...";
            break;
        case "tuesday":
            day = "Only 3 more days untill the weekend";
            break;
        case "wednesday":
            day = "Just 2 more left!";
            break;
        case "thursday":
            day = "1 more day to go!"
            break;
        case "friday":
            day = "It's Friday again! Just get through the day!"
            break;
        case "saturday":
            day = "It's the weekend have some fun!";
            break;
        case "sunday":
            day = "How did it go so fast? Enjoy the day!";
            break;
        default:
            day = "Sorry we didn't recognise that day"
    }

    if (day === undefined) {
        alert("Please enter what day it is");
    }else {
        alert(day);
    }
    
}

// Supermarket Vegtable pricing

function checkVegtablePricingByKg(event) {

    let veg = event.target.value;
    veg = veg.toLowerCase();
    
    let select;
    switch (veg) {
        case "potatoes":
        case "carrots":
            select = "1.19 per Kg";
            break;
        case "brocolli":
            select = "1.31 per Kg";
            break;
        case "cabbage":
            select = "0.80 per Kg";
            break;
        case "asparagus":
            select = "6.99 per Kg";
    }

    if(select == undefined) {
        alert("Select veg from the above");
    } else {
    alert(select);
    }
}