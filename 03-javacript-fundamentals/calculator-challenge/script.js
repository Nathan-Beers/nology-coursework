let sum = 0;
let displayEl = document.getElementById("display-el");
let equation = [];


let cal1 = () =>  {
    equation += 1;
    document.getElementById("display-el").innerHTML = equation;
   
};

let cal2 = () => {
    equation += 2;
    document.getElementById("display-el").innerHTML = equation;
}

let cal3 = () => {
    equation += 3;
    document.getElementById("display-el").innerHTML = equation;
}

let cal4 = () => {
    equation += 4;
    document.getElementById("display-el").innerHTML = equation;
}

let cal5 = () => {
    equation += 5;
    document.getElementById("display-el").innerHTML = equation;
}

let cal6 = () => {
    equation += 6;
    document.getElementById("display-el").innerHTML = equation;
}

let cal7 = () => {
    equation += 7;
    document.getElementById("display-el").innerHTML = equation;
}

let cal8 = () => {
    equation += 8;
    document.getElementById("display-el").innerHTML = equation;
}

let cal9 = () => {
    equation += 9;
    document.getElementById("display-el").innerHTML = equation;
}

let cal0 = () => {
    equation += 0;
    document.getElementById("display-el").innerHTML = equation;
}

let plus = () => {
    equation += "+";
    document.getElementById("display-el").innerHTML = equation;
}

let subtract = () => {
    equation += "-";
    document.getElementById("display-el").innerHTML = equation;
}

let multiply = () => {
    equation += "x";
    document.getElementById("display-el").innerHTML = equation;
}

let divide = () => {
    equation += "÷";
    document.getElementById("display-el").innerHTML = equation;
}

let decimal = () => {
    equation += ".";
    document.getElementById("display-el").innerHTML = equation;
}

let comma = () => {
    equation += ",";
    document.getElementById("display-el").innerHTML = equation;
}

let cancel = () => {
    equation = [];
    document.getElementById("display-el").innerHTML = equation;
}

