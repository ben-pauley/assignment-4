document.getElementById("startQuizBtn").addEventListener("click", beginQuiz);

var isTimerPaused = false;
var seconds = 0;
var mainDiv = document.getElementById("mainDiv");
var questionRight = true;

function answerButtonClicked(optionNum, newQuestionNumber){
    optionNum.addEventListener("click", function(){
        if (optionNum.getAttribute("value") === "wrong"){
            startTimer(seconds - 10);
            questionRight = false;
        }
        else{
            questionRight = true;
        }
        generateQuestionPage(newQuestionNumber);
    });
}

function beginQuiz(){
    startTimer(60);
    generateQuestionPage(1);
}

function correctOrIncorrectMessage(){
    var correctOrIncorrect = document.createElement("p");

    if (questionRight === true) {
        correctOrIncorrect.textContent = "Correct";
    }
    else {
        correctOrIncorrect.textContent = "Incorrect"
    }

    correctOrIncorrect.setAttribute("class", "border-top border-dark");

    mainDiv.appendChild(correctOrIncorrect);

    function hideMessage(){
        correctOrIncorrect.style.display = " none";
    }
    window.setTimeout(hideMessage, 2500);
}

function gameOverTitlePicker(title, score){
    if (score <= 0) {
        title.textContent = "Time's up!";
    }
    else {
        title.textContent = "Quiz complete!";
    }
}

function generateGameOverPage(){
    isTimerPaused = true;

    mainDiv.textContent = "";

    var score = seconds;

    var gameOverTitle = document.createElement("h3");
    var finalScore = document.createElement("p");
    var initialsForm = document.createElement("form");
    var formLabel = document.createElement("label");
    var inputBox = document.createElement("input");
    var submitButton = document.createElement("button");

    gameOverTitlePicker(gameOverTitle, score);
    finalScore.textContent = "Your final score is " + score;
    formLabel.textContent = "Enter initials: ";
    submitButton.textContent = "Submit";

    gameOverTitle.setAttribute("id", "gameOverTitle");
    finalScore.setAttribute("id", "finalScore");
    initialsForm.setAttribute("id", "initialsForm");
    inputBox.setAttribute("type", "text");
    submitButton.setAttribute("class", "btn btn-primary");
    formLabel.style.marginRight = "5px";
    inputBox.style.marginRight = "5px";
    gameOverTitle.style.marginBottom = "20px";

    mainDiv.appendChild(gameOverTitle);
    mainDiv.appendChild(finalScore);
    mainDiv.appendChild(initialsForm);
    initialsForm.appendChild(formLabel);
    initialsForm.appendChild(inputBox);
    initialsForm.appendChild(submitButton);

    initialsFormSubmission(score);
}

function generateHighscoresPage(newInitials, newScore){
    mainDiv.textContent = "";

    var highscoresTitle = document.createElement("h2");
    var scoreList = document.createElement("ol");
    var score1 = document.createElement("li");
    var homepageButton = document.createElement("button");
    var clearScores = document.createElement("button");

    highscoresTitle.textContent = "Highscores";
    score1.textContent = newInitials + ": " + newScore;
    homepageButton.textContent = "Go Back";
    clearScores.textContent = "Clear Highscores";

    homepageButton.setAttribute("class", "btn btn-primary");
    clearScores.setAttribute("class", "btn btn-primary");
    homepageButton.style.marginRight = "5px";

    scoreList.appendChild(score1);
    mainDiv.appendChild(highscoresTitle);
    mainDiv.appendChild(scoreList);
    mainDiv.appendChild(homepageButton);
    mainDiv.appendChild(clearScores);

    homepageButton.addEventListener("click", generateHomepage);
}

function generateHomepage(){
    mainDiv.textContent = "";

    seconds = 0;
    document.getElementById("timer").textContent = "Time: " + seconds;

    var title = document.createElement("h2");
    var instructions = document.createElement("p");
    var startQuizBtnDiv = document.createElement("div");
    var startQuizBtn = document.createElement("button");

    title.textContent = "Coding Quiz Challenge";
    instructions.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will deduct 10 seconds from your time/score.";
    startQuizBtn.textContent = "Start Quiz";

    title.setAttribute("class", "text-center");
    instructions.setAttribute("class", "text-center");
    startQuizBtnDiv.setAttribute("class", "text-center");
    startQuizBtn.setAttribute("class", "btn btn-primary");
    title.setAttribute("id", "title");
    instructions.setAttribute("id", "instructions");
    startQuizBtnDiv.setAttribute("id", "startQuizBtnDiv");
    startQuizBtn.setAttribute("id", "startQuizBtn");
    startQuizBtn.setAttribute("type", "button");

    startQuizBtnDiv.appendChild(startQuizBtn);
    mainDiv.appendChild(title);
    mainDiv.appendChild(instructions);
    mainDiv.appendChild(startQuizBtnDiv);

    startQuizBtn.addEventListener("click", beginQuiz);
}

