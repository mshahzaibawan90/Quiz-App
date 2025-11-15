const quizData = [
    {
        question: "1.When was Imran Ahmad Khan Niazi born?",
        options: ["3 March 1950","5 October 1952","12 September 1954","1 January 1951"],
        correctAnswer: "5 October 1952"
    },
    {
        question: "2.What is Imran Khan most famous for before entering politics?",
        options: ["Cricket","Tennis","Football","Hockey"],
        correctAnswer: "Cricket"
    },
    {
        question: "3.In which year did Pakistan win the Cricket World Cup under Imran Khan’s captaincy?",
        options: ["1983","1987","1992","1999"],
        correctAnswer: "1992"
    },
    {
        question: "4.Which political party did Imran Khan found?",
        options: ["PPP","PTI","MQM","PML-N"],
        correctAnswer: "PTI"
    },
    {
        question: "5.When did Imran Khan become the Prime Minister of Pakistan?",
        options: ["2018","2017","2020","2015"],
        correctAnswer: "2018"
    },
    {
        question: "6.What is the name of the cancer hospital founded by Imran Khan?",
        options: ["Indus Hospital","Shalamar Hospital","Shaukat Khanum Memorial Cancer Hospital","Jinnah Hospital"],
        correctAnswer: "Shaukat Khanum Memorial Cancer Hospital"
    }
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 10;
let timerInterval;

document.addEventListener("DOMContentLoaded", () => {
    displayQuestion();
});

function displayQuestion() {
    const questionContainer = document.getElementById("question-container");
    const optionContainer = document.getElementById("option-container");
    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = "";

    if (currentQuestion < quizData.length) {
        resetTimer();
        const currentQuizData = quizData[currentQuestion];
        questionContainer.textContent = currentQuizData.question;
        optionContainer.innerHTML = "";
        currentQuizData.options.forEach((option) => {
            const button = document.createElement("button");
            button.textContent = option;
            button.addEventListener("click", () => checkAnswer(option));
            optionContainer.appendChild(button);
        });

    } else {
        clearInterval(timerInterval) 
        document.getElementById("timer").textContent = 0;
        questionContainer.textContent = "Quiz Completed!";
        optionContainer.innerHTML = `Your Score: ${score} out of ${quizData.length}`;
        const restartButton = document.createElement("button");
        restartButton.textContent = "Restart Quiz";
        restartButton.addEventListener("click", restartQuiz);
        optionContainer.appendChild(document.createElement("br"));
        optionContainer.appendChild(restartButton);
    }
}

function checkAnswer(userAnswer) {
    const currentQuizData = quizData[currentQuestion];
    
    if (userAnswer === currentQuizData.correctAnswer) {
        score++;
    }

    currentQuestion++;
    displayQuestion();
}

function nextQuestion() {
    if (currentQuestion < quizData.length) {
        currentQuestion++;
        displayQuestion();
    }
}

function startTimer() {
    const timerDisplay = document.getElementById("timer");

    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            currentQuestion++;
            displayQuestion();
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    timeLeft = 10;
    document.getElementById("timer").textContent = timeLeft;
    startTimer();
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    displayQuestion();
}
