/*user types in r p s
computer generates a random result
int displays winner or loser message
rerun */

/* let choices = ["rock", "paper", "scissors"]; */
let computerChoice;
let playerChoice = prompt("Rock, paper or scissors?");
let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        computerChoice = "rock";
    } else if (randomNumber === 2) {
        computerChoice = "paper";
    } else computerChoice = "scissors";
    return computerChoice;
}

computerChoice = getComputerChoice();
console.log(playerChoice, computerChoice);

/* if rock and scissors
if rock and paper
if scissors and paper
and reverse
if rock and rock
if paper and paper
if scissors and scissors */

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Draw!";
    }
    if (playerChoice === "rock" && computerChoice === "scissors") {
        return "You win!";
    }
    if (playerChoice === "paper" && computerChoice === "rock") {
        return "You win!";
    }
    if (playerChoice === "scissors" && computerChoice === "paper") {
        return "You win!";
    } else return "You lose. Try again."
}

console.log(playRound(playerChoice, computerChoice));

function game() {
    /* if a win, 'score' increments for player but not computer
       if lose, 'score' increments for computer but not player.
       console.log result each round
       the 'loop' ends after five round and if player score > computer score then player wins.
       if computer score > player score then player loses.
       new game prompt? button */
  for (let i = 0; i < 5; i++) {
    playRound(playerChoice, computerChoice)
    if (playerChoice === "rock" && computerChoice === "scissors") {
        playerScore++;
        console.log(playerScore, computerScore);
    }
    if (playerChoice === "paper" && computerChoice === "rock") {
        playerScore++;
        console.log(playerScore, computerScore);
    }
    if (playerChoice === "scissors" && computerChoice === "paper") {
        playerScore++;
        console.log(playerScore, computerScore);
    }
    if (playerChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        console.log(playerScore, computerScore);
    }
    if (playerChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        console.log(playerScore, computerScore);
    }
    if (playerChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        console.log(playerScore, computerScore);
    } else console.log(playerScore, computerScore);
    getComputerChoice();
    computerChoice = getComputerChoice();
    playerChoice = prompt("Rock, paper or scissors?");
    console.log(playerChoice, computerChoice);
  }
    if (playerScore > computerScore) {
        return "You won the game!";
    } else if (playerScore = computerScore) {
        return "The game ended in a draw. I'll keep the gold star."
    } else return "You lost the game. Try again?";
}
    
console.log(game());