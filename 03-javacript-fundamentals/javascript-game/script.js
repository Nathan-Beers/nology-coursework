let lives = 3;
const life1 = document.getElementById("life1-el");
const life2 = document.getElementById("life2-el");
const life3 = document.getElementById("life3-el");
let points = 0;
let pointsEl = document.getElementById("points-el");
let question1 = true;
let question2 = false;
let question3 = false;
let question4 = false;
let question5 = false;
let question6 = false;
let questionDisplay = document.getElementById("question-el")
let finalDisplay = document.getElementById("main-container");
let imageEl = document.getElementById("img-el");
const nextQuestionDisplay = document.getElementById("next-question");
let restartEl = document.getElementById("restart-el");
let answer1 = document.getElementById("a1");
let answer2 = document.getElementById("a2");
let answer3 = document.getElementById("a3");
let answer4 = document.getElementById("a4");
let answersEL = document.getElementsByClassName("answer");
const allCorrect = "Wow you got them all right! Looks like your a Javascript Dev!";
const halfCorrect = "You did good! But there's a little to study up on";
const lost = "Don't get disheartened! Just practise and try again!";


// function final_score
// if score is = 10 display allCorrect
// if score is >= 5 display halfCorrect
// if score is >5 display lost

let finalScore = () => {
    imageEl.style.display = "none";
    answer1.style.display = "none";
    answer2.style.display = "none";
    answer3.style.display = "none";
    answer4.style.display = "none";
    nextQuestionDisplay.style.display = "none";
    finalDisplay.style.display = "flex";
    finalDisplay.style.flexDirection = "column";
    finalDisplay.style.justifyContent = "space-between";
    if(points === 6){
        questionDisplay.innerHTML = allCorrect;
    } else if (points >= 3) {
        questionDisplay.innerHTML = halfCorrect;
    } else {
        questionDisplay.innerHTML = lost;
    };
};


// function lost_life
// subtract 1 from lives
// if lives = 3 then change life1 image to empty heart
// if lifes = 2 then change life2 image to empty heart
// if lifes = 1 then change life3 image to empty heart
// else if lives less than or equal to 0 
// display lost message

let lostLife = () => {
    if(lives === 3) {
        lives -= 1;
        life1.src = "./resources/lost-lives.png";
    } else if(lives === 2) {
        lives -= 1;
        life2.src = "./resources/lost-lives.png";
    } else {
        lives = 0;
        life3.src = "./resources/lost-lives.png";
        finalScore();
    };
};


// function correct_answer
// add 1 to points
// display correctAnswer string random

let correct = () => {
    points += 1;
    pointsEl.innerHTML = `Points: ${points}/6`;
};


// function check_question
// switch case if all questions are false display question 1
// if question 1 is true display question 2
// if question 2 is true display question 3
// if question 3 is true display question 4
// if question 4 is true display question 5
// if question 5 is true display question 6
// if question 6 is true function final_score

let nextQuestion = () => {
    if(question6 === true) {
        finalScore();
    } else if (question5 === true) {
        q6();
    } else if (question4 === true) {
        q5();
    } else if (question3 === true) {
        q4();
    } else if (question2 === true) {
        q3();
    } else if (question1 === true) {
        q2()
    } else {
        
    }
};

// functions to change display for each question

let q2 = () => {
    questionDisplay.innerHTML = "Inside which HTML element do we put in Javascript?";
    imageEl.src = "./resources/html.png";
    answer1.innerHTML = "scripting";
    answer2.innerHTML = "script";
    answer2.setAttribute("value", "true");
    answer3.innerHTML = "javascript";
    answer3.removeAttribute("value", "true");
    answer4.innerHTML = "js";
    question2 = true;
    question1 = false;
};

let q3 = () => {
    questionDisplay.innerHTML = "Which of these is a Javascript framework?"
    imageEl.src = "./resources/js.png";
    answer1.innerHTML = "Lua";
    answer2.innerHTML = "Python";
    answer3.innerHTML = "Scss";
    answer4.innerHTML = "React";
    answer4.setAttribute("value", "true");
    answer2.removeAttribute("value", "true");
    question3 = true;
    question2 = false;
};

let q4 = () => {
    questionDisplay.innerHTML = "What is the correct syntax to refer an external script file?";
    imageEl.src = "./resources/js-square-brands.png";
    answer1.innerHTML = `script name="script.js"`;
    answer2.innerHTML = `script src="script.js"`;
    answer2.setAttribute("value", "true");
    answer3.innerHTML = `script href="script.js"`;
    answer4.innerHTML = `link src="script.js"`;
    answer4.removeAttribute("value", "true")
    question4 = true;
    question3 = false;
};

let q5 = () => {
    questionDisplay.innerHTML = "How do you add a comment in Javascript?";
    imageEl.src = "./resources/comment.png";
    answer1.innerHTML = "// Comment";
    answer1.setAttribute("value", "true");
    answer2.innerHTML = "# Comment";
    answer3.innerHTML = "--Comment--";
    answer4.innerHTML = "| Comment";
    answer2.removeAttribute("value", "true");
    question5 = true;
    question4 = false;
};


let q6 = () => { 
    questionDisplay.innerHTML = "What would: const age = (3 + 2 - 1)*2 print?";
    imageEl.src = "./resources/calculate.png";
    answer1.innerHTML = "9";
    answer2.innerHTML = "10";
    answer3.innerHTML = "(3 + 2 - 1)*2";
    answer4.innerHTML = "8";
    answer4.setAttribute("value", "true");
    answer1.removeAttribute("value", "true");
    question6 = true;
    question5 = false;
};

// event listener for next question button
// if next question button is pushed
// function check_question

nextQuestionDisplay.addEventListener("click", () => {
    nextQuestion();
    answer1.classList.remove("right-answer","wrong-answer");
    answer2.classList.remove("right-answer","wrong-answer");
    answer3.classList.remove("right-answer","wrong-answer");
    answer4.classList.remove("right-answer","wrong-answer");
    enable();
});

// event listener for restart button

let restart = () => {
    location.reload();
};

// disable buttons 

let disable = () => {
    answer1.disabled = true;
    answer2.disabled = true;
    answer3.disabled = true;
    answer4.disabled = true;
};

// enable buttons

let enable = () => {
    answer1.disabled = false;
    answer2.disabled = false;
    answer3.disabled = false;
    answer4.disabled = false;
};

// event listeners for answer buttons, and disables buttons when pressed

answer1.addEventListener("click", () => {
    disable();
    if(answer1.getAttribute("value", "true")) {
        correct();
        answer1.classList.add("right-answer")
    } else {
        lostLife();
        answer1.classList.add("wrong-answer")
    }
});

answer2.addEventListener("click", () => {
    disable();
    if(answer2.getAttribute("value", "true")) {
        correct();
        answer2.classList.add("right-answer")
    } else {
        lostLife();
        answer2.classList.add("wrong-answer")
    }
});

answer3.addEventListener("click", () => {
    disable();
    if(answer3.getAttribute("value", "true")) {
        correct();
        answer3.classList.add("right-answer")
    } else {
        lostLife();
        answer3.classList.add("wrong-answer")
    }
});

answer4.addEventListener("click", () => {
    disable();
    if(answer4.getAttribute("value", "true")) {
        correct();
        answer4.classList.add("right-answer")
    } else {
        lostLife();
        answer4.classList.add("wrong-answer")
    }
});
