# Quiz App

A simple multiple-choice quiz built with vanilla HTML, CSS, and JavaScript. No frameworks, no libraries — just fundamentals.

## What it does

- Loads a set of questions one at a time
- Shows 4 (or however many) options as clickable buttons
- Instantly checks your answer and moves to the next question
- Displays your final score out of total questions once the quiz ends

## How it works

All quiz questions live in a JavaScript array of objects, each with a question, a list of options, and the correct answer. On page load, the first question is rendered onto the page. Clicking an option checks it against the correct answer, updates the score if right, and loads the next question. Once every question has been answered, the score is displayed on the page instead of the next question.

## Tech used

- **HTML** — page structure
- **CSS** — styling and layout
- **JavaScript** — quiz logic, DOM manipulation, onclick handling

## Concepts practiced

- Objects and arrays
- Array methods and loops
- Functions
- If/else logic
- Template literals
- String methods
- DOM manipulation (`getElementById`, `textContent`, `innerHTML`)
- Basic event handling via `onclick`

## Running it

Clone the repo and open `index.html` in your browser. That's it — no build step, no dependencies.

## Future improvements

- Add more questions
- Add a timer per question
- Store high scores using `localStorage`
- Add a progress bar showing question number out of total

---

Built while learning JavaScript fundamentals.
