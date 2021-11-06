let lives = 3;
const life1 = document.getElementById('life1-el');
const life2 = document.getElementById('life2-el');
const life3 = document.getElementById('life3-el');
let points = 0;
let question1 = false;
let question2 = false;
let question3 = false;
let question4 = false;
let question5 = false;
let question6 = false;
let questionDisplay = document.getElementById("question-el")
let imageEl = document.getElementById("img-el");
const nextQuestionDisplay = document.getElementById("next-question");
let restartEl = document.getElementById("restart-el");
let answer1 = document.getElementById("a1");
let answer2 = document.getElementById("a2");
let answer3 = document.getElementById("a3");
let answer4 = document.getElementById("a4");
let answerButtons = document.querySelector(".answer");
const correctAnswer = ["Well done!", "Great job on that one!", "Excellent"];
const wrongAnswer = ["Maybe study a little more", "That was a tough one", "Better luck next time"]
const allCorrect = "Wow you got them all right! Looks like your a Javascript Dev!";
const halfCorrect = "You did good! But there's a little to study up on";
const lost = "Don't get disheartened! Just practise and try again!";


// function final_score
// if score is = 10 display allCorrect
// if score is >= 5 display halfCorrect
// if score is >5 display lost

// for loop
// if lives are = 0
// display lost

// function lost_life
// subtract 1 from lives
// if lives = 3 then change life1 image to empty heart
// if lifes = 2 then change life2 image to empty heart
// if lifes = 1 then change life3 image to empty heart
// else if lives less than or equal to 0 
// display lost message

let lostLife = () => {
    if(lives = 3) {
        lives -= 1;
        life1.src = "./resources/lost-lives.png";
    } else if(lives = 2) {
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



// function check_question
// switch case if all questions are false display question 1
// if question 1 is true display question 2
// if question 2 is true display question 3
// if question 3 is true display question 4
// if question 4 is true display question 5
// if question 5 is true display question 6
// if question 6 is true function final_score

let q2 = () => {
    questionDisplay.innerHTML = "Inside which HTML element do we put in Javascript?";
    imageEl.src = "./resources/html.png";
    answer1.innerHTML = "scripting";
    answer1.value = false;
    answer2.innerHTML = "script";
    answer2.value = true;
    answer3.innerHTML = "javascript";
    answer3.value = false;
    answer4.innerHTML = "js";
    answer4.value= false;
};

let q3 = () => {
    questionDisplay.innerHTML = "Which of these is a Javascript framework?"
    imageEl.src = "./resources/js.png";
    answer1.innerHTML = "Lua";
    answer1.value = false;
    answer2.innerHTML = "Python";
    answer2.value = false;
    answer3.innerHTML = "Scss";
    answer3.value = false;
    answer4.innerHTML = "React";
    answer4.value = true;
};

let q4 = () => {
    questionDisplay.innerHTML = "What is the correct syntax to refer an external script file?";
    imageEl.src = "./resources/js-square-brands.png";
    answer1.innerHTML = `script name="script.js"`;
    answer1.value = false;
    answer2.innerHTML = `script src="script.js"`;
    answer2.value = true;
    answer3.innerHTML = `script href="script.js"`;
    answer3.value = false;
    answer4.innerHTML = `link src="script.js"`;
    answer4.value = false;
};

let q5 = () => {
    questionDisplay.innerHTML = "How do you add a comment in Javascript?";
    imageEl.src = "./resources/comment.png";
    answer1.innerHTML = "// Comment";
    answer1.value = true;
    answer2.innerHTML = "# Comment";
    answer2.value = false;
    answer3.innerHTML = "--Comment--";
    answer3.value = false;
    answer4.innerHTML = "| Comment";
    answer4.value = false;
};


let q6 = () => { 
    questionDisplay.innerHTML = "What would: const age = (3 + 2 - 1)*2 print?";
    imageEl.src = "./resources/calculate.png";
    answer1.innerHTML = "9";
    answer1.value = false;
    answer2.innerHTML = "10";
    answer2.value = false;
    answer3.innerHTML = "(3 + 2 - 1)*2";
    answer3.value = false;
    answer4.innerHTML = "8";
    answer4.value = true;
};

// function check_answer
// question = true
// if correct = true answer is true function correct_answer
// else function lost_life
// display next question button

// event listener for next question button
// if next question button is pushed
// function check_question

nextQuestionDisplay.addEventListener("click", () => {
    q6()
});

// event listener for restart button

restartEl.addEventListener("click", () => {
    location.reload();
});

// event listeners for answer buttons, and disables buttons when pressed

answer1.addEventListener("click", () => {
    checkAnswer();
    answerButtons.disabled = true;
});

answer2.addEventListener("click", () => {
    checkAnswer();
    answerButtons.disabled = true;
});

answer3.addEventListener("click", () => {
    checkAnswer();
    answerButtons.disabled = true;
});

answer4.addEventListener("click", () => {
    checkAnswer();
    answerButtons.disabled = true;
});