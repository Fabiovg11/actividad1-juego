const questions = [
  {
    question: "¿En qué año se creó la primera página web de la historia?",
    options: ["1989", "1991", "1995", "1998"],
    correct: 1
  },
  {
    question: "¿Qué significa la sigla CSS?",
    options: ["Creative Style Sheets", "Computer Style System", "Cascading Style Sheets", "Custom Sheet Styles"],
    correct: 2
  },
  {
    question: "¿Qué lenguaje se ejecuta de forma nativa en el navegador para dar interactividad?",
    options: ["Java", "Python", "PHP", "JavaScript"],
    correct: 3
  },
  {
    question: "¿Quién es considerado el padre de la World Wide Web?",
    options: ["Alan Turing", "Tim Berners-Lee", "Steve Jobs", "Linus Torvalds"],
    correct: 1
  },
  {
    question: "¿Cuál de los siguientes es un elemento HTML5 semántico?",
    options: ["<main>", "<div>", "<span>", "<font>"],
    correct: 0
  },
  {
    question: "¿Qué código de estado HTTP indica que un recurso no fue encontrado?",
    options: ["200", "301", "404", "500"],
    correct: 2
  }
];

let currentQuestionIndex = 0;
let score = 0;
let answered = false;

const questionTracker = document.getElementById("question-tracker");
const scoreTracker = document.getElementById("score-tracker");
const questionTitle = document.getElementById("question-title");
const optionsContainer = document.getElementById("options-container");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const finalTitle = document.getElementById("final-title");
const finalScore = document.getElementById("final-score");
const restartBtn = document.getElementById("restart-btn");

function initGame() {
  currentQuestionIndex = 0;
  score = 0;
  scoreTracker.textContent = `Puntos: ${score}`;
  resultScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  loadQuestion();
}

function loadQuestion() {
  answered = false;
  const currentQ = questions[currentQuestionIndex];
  
  questionTracker.textContent = `Pregunta ${currentQuestionIndex + 1} de ${questions.length}`;
  questionTitle.textContent = currentQ.question;
  feedback.textContent = "";
  feedback.className = "feedback";
  nextBtn.classList.add("hidden");

  optionsContainer.innerHTML = "";
  currentQ.options.forEach((optionText, index) => {
    const button = document.createElement("button");
    button.className = "option-btn";
    button.textContent = `${index + 1}. ${optionText}`;
    button.setAttribute("aria-label", `Opción ${index + 1}: ${optionText}`);
    button.addEventListener("click", () => selectOption(index));
    optionsContainer.appendChild(button);
  });

  const firstOption = optionsContainer.querySelector(".option-btn");
  if (firstOption) firstOption.focus();
}

function selectOption(selectedIndex) {
  if (answered) return;
  answered = true;

  const currentQ = questions[currentQuestionIndex];
  const optionButtons = optionsContainer.querySelectorAll(".option-btn");

  optionButtons.forEach((btn) => (btn.disabled = true));

  if (selectedIndex === currentQ.correct) {
    score += 10;
    scoreTracker.textContent = `Puntos: ${score}`;
    optionButtons[selectedIndex].classList.add("correct");
    optionButtons[selectedIndex].textContent += " ✓ (Correcto)";
    feedback.textContent = "¡Respuesta correcta! (+10 puntos)";
    feedback.classList.add("correct-text");
  } else {
    optionButtons[selectedIndex].classList.add("incorrect");
    optionButtons[selectedIndex].textContent += " ✗ (Incorrecto)";
    optionButtons[currentQ.correct].classList.add("correct");
    optionButtons[currentQ.correct].textContent += " ✓";
    feedback.textContent = `Incorrecto. La respuesta correcta era: ${currentQ.options[currentQ.correct]}`;
    feedback.classList.add("incorrect-text");
  }

  nextBtn.classList.remove("hidden");
  nextBtn.focus();
}

function handleNext() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  
  const totalPossible = questions.length * 10;
  finalScore.textContent = `Has obtenido ${score} de ${totalPossible} puntos posibles.`;
  finalTitle.focus();
}

document.addEventListener("keydown", (e) => {
  if (!quizScreen.classList.contains("hidden") && !answered) {
    if (["1", "2", "3", "4"].includes(e.key)) {
      const optionIndex = parseInt(e.key, 10) - 1;
      const buttons = optionsContainer.querySelectorAll(".option-btn");
      if (buttons[optionIndex]) {
        buttons[optionIndex].click();
      }
    }
  } else if (!nextBtn.classList.contains("hidden") && e.key === "Enter" && document.activeElement !== nextBtn) {
    nextBtn.click();
  }
});

nextBtn.addEventListener("click", handleNext);
restartBtn.addEventListener("click", initGame);

document.addEventListener("DOMContentLoaded", initGame);