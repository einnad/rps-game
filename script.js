/*user clicks r p s
computer generates a random result
int displays winner or loser message
rerun */

let computerChoice;
let playerChoice;
// for full game
// let playerScore = 0;
// let computerScore = 0;

const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");
const result = document.querySelector(".result");
const compChoice = document.querySelector(".comp");

const getResult = function (playerChoice, computerChoice) {
  compChoice.textContent = computerChoice;
  if (playerChoice === computerChoice) {
    result.textContent = "It's a tie!";
  } else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    result.textContent = "Player wins!";
  } else result.textContent = "Computer wins!";
};

btnRock.addEventListener("click", function () {
  playerChoice = "Rock";
  computerChoice = getComputerChoice();
  getResult(playerChoice, computerChoice);
});

btnPaper.addEventListener("click", function () {
  playerChoice = "Paper";
  computerChoice = getComputerChoice();
  getResult(playerChoice, computerChoice);
});

btnScissors.addEventListener("click", function () {
  playerChoice = "Scissors";
  computerChoice = getComputerChoice();
  getResult(playerChoice, computerChoice);
});

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    computerChoice = "Rock";
  } else if (randomNumber === 2) {
    computerChoice = "Paper";
  } else computerChoice = "Scissors";
  return computerChoice;
}
