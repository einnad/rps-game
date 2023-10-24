/*user types in r p s
computer generates a random result
int displays winner or loser message
rerun */

let choices = ["rock", "paper", "scissors"];
let rock;
let paper;
let scissors;
let computerChoice;


function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * choices.length);
    if (randomNumber === 1) {
        computerChoice = "rock";
    } else if (randomNumber === 2) {
        computerChoice = "paper";
    } else computerChoice = "scissors";
    return computerChoice;
}

computerChoice = getComputerChoice();


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


function playRound(playerChoice, computerChoice) {
    if (rock, scissors) || (paper, rock) || (scissors, paper) {
        return "You Win!";
    } else if (rock, rock) || (paper, paper) || (scissors, scissors) {
        return "Draw!";
    } else {
        return "You lose, try again.";
    }
        
}
