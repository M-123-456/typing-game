let textField = document.querySelector(".text");
let inputField = document.getElementById("input-field");

// Texts shown
const texts = [
  "Hallo!",
  "Guten Tag.",
  "Ich bin Tomoki",
  "Wie heißt du?",
  "こんにちは。",
];

getNewText();

const hasPressedEnterKey = false;

function enterKeyPressed(event) {
  if (event.keyCode === 13) {
    console.log("enter key is pressed");
    return (enterKeyPressed = true);
  }
}

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
  if (isCorrect) getNewText();
});

// show new text by pressing enter key
function getNewText() {
  textField.innerText = null;
  // random Number
  const randomNumber = Math.floor(Math.random() * texts.length);
  const newText = texts[randomNumber];
  newText.split("").forEach((char) => {
    const charSpan = document.createElement("span");
    charSpan.innerText = char;
    textField.appendChild(charSpan);
    inputField.value = null;
  });
}
