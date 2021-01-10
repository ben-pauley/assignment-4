var timerID;
var timerTickerID;
var timeLeft = 61;
var questionsAndAnswer = {
  q1: {
    answer: "a1",
    actual: "",
    nextQuestion: "q2",
  },
  q2: {
    answer: "a3",
    actual: "",
    nextQuestion: "q3",
  },
  q3: {
    answer: "a2",
    actual: "",
    nextQuestion: "q4",
  },
  q4: {
    answer: "a4",
    actual: "",
    nextQuestion: "q5",
  },
  q5: {
    answer: "a1",
    actual: "",
    nextQuestion: "",
  },
};

function startQuiz() {
  timerID = setTimeout(showGameOver, 60000);
  timerTickerID = setInterval(updateTicker, 1000);
  showQuestion("q1");
}

function showQuizScreen() {
  screenPicker("quizScreen");
}

function showGameOver() {
  screenPicker("gameOverScreen");

  clearInterval(timerTickerID);
}

function showQuestion(questionID) {
  showQuizScreen();
  document.getElementById("q1").style.display = "none";
  document.getElementById("q2").style.display = "none";
  document.getElementById("q3").style.display = "none";
  document.getElementById("q4").style.display = "none";
  document.getElementById("q5").style.display = "none";
  document.getElementById(questionID).style.display = "block";
}

function updateTicker() {
	if (timeLeft > 0) {
		timeLeft--;
		document.getElementById("timer").textContent = "Time: " + timeLeft;
	}
}

function submitAnswer(questionID, answerID) {
	var nextQuestionID = questionsAndAnswer[questionID].nextQuestion;
	questionsAndAnswer[questionID].actual = answerID;
  if (nextQuestionID) {
		showQuestion(nextQuestionID);
		showResult(questionID);
    return;
  }
	showUserInitials();
  stopTimer();
}

function showResult(questionID) {
	var previousQuestion = questionsAndAnswer[questionID];
	if (previousQuestion.actual === previousQuestion.answer) {
		var correct = document.getElementById("correct");
		correct.style.display = "block";
		setTimeout(function(){
			correct.style.display = "none";
		}, 1500);
		return;
	}
	timeLeft -= 10;
	var incorrect = document.getElementById("incorrect");
	incorrect.style.display = "block";
	setTimeout(function(){
		incorrect.style.display = "none";
	}, 1500);
	// known bug, not keeping track of timeouts and not clearing them if people progress quickly through questions
}

function showUserInitials(){
	document.getElementById("finalScore").textContent = "Your final score is " + timeLeft;
	screenPicker("playerInitialsScreen");
}

function screenPicker(screen){
	document.getElementById("startScreen").style.display = "none";
  document.getElementById("highscoreScreen").style.display = "none";
  document.getElementById("playerInitialsScreen").style.display = "none";
  document.getElementById("gameOverScreen").style.display = "none";
	document.getElementById("quizScreen").style.display = "none";
	document.getElementById(screen).style.display = "block";
}

function stopTimer(){
	clearTimeout(timerID);
	clearInterval(timerTickerID);
}

function reset() {
	questionsAndAnswer["q1"].actual = "";
	questionsAndAnswer["q2"].actual = "";
	questionsAndAnswer["q3"].actual = "";
	questionsAndAnswer["q4"].actual = "";
	questionsAndAnswer["q5"].actual = "";
	timeLeft = 61;
	screenPicker("startScreen");
}

function handleForm(e) {
	e.preventDefault();

	var initials = document.getElementById("initialsInput").value;
	if (initials !== ""){
		initials = initials.toUpperCase();
		showHighscores(initials);
	}
}

function showHighscores(initials){
	var highscores = JSON.parse(localStorage.getItem("highscores"));
	var newHighscore = [
		{
			initials: initials,
			score: timeLeft
		}
	];
	var continueLoop = false;
	if (highscores === null) {
		setHighScores(newHighscore);
		document.getElementById("score1").textContent = newHighscore.initials + ": " + newHighscore.score;
		document.getElementById("score1").style.display = "block";
	}
	else {
		for (var i = 0; i < 5; i++) {
			var currentHighscore = parseInt(highscores[i].score); //Incomplete, bug
			if (currentHighscore < timeLeft && continueLoop === false) {
				highscores.splice(i, 0, newHighscore);
				highscores.slice(0, 4);
				setHighScores(highscores);
				continueLoop = true;
			}
		}
		document.getElementById("score1").textContent = highscores[0].initials + ": " + highscores[0].score;
		document.getElementById("score1").style.display = "block";
		document.getElementById("score2").textContent = highscores[1].initials + ": " + highscores[1].score;
		document.getElementById("score2").style.display = "block";
		document.getElementById("score3").textContent = highscores[2].initials + ": " + highscores[2].score;
		document.getElementById("score3").style.display = "block";
		document.getElementById("score4").textContent = highscores[3].initials + ": " + highscores[3].score;
		document.getElementById("score4").style.display = "block";
		document.getElementById("score5").textContent = highscores[4].initials + ": " + highscores[4].score;
		document.getElementById("score5").style.display = "block";
	}
	screenPicker("highscoreScreen");
}

function setHighScores(newScores) {
	localStorage.setItem("highscores", JSON.stringify(newScores));
};

function clearHighscores() {
	// clear local storage and update DOM (INCOMPLETE)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PSEUDOCODE

// Start Screen
// Quiz Screen
// High Score Screen

// Quiz Screen
// Game Over Screen
// Player Initials Screen

// Game Over Screen
// Start Screen

// Player Initials Screen
// High Score Screen

// High Score Screen
// Start Screen

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Start Quiz
// Start a timer - put setTimeout ID into a global timer variable
// Start interval that runs every second - decrements timeLeft
// Calls Show Question function

// Submit Answer function
// Takes question id and answer id
// Works out if it was correct or failed
// Fills in questionsAndAnswers
// Calls Show Question and Calls Show Result
// OR
// Calls Show User Initials
// Calls stopTheClock

// Timer
// Calls Show Game Over

// Show Result
// passed the previous question id
// Shows a message for 2 seconds (unhides "correct" or "incorrect" DOM element)

// Show Question
// passed question id
// show a div, hide other divs

// Show User Initials
// hide all screens, show this one

// Submit User Initials
// takes initials
// stores in initials
// calls Show High Scores

// Reset
// clear all "actual" fields in the questionsAndAnswers
// clear "initials"
// clear "timeLeft"
// hide all screens, show StartScreen

// Stop The Clock
// clears the timerID
// clears the timerTickerID

// Calculate Score
// Generate score from questionsAndAnswers
// Get time from timeLeft variable
// Show Score
// Get scores from localstorage
//  if score is better than one of the 10 best scores then inject the score and push the lowest out
