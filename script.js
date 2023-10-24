/*user types in r p s
computer generates a random result
int displays winner or loser message
rerun */

/* let choices = ["rock", "paper", "scissors"]; */
let computerChoice;
let playerChoice = prompt("Rock, paper or scissors?");


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
console.log(computerChoice);



/* function getPlayerChoice() {
    prompt("What is your choice?");
} 


if rock and scissors
if rock and paper
if scissors and paper
and reverse
if rock and rock
if paper and paper
if scissors and scissors */


/* function playRound(playerChoice, computerChoice) {
    if (rock, scissors) || (paper, rock) || (scissors, paper) {
        return "You Win!";
    } else if (rock, rock) || (paper, paper) || (scissors, scissors) {
        return "Draw!";
    } else {
        return "You lose, try again.";
    }
        
} */

/* function playRound(playerChoice, computerChoice) {
    if (rock, scissors)    {
        return "You win!";
    } else if (paper, rock) {
        return "You win!";
    } else if (scissors, paper) {
        return "You win!";
    } else if (rock, rock) {
        return "Draw!";
    } else if (scissors, scissors) {
        return "Draw!";
    } else if (paper, paper) {
        return "Draw!";
    } else if (rock, paper) {
        return "You lose. Try again.";
    } else if (scissors, rock) {
        return "You lose. Try again.";
    } else if (paper, scissors) {
        return "You lose. Try again.";
    } else return "Invalid"; 
} */

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