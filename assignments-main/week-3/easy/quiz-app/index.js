
//  use this quizData in your app.
const questions = [{
    question: "Which language runs in a web browser?",
    answers: [
        { text: "Java", correct: false },
        { text: "c", correct: false },
        { text: "python", correct: false },
        { text: "javascript", correct: true }
    ]

},
{
    question: "What does CSS stand for?",
    answers: [
        { text: "Central Style Sheets", correct: false },
        { text: "Cascading Simple Sheets", correct: false },
        { text: "Cascading Style Sheets", correct: true },
        { text: "Cars SUVs Sailboats", correct: false }
    ]

},
{
    question: "What does HTML stand for?",
    answers: [
        { text: "Hypertext Markup Language", correct: true },
        { text: "Hypertext Markdown Language", correct: false },
        { text: "Hyperloop Machine Language", correct: false },
        { text: "Helicopters Terminals Motorboats Lamborginis", correct: false }
    ]

},
{

    question: "What year was JavaScript launched?",
    answers: [
        { text: "1996", correct: false },
        { text: "1995", correct: true },
        { text: "1994", correct: false },
        { text: "none of the above", correct: false }
    ]
}
]


const quesElement = document.querySelector(".question");
const answerBtn = document.querySelector(".answers-button");
const nextBtn = document.querySelector(".next-btn");

let currQuesInd = 0;
let score = 0;

function startQuiz() {

    currQuesInd = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    reset();
    let currQues = questions[currQuesInd];
    let quesNo = currQuesInd + 1;
    quesElement.innerHTML = quesNo + ". " + currQues.question;

    currQues.answers.forEach(answers => {
        const btn = document.createElement("button");
        btn.innerHTML = answers.text;
        btn.classList.add("btn-1");
        answerBtn.appendChild(btn);
        if (answers.correct) {
            btn.dataset.correct = answers.correct;
        }
        btn.addEventListener("click", selectAnswer)
    })
}

function reset() {
    nextBtn.style.display = "none";
    while (answerBtn.firstChild) {
        answerBtn.removeChild(answerBtn.firstChild)
    }
}

function selectAnswer(e) {
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if (isCorrect) {
        selectBtn.classList.add("correct");
        score++;
    }
    else {
        selectBtn.classList.add("inCorrect");
    }

    Array.from(answerBtn.children).forEach(btn => {
        if (btn.dataset.correct === "true") {
            btn.classList.add("correct");
        }
        btn.disabled = true;
    })
    nextBtn.style.display = "block";

}

function showScore(){
    reset();
    
    quesElement.innerHTML =`you scored ${score} out of ${questions.length}!`;
    nextBtn.innerHTML ='play again';
    nextBtn.style.display = "block";
}

function handleNextBtn(){
    currQuesInd++;
    if(currQuesInd<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextBtn.addEventListener("click", () => {
    if (currQuesInd < questions.length) {
        handleNextBtn();
    }
    else {
        startQuiz();
    }
})
startQuiz();