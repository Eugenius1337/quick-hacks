var lines = new Array();
// html and css
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

window.addEventListener("load", initialize());

const difficulties = {
  easy: 5,
  medium: 4,
  hard: 3
};

const currentDifficulty = difficulties.hard;

let time = currentDifficulty;
let score = 0;
let playing;

function displayLine(lines) {
  const currentLine = document.querySelector("#current-line");
  const seconds = document.querySelector("#seconds");
  const randomLine = Math.floor(Math.random() * lines.length);
  currentLine.innerHTML = lines[randomLine];
  console.log(randomLine);
}

function initialize() {
  displayLine(lines);
  input.addEventListener("input", start);
  setInterval(countdown, 1000);
  setInterval(isPlaying, 50);
}

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

function countdown() {
  const timer = document.querySelector("#time");
  if (time > 0) {
    time--;
  } else if (time === 0) {
    playing = false;
  }
  timer.innerHTML = time;
}

function isPlaying() {
  const condition = document.querySelector("#condition");
  if (!playing && time === 0) {
    condition.innerHTML = "Game Over";
    score = -1;
  }
}
