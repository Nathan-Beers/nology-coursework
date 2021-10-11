let displayEl = document.getElementById("display-el");
let add = false;
let minus = false;
let times = false;
let div = false;
let firstNumber = 0;
let secondNumber = 0;
let submit = document.querySelector("submit");
let equationDisplay = [];
let equationDisplayEl = document.getElementById("equationDisplay-el");
let operator = "";


let getFirstNumber = () => {
        displayEl.innerHTML = document.getElementById("firstNumber").value;
        firstNumber = parseInt(document.getElementById("firstNumber").value, 10);
        equationDisplayEl.innerHTML = firstNumber;
};

let getOperator = (event) => {
        operator = event.target.value;
        displayEl.innerHTML = operator;
        equationDisplayEl.innerHTML = firstNumber + operator;
};

let getSecondNumber = () => {
        displayEl.innerHTML = document.getElementById("secondNumber").value;
        secondNumber = parseInt(document.getElementById("secondNumber").value, 10);
        equationDisplayEl.innerHTML = firstNumber + operator + secondNumber;
}




