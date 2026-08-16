const quizData = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyper Text Marketing Language"],
    correctAnswer: "Hyper Text Markup Language"
  },
  {
    question: "Which tag is used for the biggest heading?",
    options: ["<h6>", "<heading>", "<h1>"],
    correctAnswer: "<h1>"
  },
  {
    question: "Which tag is used for the biggest heading?",
    options: ["<h6>", "<heading>", "<h1>"],
    correctAnswer: "<h1>"
  },
  {
    question: "Which tag is used for the biggest heading?",
    options: ["<h6>", "<heading>", "<h1>"],
    correctAnswer: "<h1>"
  }
  // add more questions here
]

let currentIndex = 0
let score = 0

function loadQuestion() {
  const current = quizData[currentIndex]

  document.getElementById("questionText").textContent = current.question

  const optionsContainer = document.getElementById("optionsContainer")
  optionsContainer.innerHTML = ""

  for (let i = 0; i < current.options.length; i++) {
    const optionText = current.options[i]
    optionsContainer.innerHTML += `<button onclick="checkAnswer('${optionText}')">${optionText}</button>`
  }
}

function checkAnswer(selected) {
  const current = quizData[currentIndex]

  if (selected === current.correctAnswer) {
    score++
  }

  currentIndex++

  if (currentIndex < quizData.length) {
    loadQuestion()
  } else {
    showResult()
  }
}

function showResult() {
  document.getElementById("questionText").textContent = "Quiz Finished!"
  document.getElementById("optionsContainer").innerHTML = `<p>Your score: ${score} / ${quizData.length}</p>`
}

loadQuestion()