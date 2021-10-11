let displayEl = document.getElementById("display-el");
let add = false;
let minus = false;
let times = false;
let div = false;
let firstNumber = 0;
let secondNumber = 0;
let submit = document.querySelector("submit");
let equationDisplay = [];
let equationDisplayEl = document.getElementById("equationDisplay-el")


let getFirstNumber = () => {
        displayEl.innerHTML = document.getElementById("firstNumber").value;
        equationDisplayEl.innerHTML = document.getElementById("firstNumber").value;
        firstNumber = parseInt(document.getElementById("firstNumber").value, 10);
};

let getOperator = (event) => {
        let operator = event.target.value;
        displayEl.innerHTML = operator;
        equationDisplayEl.innerHTML = firstNumber + operator;
};


