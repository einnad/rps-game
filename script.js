const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");
const result = document.querySelector(".result");
const compChoice = document.querySelector(".comp");
const userPoints = document.querySelector(".p-points");
const compPoints = document.querySelector(".c-points");
const reset = document.querySelector(".reset");

let computerChoice;
let playerChoice;
let playerScore = 0;
let computerScore = 0;

function getResult(playerChoice, computerChoice) {
  compChoice.textContent = computerChoice;
  if (playerChoice === computerChoice) {
    result.textContent = "It's a tie!";
  } else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    result.textContent = "Player wins!";
    playerScore++;
    userPoints.textContent = playerScore;
  } else {
    result.textContent = "Computer wins!";
    computerScore++;
    compPoints.textContent = computerScore;
  }
}

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    computerChoice = "Rock";
  } else if (randomNumber === 2) {
    computerChoice = "Paper";
  } else computerChoice = "Scissors";
  return computerChoice;
}

function checkWinner() {
  if (playerScore >= 10) {
    clearFields();
    result.textContent = "You WIN! Press reset to play again.";
  } else if (computerScore >= 10) {
    clearFields();
    result.textContent = "Unlucky. Press reset to try again.";
  } else return;
}

function clearFields() {
  compChoice.textContent =
    result.textContent =
    userPoints.textContent =
    compPoints.textContent =
      "";
}

btnRock.addEventListener("click", function () {
  playerChoice = "Rock";
  computerChoice = getComputerChoice();
  getResult(playerChoice, computerChoice);
  checkWinner();
});

btnPaper.addEventListener("click", function () {
  playerChoice = "Paper";
  computerChoice = getComputerChoice();
  getResult(playerChoice, computerChoice);
  checkWinner();
});

btnScissors.addEventListener("click", function () {
  playerChoice = "Scissors";
  computerChoice = getComputerChoice();
  getResult(playerChoice, computerChoice);
  checkWinner();
});

reset.addEventListener("click", function () {
  clearFields();
  playerScore = 0;
  computerScore = 0;
});

// Photo by Karolina Grabowska: https://www.pexels.com/photo/empty-white-business-card-on-wooden-desk-4465147/
// Photo by Pixabay: https://www.pexels.com/photo/tilt-shift-lens-photography-of-stone-161702/
// Photo by Karolina Grabowska: https://www.pexels.com/photo/black-scissors-placed-on-beige-background-4226896/
