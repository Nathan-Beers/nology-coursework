let displayEl = document.getElementById("display-el");
let add = false;
let minus = false;
let times = false;
let div = false;
let firstNumber = 0;
let secondNumber = 0;
let equation = [firstNumber, secondNumber];
let submit = document.querySelector("submit");
let equationDisplay = [];
let equationDisplayEl = document.getElementById("equationDisplay-el")


let getFirstNumber = () => {
        displayEl.innerHTML = document.getElementById("firstNumber").value;
        equationDisplayEl.innerHTML = document.getElementById("firstNumber").value;
        equation[0] = parseInt(document.getElementById("firstNumber").value, 10);
};

