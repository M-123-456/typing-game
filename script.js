import { texts } from "./texts.js";

let textField = document.querySelector(".text");
let inputField = document.getElementById("input-field");
const levelsList = document.getElementById("levels");
const languagesList = document.getElementById("languages");
const animationDiv = document.querySelector(".animation");

let hasPressedEnterKey = false;
let typedCorrectly = 0;

// initial level and language
let level = 1;
let language = "Japanese";

// Adding items to navigation bar accordion
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
    typedCorrectly += 1;
    getNewText();
  }
  console.log(typedCorrectly);
  if (typedCorrectly === 10) {
    animation();
    typedCorrectly = 0;
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

function animation() {
  for (let i = 0; i <= 40; i++) {
    const animationImg = document.createElement("img");
    animationImg.classList.add("animationImg");
    animationImg.src = "./assets/icons8-sparkling-100.png";
    animationDiv.appendChild(animationImg);
  }

  anime({
    targets: ".animationImg",
    translateX: function () {
      return anime.random(-500, 500);
    },
    translateY: function () {
      return anime.random(-500, 500);
    },
    scale: function () {
      return anime.random(0.2, 1.5);
    },
    duration: 2500,
    delay: anime.stagger(15),
   
  });
}

