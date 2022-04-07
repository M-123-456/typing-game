import { texts } from "./texts.js";

let textField = document.querySelector(".text");
let inputField = document.getElementById("input-field");
const levelsList = document.getElementById("levels");
const languagesList = document.getElementById("languages");
let hasPressedEnterKey = false;
let level = 1;
let language = "Japanese";

// Adding items to navigation bar acordion
const levels = new Set(texts.map((text) => text.level));
console.log(levels);
levels.forEach((level) => {
  const list = document.createElement("div");
  list.innerText = level;
  levelsList.appendChild(list);
  list.classList.add("hidden");
});

const languages = new Set(texts.map((text) => text.language));
console.log(languages);
languages.forEach((language) => {
  const list = document.createElement("div");
  list.innerText = language;
  languagesList.appendChild(list);
  list.classList.add("hidden");
});

getNewText();

const levelHiddenBtns = document.getElementById("levels").children;



// if enter key is pressed, hasPressedEnterKey is set true
inputField.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    console.log("enter is pressed");
    hasPressedEnterKey = true;
  }
});

inputField.addEventListener("input", () => {
  const arrayTextField = textField.querySelectorAll("span");
  const arrayValue = inputField.value.split("");
  let isCorrect = true;

  arrayTextField.forEach((charSpan, index) => {
    const char = arrayValue[index];
    if (char == null) {
      charSpan.classList.remove("correct");
      charSpan.classList.remove("incorrect");
      isCorrect = false;
    } else if (char === charSpan.innerText) {
      charSpan.classList.add("correct");
      charSpan.classList.remove("incorrect");
    } else {
      charSpan.classList.remove("correct");
      charSpan.classList.add("incorrect");
      isCorrect = false;
    }
  });
  if (isCorrect && hasPressedEnterKey) getNewText();
  hasPressedEnterKey = false;
});

// show new text
function getNewText() {
  textField.innerText = null;
  // random Number
  const randomNumber = Math.floor(Math.random() * texts.length);
  const newText = texts[randomNumber];
  newText.text.split("").forEach((char) => {
    const charSpan = document.createElement("span");
    charSpan.innerText = char;
    textField.appendChild(charSpan);
    inputField.value = null;
  });
}
