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

function playRound(playerChoice, computerChoice) {
    switch() {
        case rock, scissors
        return "You did it!"
    }
}