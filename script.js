document.getElementById("startQuizBtn").addEventListener("click", question1);

function question1(){
    document.getElementById("questionHead").hidden = true;
    document.getElementById("instructions").hidden = true;
    document.getElementById("startQuizBtnDiv").hidden = true;

    var mainDiv = document.getElementById("mainDiv");

    var questionBody = document.createElement("div");
    var questionHead = document.createElement("h3");
    var option1Div = document.createElement("div");
    var option1 = document.createElement("button");
    var option2Div = document.createElement("div");
    var option2 = document.createElement("button");

    questionHead.textContent = "This is the first question";
    option1.textContent = "Option 1";
    option2.textContent = "Option 2";

    option1.setAttribute("type", "button");
    option1.setAttribute("class", "btn btn-primary");
    option1.style.marginBottom = "5px";
    option2.setAttribute("type", "button");
    option2.setAttribute("class", "btn btn-primary");
    option1.style.marginBottom = "5px";

    option1Div.appendChild(option1);
    option2Div.appendChild(option2);
    questionBody.appendChild(questionHead);
    questionBody.appendChild(option1Div);
    questionBody.appendChild(option2Div);
    mainDiv.appendChild(questionBody);
}