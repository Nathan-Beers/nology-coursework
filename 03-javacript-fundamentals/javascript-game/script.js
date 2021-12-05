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
let time = 10;
let timerEl = document.querySelector(".timer");
const allCorrect = "Wow you got them all right! Looks like your a Javascript Dev!";
const halfCorrect = "You did good! But there's a little to study up on";
const lost = "Don't ge  1t disheartened! Just practise and try again!";

// Questions object

let questions = {
    q2 : {  
        question : "Inside which HTML element do we put in Javascript?",
        image : "./resources/html.png",
        a1 : "scripting",
        a2 : "script",
        a3 : "javascript",
        a4 : "js",
        change()  {
            questionDisplay.innerHTML = this.question;
            imageEl.src = this.image;
            answer1.innerHTML = this.a1;
            answer2.innerHTML = this.a2;
            answer3.innerHTML = this.a3;
            answer4.innerHTML = this.a4;
            answer2.setAttribute("value", "true");
            answer3.removeAttribute("value", "true");
            question2 = true;
            question1 = false;
        },
    },

    q3 : {  
        question : "Which of these is a Javascript framework?",
        image : "./resources/js.png",
        a1 : "Lua",
        a2 : "Python",
        a3 : "Scss",
        a4 : "React",
        change()  {
            questionDisplay.innerHTML = this.question;
            imageEl.src = this.image;
            answer1.innerHTML = this.a1;
            answer2.innerHTML = this.a2;
            answer3.innerHTML = this.a3;
            answer4.innerHTML = this.a4;
            answer4.setAttribute("value", "true");
            answer2.removeAttribute("value", "true");
            question3 = true;
            question2 = false;
        },
    },

    q4 : {  
        question : "What is the correct syntax to refer an external script file?",
        image : "./resources/js-square-brands.png",
        a1 : `script name="script.js"`,
        a2 : `script src="script.js"`,
        a3 : `script href="script.js"`,
        a4 : `link src="script.js"`,
        change()  {
            questionDisplay.innerHTML = this.question;
            imageEl.src = this.image;
            answer1.innerHTML = this.a1;
            answer2.innerHTML = this.a2;
            answer3.innerHTML = this.a3;
            answer4.innerHTML = this.a4;
            answer2.setAttribute("value", "true");
            answer4.removeAttribute("value", "true")
            question4 = true;
            question3 = false;
        },
    },

    q5 : {  
        question : "How do you add a comment in Javascript?",
        image : "./resources/comment.png",
        a1 : "// Comment",
        a2 : "# Comment",
        a3 : "--Comment--",
        a4 : "| Comment",
        change()  {
            questionDisplay.innerHTML = this.question;
            imageEl.src = this.image;
            answer1.innerHTML = this.a1;
            answer2.innerHTML = this.a2;
            answer3.innerHTML = this.a3;
            answer4.innerHTML = this.a4;
            answer1.setAttribute("value", "true");
            answer2.removeAttribute("value", "true");
            question5 = true;
            question4 = false;
        },
    },

    q6 : {  
        question : "What would: const age = (3 + 2 - 1)*2 print?",
        image : "./resources/calculate.png",
        a1 : "9",
        a2 : "10",
        a3 : "(3 + 2 - 1)*2",
        a4 : "8",
        change()  {
            questionDisplay.innerHTML = this.question;
            imageEl.src = this.image;
            answer1.innerHTML = this.a1;
            answer2.innerHTML = this.a2;
            answer3.innerHTML = this.a3;
            answer4.innerHTML = this.a4;
            answer4.setAttribute("value", "true");
            answer1.removeAttribute("value", "true");
            question6 = true;
            question5 = false;
        },
    },
};


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
        questions.q6.change();
    } else if (question4 === true) {
        questions.q5.change();
    } else if (question3 === true) {
        questions.q4.change();
    } else if (question2 === true) {
        questions.q3.change();
    } else if (question1 === true) {
        questions.q2.change();
    } else {
        
    }
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
    time = 10;
    timer()
});

// event listener for restart button

restartEl.addEventListener("click", ()  => {
    location.reload();
});

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


let timer = setInterval(() => {
        if(time === 0) {
            clearInterval();
            disable();
        } else {
        time -= 1;
        timerEl.innerHTML = `Time: ${time}`; 
        console.log(time);
        }
    }, 1000);

timer();