function generateQuestionPage(questionNumber){
    //hide previous body content
    mainDiv.textContent = "";
    //create each of the elements
    var questionHead = document.createElement("h3");
    var option1Div = document.createElement("div");
    var option2Div = document.createElement("div");
    var option3Div = document.createElement("div");
    var option4Div = document.createElement("div");
    var option1 = document.createElement("button");
    var option2 = document.createElement("button");
    var option3 = document.createElement("button");
    var option4 = document.createElement("button");

    var questions = ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5"];
    var q1Answers = ["Wrong", "Correct", "Wrong", "Wrong"]
    var q2Answers = ["Wrong", "Wrong", "Wrong", "Correct"]
    var q3Answers = ["Correct", "Wrong", "Wrong", "Wrong"]
    var q4Answers = ["Wrong", "Correct", "Wrong", "Wrong"]
    var q5Answers = ["Wrong", "Wrong", "Correct", "Wrong"]

    questionHead.textContent = questions[questionNumber - 1];
    
    switch (questions[questionNumber - 1]) {
        case questions[0]:
            option1.textContent = q1Answers[0];
            option1.setAttribute("value", "wrong");
            option2.textContent = q1Answers[1];
            option2.setAttribute("value", "correct");
            option3.textContent = q1Answers[2];
            option3.setAttribute("value", "wrong");
            option4.textContent = q1Answers[3];
            option4.setAttribute("value", "wrong");
            break;
        case questions[1]:
            option1.textContent = q2Answers[0];
            option1.setAttribute("value", "wrong");
            option2.textContent = q2Answers[1];
            option2.setAttribute("value", "wrong");
            option3.textContent = q2Answers[2];
            option3.setAttribute("value", "wrong");
            option4.textContent = q2Answers[3];
            option4.setAttribute("value", "correct");
            break;
        case questions[2]:
            option1.textContent = q3Answers[0];
            option1.setAttribute("value", "correct");
            option2.textContent = q3Answers[1];
            option2.setAttribute("value", "wrong");
            option3.textContent = q3Answers[2];
            option3.setAttribute("value", "wrong");
            option4.textContent = q3Answers[3];
            option4.setAttribute("value", "wrong");
            break;
        case questions[3]:
            option1.textContent = q4Answers[0];
            option1.setAttribute("value", "wrong");
            option2.textContent = q4Answers[1];
            option2.setAttribute("value", "correct");
            option3.textContent = q4Answers[2];
            option3.setAttribute("value", "wrong");
            option4.textContent = q4Answers[3];
            option4.setAttribute("value", "wrong");
            break;
        case questions[4]:
            option1.textContent = q5Answers[0];
            option1.setAttribute("value", "wrong");
            option2.textContent = q5Answers[1];
            option2.setAttribute("value", "wrong");
            option3.textContent = q5Answers[2];
            option3.setAttribute("value", "correct");
            option4.textContent = q5Answers[3];
            option4.setAttribute("value", "wrong");
            break;
    }

    questionHead.setAttribute("id", "questionHead");
    option1.setAttribute("id", "option1");
    option2.setAttribute("id", "option2");
    option3.setAttribute("id", "option3");
    option4.setAttribute("id", "option4");
    option1.setAttribute("type", "button");
    option2.setAttribute("type", "button");
    option3.setAttribute("type", "button");
    option4.setAttribute("type", "button");
    option1.setAttribute("class", "btn btn-primary");
    option2.setAttribute("class", "btn btn-primary");
    option3.setAttribute("class", "btn btn-primary");
    option4.setAttribute("class", "btn btn-primary");
    option1.style.marginBottom = "5px";
    option2.style.marginBottom = "5px";
    option3.style.marginBottom = "5px";
    option4.style.marginBottom = "5px";
    
    option1Div.appendChild(option1);
    option2Div.appendChild(option2);
    option3Div.appendChild(option3);
    option4Div.appendChild(option4);
    mainDiv.appendChild(questionHead);
    mainDiv.appendChild(option1Div);
    mainDiv.appendChild(option2Div);
    mainDiv.appendChild(option3Div);
    mainDiv.appendChild(option4Div);

    if (questionNumber > 1){
        correctOrIncorrectMessage();
    };
    
    var newQuestionNumber = questionNumber + 1;
    
    if (newQuestionNumber !== 6) {
        answerButtonClicked(option1, newQuestionNumber);
        answerButtonClicked(option2, newQuestionNumber);
        answerButtonClicked(option3, newQuestionNumber);
        answerButtonClicked(option4, newQuestionNumber);
    }
    else {
        option1.addEventListener("click", generateGameOverPage);
        option2.addEventListener("click", generateGameOverPage);
        option3.addEventListener("click", generateGameOverPage);
        option4.addEventListener("click", generateGameOverPage);
    }
}

function initialsFormSubmission(score){
    var submitForm = document.forms["initialsForm"];
    submitForm.addEventListener("submit", function(e){
        e.preventDefault();
        var initials = submitForm.querySelector('input[type="text"]').value;
        if (initials !== ""){
            initials = initials.toUpperCase();
            generateHighscoresPage(initials, score);
        }
    });
}

function linkToHighscoresPage(){
    var a = document.getElementById("highscoresLink");
    a.addEventListener("click", generateHighscoresPage);
}

function startTimer(newSeconds){
    seconds = newSeconds;
    isTimerPaused = false;
    document.getElementById("timer").textContent = "Time: " + seconds;
    var timer = setInterval(function(){
        if(!isTimerPaused){
            seconds--;
            document.getElementById("timer").textContent = "Time: " + seconds;
            if ((seconds <= 0)){
                clearInterval(timer);
                generateGameOverPage();
            }
        }
    }, 1000);
}