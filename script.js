const quizData = [
    {
        question: "What is 12 × 3?",
        options: ["36", "30", "26", "40"],
        answer: "36"
    },
    {
        question: "Which country has the Eiffel Tower?",
        options: ["Italy", "France", "Spain", "Germany"],
        answer: "France"
    },
    {
        question: "What is the square root of 64?",
        options: ["6", "7", "8", "9"],
        answer: "8"
    },
    {
        question: "How many months have 31 days?",
        options: ["5", "6", "7", "8"],
        answer: "7"
    },
    {
        question: "What is 45 ÷ 5?",
        options: ["5", "7", "9", "10"],
        answer: "9"
    },

    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Mercury", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is 15 + 27?",
        options: ["32", "42", "40", "50"],
        answer: "42"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Leo Tolstoy"],
        answer: "William Shakespeare"
    },
    {
        question: "What is 100 − 37?",
        options: ["53", "63", "73", "83"],
        answer: "63"
    },
    {
        question: "The largest mammal on Earth is:",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        answer: "Blue Whale"
    },

    {
        question: "What is 9² (9 squared)?",
        options: ["72", "81", "91", "99"],
        answer: "81"
    },
    {
        question: "Which gas do humans breathe in?",
        options: ["Nitrogen", "Oxygen", "Carbon dioxide", "Hydrogen"],
        answer: "Oxygen"
    },
    {
        question: "What is 56 ÷ 7?",
        options: ["6", "7", "8", "9"],
        answer: "8"
    },
    {
        question: "The capital of Australia is:",
        options: ["Sydney", "Canberra", "Melbourne", "Perth"],
        answer: "Canberra"
    },
    {
        question: "What is 11 × 11?",
        options: ["111", "110", "121", "120"],
        answer: "121"
    },

    {
        question: "How many degrees are in a right angle?",
        options: ["45", "90", "120", "180"],
        answer: "90"
    },
    {
        question: "Who discovered electricity?",
        options: ["Alexander Fleming", "Benjamin Franklin", "Isaac Newton", "Louis Pasteur"],
        answer: "Benjamin Franklin"
    },
    {
        question: "What is 3/4 expressed as a percentage?",
        options: ["50%", "60%", "70%", "75%"],
        answer: "75%"
    },
    {
        question: "Which animal lays eggs?",
        options: ["Cow", "Dog", "Snake", "Cat"],
        answer: "Snake"
    },
    {
        question: "Solve: 8 + (6 × 2)",
        options: ["20", "18", "14", "22"],
        answer: "20"
    },

    {
        question: "What is 90 ÷ 9?",
        options: ["9", "10", "8", "7"],
        answer: "9"
    },
    {
        question: "The tallest mountain in the world is:",
        options: ["K2", "Mount Everest", "Nanga Parbat", "Kilimanjaro"],
        answer: "Mount Everest"
    },
    {
        question: "What is 0.5 × 100?",
        options: ["20", "30", "40", "50"],
        answer: "50"
    },
    {
        question: "What is the chemical symbol for Gold?",
        options: ["Ag", "Au", "Gd", "Go"],
       answer: "Au"
    },
    {
        question: "What is 18 − 7?",
        options: ["9", "11", "10", "12"],
        answer: "11"
    },

    {
        question: "Which shape has 4 equal sides?",
        options: ["Rectangle", "Square", "Triangle", "Circle"],
        answer: "Square"
    },
    {
        question: "What is 3 × 14?",
        options: ["42", "41", "45", "36"],
        answer: "42"
    },
    {
        question: "Which is the smallest ocean?",
        options: ["Atlantic", "Arctic", "Indian", "Pacific"],
        answer: "Arctic"
    },
    {
        question: "What is 25% of 200?",
        options: ["25", "30", "40", "50"],
        answer: "50"
    },
    {
        question: "Who invented the light bulb?",
        options: ["Newton", "Edison", "Tesla", "Graham Bell"],
        answer: "Edison"
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
        clearInterval(timerInterval);
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

    if (userAnswer === currentQuizData.answer) {
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
