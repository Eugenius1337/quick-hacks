var lines = new Array();
lines = [
  "function()",
  "var",
  "let",
  "for(i=0;i<10;i++)",
  "if(win==true)",
  "const",
  "else if(win!=true)",
  "=>",
  "const numbers=[]",
  "console.log()",
  ";",
  "Math.random()",
  "while(win == true)"
];

window.addEventListener("load", initialize());

let time = 5;
let score = 0;
let playing;

function displayLine(lines) {
  const input = document.querySelector("#input");
  const currentLine = document.querySelector("#current-line");
  const scoreKeep = document.querySelector("#score");
  const timeKeep = document.querySelector("#time");
  const condition = document.querySelector("#condition");
  const seconds = document.querySelector("#seconds");
  const randomLine = Math.floor(Math.random() * lines.length);
  currentLine.innerHTML = lines[randomLine];
  console.log(randomLine);
}

function initialize() {
  displayLine(lines);
}
