import { texts } from "./texts.js";

let textField = document.querySelector(".text");
let inputField = document.getElementById("input-field");
const levelsList = document.getElementById("levels");
const languagesList = document.getElementById("languages");
const icon1 = document.querySelector(".icon1");
const icon2 = document.querySelector(".icon2");
let hasPressedEnterKey = false;

// initial level and language
let level = 1;
let language = "Japanese";

// Adding items to navigation bar acordion
const levels = new Set(texts.map((text) => text.level));
console.log(levels);
levels.forEach((level) => {
  const list = document.createElement("option");
  list.innerText = level;
  levelsList.appendChild(list);
  list.classList.add("hidden");
  list.value = level;
});

const languages = new Set(texts.map((text) => text.language));
console.log(languages);
languages.forEach((language) => {
  const list = document.createElement("option");
  list.innerText = language;
  languagesList.appendChild(list);
  list.classList.add("hidden");
  list.value = language;
});

// get new Text as soon as the site is loaded
document.addEventListener("DOMContentLoaded", getNewText);

// get level and language and modify array

// if enter key is pressed, hasPressedEnterKey is set true
inputField.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    console.log("enter is pressed");
    hasPressedEnterKey = true;
  }
});

// check if the input is right one by one
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
  // show next text when the input is right and enter key is pressed
  if (isCorrect && hasPressedEnterKey) {
    getNewText();
    showAnimation();
  }

  // reset
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

// animation
function showAnimation() {
  icon1.src = "./assets/icons8-sparkling-100.png";
  icon2.src = "./assets/icons8-sparkling-100.png";
  icon1.classList.add("icon1Animation");
  icon2.classList.add("icon2Animation");
}
