const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const input = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remaining = document.querySelector(".remaining");
const remainingSpan = document.querySelector("span");
const message = document.querySelector(".message");
const playAgain = document.querySelector(".play-again");

const word = "magnolia";

const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●")
    }
    wordInProgress.innerText = placeholderLetters.Join("");
};

placeholder(word);

guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    const guessButtonInput = input.value;
    console.log(guessButtonInput);
    input.value = "";
});