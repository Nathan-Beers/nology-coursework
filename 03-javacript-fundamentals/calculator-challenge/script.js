let displayEl = document.getElementById("display-el");
let firstNumber = null;
let secondNumber = null;
let equationDisplayEl = document.getElementById("equationDisplay-el");
let operator = "";
let firstNumberEl = document.getElementById("firstNumber");
let secondNumberEl = document.getElementById("secondNumber");
let cancelEl = document.getElementById("reset");

let reset = () => {
        cancelEl.src = "./resources/btn_C_pressed.png";
        location.reload();
}


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
        displayEl.innerHTML = secondNumberEl.value;
        secondNumber = parseInt(secondNumberEl.value, 10);
        equationDisplayEl.innerHTML = firstNumber + operator + secondNumber;
}


let calculate = () => {
        let equation = [firstNumber, operator, secondNumber];
        
        

        if(firstNumber === null || operator === "" || secondNumber === null){
                alert("Please enter two numbers and select an operator");
                invalid();
        } else if (typeof firstNumber == "number" && operator === "" && typeof secondNumber == "number") {
                alert("Please select an operator");
        } else {
                let sum;
                equationDisplayEl.innerHTML = `${firstNumber}${operator}${secondNumber}`;
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



}



