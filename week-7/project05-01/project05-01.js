"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Daniella Bertoldi
      Date:   09/28/2025

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 200;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
// and the node list for questions

//declaring time iD
let timeID;


//DIV inputs questions
let questionList = document.querySelectorAll("div#quiz input");
























/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;

   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }
   }
   return correctCount;
}

//Add an onclick events
startQuiz.onclick = function() {
  // show the overlay
  overlay.setAttribute("class", "showquiz");

  // start the countdown every 1 second
  timeID = setInterval(countdown, 1000);
};

// create the countdown function
function countdown() {
  if (timeLeft === 0) {
    let totalCorrect = checkAnswers();

    // 100% or show incorrect count and reset
    if (totalCorrect === correctAnswers.length) {
      alert("Congratulations! You scored 100%.");
    } else {
      alert((correctAnswers.length - totalCorrect) + " incorrect out of " + correctAnswers.length + ".");

      //reset time
      timeLeft = quizTime;
      quizClock.value = timeLeft;
      overlay.setAttribute("class", "hidequiz"); // hide overlay
    }
  } else {
    timeLeft--;
    quizClock.value = timeLeft;
  }
}

/*------------- End of function to check the student answers ----------------*/