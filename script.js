document.getElementById("startQuizBtn").addEventListener("click", beginQuiz);

var a = document.getElementById("highscoresLink");
a.addEventListener("click", highscores);

function beginQuiz(){
    startTimer();
    generateQuestion(1);
}

var isTimerPaused = false;
var seconds = 60;
var mainDiv = document.getElementById("mainDiv");

function startTimer(){
    document.getElementById("timer").textContent = "Time: " + seconds;
    var timer = setInterval(function(){
        if(!isTimerPaused){
            seconds--;
            document.getElementById("timer").textContent = "Time: " + seconds;
            if ((seconds <= 0)){
                clearInterval(timer);
                gameOver();
            }
        }
        
    }, 1000);
}

function generateQuestion(questionNumber){
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

    //add content to elements
    questionHead.textContent = questions[questionNumber - 1];

    function finalQuestionAnswered(){
        var finalQuestion = false;
        if (questions[questionNumber] === questions[4]){
            finalQuestion = true;
        }
        return finalQuestion;
    }
    
    switch (questions[questionNumber - 1]) {
        case questions[0]:
            option1.textContent = q1Answers[0];
            option2.textContent = q1Answers[1];
            option3.textContent = q1Answers[2];
            option4.textContent = q1Answers[3];
            break;
        case questions[1]:
            option1.textContent = q2Answers[0];
            option2.textContent = q2Answers[1];
            option3.textContent = q2Answers[2];
            option4.textContent = q2Answers[3];
            break;
        case questions[2]:
            option1.textContent = q3Answers[0];
            option2.textContent = q3Answers[1];
            option3.textContent = q3Answers[2];
            option4.textContent = q3Answers[3];
            break;
        case questions[3]:
            option1.textContent = q4Answers[0];
            option2.textContent = q4Answers[1];
            option3.textContent = q4Answers[2];
            option4.textContent = q4Answers[3];
            break;
        case questions[4]:
            option1.textContent = q5Answers[0];
            option2.textContent = q5Answers[1];
            option3.textContent = q5Answers[2];
            option4.textContent = q5Answers[3];
            break;
    }
    //add ids to elements
    questionHead.setAttribute("id", "questionHead");
    option1.setAttribute("id", "option1");
    option2.setAttribute("id", "option2");
    option3.setAttribute("id", "option3");
    option4.setAttribute("id", "option4");
    //add types to buttons
    option1.setAttribute("type", "button");
    option2.setAttribute("type", "button");
    option3.setAttribute("type", "button");
    option4.setAttribute("type", "button");
    //add classes to buttons
    option1.setAttribute("class", "btn btn-primary");
    option2.setAttribute("class", "btn btn-primary");
    option3.setAttribute("class", "btn btn-primary");
    option4.setAttribute("class", "btn btn-primary");
    //add style to buttons
    option1.style.marginBottom = "5px";
    option2.style.marginBottom = "5px";
    option3.style.marginBottom = "5px";
    option4.style.marginBottom = "5px";
    //append elements to page
    option1Div.appendChild(option1);
    option2Div.appendChild(option2);
    option3Div.appendChild(option3);
    option4Div.appendChild(option4);
    mainDiv.appendChild(questionHead);
    mainDiv.appendChild(option1Div);
    mainDiv.appendChild(option2Div);
    mainDiv.appendChild(option3Div);
    mainDiv.appendChild(option4Div);
    
    var newQuestionNumber = questionNumber + 1;
    
    if (newQuestionNumber !== 6)
    {
        option1.addEventListener("click", function(){
            generateQuestion(newQuestionNumber);
        });
        option2.addEventListener("click", function(){
            generateQuestion(newQuestionNumber);
        });
        option3.addEventListener("click", function(){
            generateQuestion(newQuestionNumber);
        });
        option4.addEventListener("click", function(){
            generateQuestion(newQuestionNumber);
        });
    }
    else
    {
        option1.addEventListener("click", gameOver);
        option2.addEventListener("click", gameOver);
        option3.addEventListener("click", gameOver);
        option4.addEventListener("click", gameOver);
    }
}

function gameOver(){
    isTimerPaused = true;

    mainDiv.textContent = "";

    var gameOverTitle = document.createElement("h3");
    var finalScore = document.createElement("p");
    var initialsForm = document.createElement("form");
    var formLabel = document.createElement("label");
    var inputBox = document.createElement("input");
    var submitButton = document.createElement("button");

    gameOverTitle.textContent = "Quiz complete!";
    finalScore.textContent = "Your final score is " + seconds;
    formLabel.textContent = "Enter initials: ";
    submitButton.textContent = "Submit";

    gameOverTitle.setAttribute("id", "gameOverTitle");
    finalScore.setAttribute("id", "finalScore");
    initialsForm.setAttribute("id", "initialsForm");

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

    var score = document.getElementById(timer).textContent;
}

function highscores(){
    var mainDiv = document.getElementById("mainDiv");

    document.getElementById("gameOverTitle").hidden = true;
    document.getElementById("finalScore").hidden = true;
    document.getElementById("submitScore").hidden = true;
    document.getElementById("viewHighscores").hidden = true;
    document.getElementById("timer").hidden = true;

    var highscoresTitle = document.createElement("h2");
    var highscoreList = document.createElement("ol");

    return false;
}

// function createOptionButton(divName, buttonName, buttonText){
//     var buttonContent = JSON.stringify(buttonText);
//     var divName = document.createElement("div");
//     var buttonName = document.createElement("button");

//     buttonName.textContent = buttonContent;

//     buttonName.setAttribute("type", "button");
//     buttonName.setAttribute("class", "btn btn-primary");
//     buttonName.style.marginBottom = "5px";

    
// }