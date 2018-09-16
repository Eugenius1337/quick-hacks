// Array full of values to type
var lines = new Array();
lines = [
  "html",
  "head",
  "body",
  "footer",
  "div",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "span",
  "script",
  "meta",
  "link",
  "doctype",
  "javascript",
  "function()",
  "var",
  "let",
  "loop",
  "iteration",
  "if(win==true)",
  "const",
  "else if(win)",
  "else",
  "var numbers=[]",
  "console.log()",
  ";",
  "math.random()",
  "while(win)",
  "document.querySelector",
  "array",
  "string",
  "boolean",
  "int",
  "long",
  "double",
  "static",
  "void",
  "public",
  "class"
];

// When page loads, start the game
window.addEventListener("load", initialize());

// var playerInfo = {
//   name: "",
//   score: 0
// };

// playerInfo.name = prompt("Enter player name");

// Values are the seconds you can have during the game
const difficulties = {
  easy: 5,
  medium: 4,
  hard: 3
};

// Difficulty, sets timer
const currentDifficulty = difficulties.hard;

// Variables
let time = currentDifficulty;
let score = 0;
let playing;

// Displays a random item from the array to type
function displayLine(lines) {
  const currentLine = document.querySelector("#current-line");
  const seconds = document.querySelector("#seconds");
  const randomLine = Math.floor(Math.random() * lines.length);
  currentLine.innerHTML = lines[randomLine];
  console.log(randomLine);
}

// Runs when page loads. Shows first line.
function initialize() {
  displayLine(lines);
  input.addEventListener("input", start);
  setInterval(countdown, 1000);
  setInterval(isPlaying, 50);
}

// If input matches the line, reset timer, show new line, and increase score.
function start() {
  const input = document.querySelector("#input");
  if (match()) {
    playing = true;
    time = currentDifficulty + 1;
    displayLine(lines);
    input.value = "";
    score++;
  }
  const scoreKeep = document.querySelector("#score");
  if (score === -1) {
    scoreKeep.innerHTML = 0;
  } else {
    scoreKeep.innerHTML = score;
  }
}

// Checks if input matches the line given
function match() {
  const currentLine = document.querySelector("#current-line");
  if (input.value === currentLine.innerHTML) {
    condition.innerHTML = "Correct";
    return true;
  } else {
    condition.innerHTML = "";
    return false;
  }
}

// Checks if time is greater than 0 or equal to 0. If time is greater, decrease time, else stop the game.
function countdown() {
  const timer = document.querySelector("#time");
  if (time > 0) {
    time--;
  } else if (time === 0) {
    playing = false;
  }
  timer.innerHTML = time;
}

// If time is 0, stop the game and reset the score.
function isPlaying() {
  const condition = document.querySelector("#condition");
  if (!playing && time === 0) {
    condition.innerHTML = "Game Over";
    score = -1;
  }
}

// Appends the score to the leaderboard
function addScore() {
  const boards = document.querySelector(".infos");
  boards.innerHTML += '<div class="rows"></div>';
  const rows = document.querySelector(".rows");
  rows.innerHTML += score;
}
