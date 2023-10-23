/*user types in r p s
computer generates a random result
int displays winner or loser message
rerun */

let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

console.log(getComputerChoice());

/* take user input and computer input
if rock and scissors
if rock and paper
if scissors and paper
and reverse
if rock and rock
if paper and paper
if scissors and scissors */

let computerChoice = getComputerChoice();
let playerChoice;

function playRound(playerChoice, computerChoice) {
    if (rock, scissors || paper, rock || scissors, paper) {
        return "You Win!";
    } else if (rock, rock || paper, paper || scissors, scissors) {
        return "Draw!";
    } else {
        return "You lose, try again.";
    }
        
}