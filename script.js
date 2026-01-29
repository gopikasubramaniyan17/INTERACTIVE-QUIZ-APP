var questions = [
    {
        question: "HTML stands for?",
        options: ["Hyper Text Markup Language", "High Text ML", "Hyperlinks", "None"],
        answer: 0
    },
    {
        question: "CSS is used for?",
        options: ["Logic", "Styling", "Database", "Backend"],
        answer: 1
    },
    {
        question: "JavaScript is?",
        options: ["Programming Language", "OS", "Browser", "Tool"],
        answer: 0
    },
    {
        question: "Which is frontend?",
        options: ["Node", "React", "MongoDB", "Python"],
        answer: 1
    },
    {
        question: "Which tag for JS?",
        options: ["<js>", "<javascript>", "<script>", "<code>"],
        answer: 2
    },
    {
        question: "Which is not a browser?",
        options: ["Chrome", "Firefox", "Linux", "Edge"],
        answer: 2
    },
    {
        question: "Which is backend?",
        options: ["HTML", "CSS", "NodeJS", "Bootstrap"],
        answer: 2
    },
    {
        question: "CSS stands for?",
        options: ["Creative Style Sheets", "Cascading Style Sheets", "Color Style", "None"],
        answer: 1
    },
    {
        question: "JS runs in?",
        options: ["Server", "Browser", "Database", "CPU"],
        answer: 1
    },
    {
        question: "Which is framework?",
        options: ["React", "HTML", "CSS", "SQL"],
        answer: 0
    }
];

var qno = 0;
var score = 0;
var clicked = false;

var ques = document.getElementById("question");
var btns = document.getElementsByClassName("option");
var next = document.getElementById("nextBtn");

loadQ();

function loadQ() {
    clicked = false;
    ques.innerText = questions[qno].question;

    for (var i = 0; i < btns.length; i++) {
        btns[i].innerText = questions[qno].options[i];
        btns[i].style.background = "#dd2476";
        btns[i].disabled = false;

        btns[i].onclick = function () {
            checkAns(this);
        };
    }
}

function checkAns(btn) {
    if (clicked == true) {
        return;
    }

    clicked = true;

    var index;

    for (var i = 0; i < btns.length; i++) {
        btns[i].disabled = true;
        if (btns[i] === btn) {
            index = i;
        }
    }

    if (index == questions[qno].answer) {
        btn.style.background = "green";
        score = score + 1;
    } else {
        btn.style.background = "red";
        btns[questions[qno].answer].style.background = "green";
    }
}

next.onclick = function () {
    if (clicked == false) {
        return;
    }

    qno = qno + 1;

    if (qno < questions.length) {
        loadQ();
    } else {
        showScore();
    }
};

function showScore() {
    var msg = "";

    if (score >= 8) {
        msg = "Excellent Performance";
    } else if (score >= 5) {
        msg = "Good Job";
    } else {
        msg = "Need Improvement";
    }

    document.body.innerHTML =
        "<div class='quiz-container'>" +
        "<h1>Quiz Finished</h1>" +
        "<h2>Your Score : " + score + " / 10</h2>" +
        "<p>" + msg + "</p>" +
        "</div>";
}
