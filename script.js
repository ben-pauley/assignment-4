document.getElementById("startQuizBtn").addEventListener("click", question1);

var a = document.getElementById("highscoresLink");
a.addEventListener("click", highscores);

function startTimer(){
    var seconds = 60;
    document.getElementById("timer").textContent = "Time: " + seconds;
    var timer = setInterval(function(){
        seconds--;
        document.getElementById("timer").textContent = "Time: " + seconds;
        if (seconds <=0) clearInterval(timer);
    }, 1000);
}

function question1(){
    startTimer();
    //the main div to hold everything question related
    var mainDiv = document.getElementById("mainDiv");
    //hide previous body content
    document.getElementById("title").hidden = true;
    document.getElementById("instructions").hidden = true;
    document.getElementById("startQuizBtnDiv").hidden = true;
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
    //add content to elements
    questionHead.textContent = "This is the first question";
    option1.textContent = "Option 1";
    option2.textContent = "Option 2";
    option3.textContent = "Option 3";
    option4.textContent = "Option 4";
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
    //if a button is clicked
    option1.addEventListener("click", gameOver);
    option2.addEventListener("click", gameOver);
    option3.addEventListener("click", gameOver);
    option4.addEventListener("click", gameOver);
}

function question2(){
    
}

function question3(){
    
}

function question4(){
    
}

function question5(){
    
}

function gameOver(){
    var mainDiv = document.getElementById("mainDiv");

    document.getElementById("questionHead").hidden = true;
    document.getElementById("option1").hidden = true;
    document.getElementById("option2").hidden = true;
    document.getElementById("option3").hidden = true;
    document.getElementById("option4").hidden = true;

    var gameOverTitle = document.createElement("h3");
    var finalScore = document.createElement("p");
    var submitScore = document.createElement("form");

    gameOverTitle.textContent = "Quiz complete!";
    finalScore.textContent = "Your final score is ";
    submitScore.textContent = "Enter initials: ";

    gameOverTitle.setAttribute("id", "gameOverTitle");
    finalScore.setAttribute("id", "finalScore");
    submitScore.setAttribute("id", "submitScore");

    mainDiv.appendChild(gameOverTitle);
    mainDiv.appendChild(finalScore);
    mainDiv.appendChild(submitScore);
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