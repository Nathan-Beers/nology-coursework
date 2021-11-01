let lives = 3;
let time = 30;
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
let question7 = false;
let question8 = false;
let question9 = false;
let question10 = false;
let questionDisplay = document.getElementById("question-el")
let imageEl = document.getElementById("img-el");
const nextQuestionDisplay = document.getElementById("next-question");
let answer1 = document.getElementById("a1");
let answer2 = document.getElementById("a2");
let answer3 = document.getElementById("a3");
let answer4 = document.getElementById("a4");
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
// if question 6 is true display question 7
// if question 7 is true display question 8
// if question 8 is true display question 9
// if question 9 is true display question 10
// if question 10 is true function final_score

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
    questionDisplay.innerHTML = ""
    imageEl.src = ""
    answer1.innerHTML = ""
    answer2.innerHTML = ""
    answer3.innerHTML = ""
    answer4.innerHTML = ""
};

// function question5 
// questionDisplay = ""
// imageEl = ""
// answer1 = ""
// answer2 = ""
// answer3 = ""
// answer4 = ""

// function question6 
// questionDisplay = ""
// imageEl = ""
// answer1 = ""
// answer2 = ""
// answer3 = ""
// answer4 = ""

// function question7 
// questionDisplay = ""
// imageEl = ""
// answer1 = ""
// answer2 = ""
// answer3 = ""
// answer4 = ""

// function question8 
// questionDisplay = ""
// imageEl = ""
// answer1 = ""
// answer2 = ""
// answer3 = ""
// answer4 = ""

// function question9 
// questionDisplay = ""
// imageEl = ""
// answer1 = ""
// answer2 = ""
// answer3 = ""
// answer4 = ""

// function question10 
// questionDisplay = ""
// imageEl = ""
// answer1 = ""
// answer2 = ""
// answer3 = ""
// answer4 = ""

// function check_answer
// question = true
// if correct = true answer is true function correct_answer
// else function lost_life
// display next question button

// event listener for next question button
// if next question button is pushed
// function check_question


nextQuestionDisplay.addEventListener("click", () => {
    q3()
});
// event listener for answer buttons 
// runs check answer function
// runs function disable buttons to prevent answering more than once