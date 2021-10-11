let displayEl = document.getElementById("display-el");
let firstNumber = 0;
let secondNumber = 0;
let equationDisplay = [];
let equationDisplayEl = document.getElementById("equationDisplay-el");
let operator = "";
let firstNumberEl = document.getElementById("firstNumber");
let secondNumberEl = document.getElementById("secondNumber");


let getFirstNumber = () => {
        displayEl.innerHTML = firstNumberEl.value;
        firstNumber = parseInt(firstNumberEl.value, 10);
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

let calculate = () => {
        let equation = [firstNumber, operator, secondNumber];
        
        let sum;
        switch (operator) {
                case "+":
                        sum = equation[0] + equation[2];
                        displayEl.innerHTML = sum;
                        break;
                case "-":
                        sum = equation[0] - equation[2];
                        displayEl.innerHTML = sum;
                        break;
                case "x":
                        sum = equation[0] * equation[2];
                        displayEl.innerHTML = sum;
                        break;
                case "÷":
                        sum = equation[0] / equation[2];
                        displayEl.innerHTML = sum;
                        break;   
        } 



}



