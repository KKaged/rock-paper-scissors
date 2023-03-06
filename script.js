//Defining the moves in the game
const moves = ["rock", "paper", "scissors"];
//What the player picks
let playerSelection = prompt("rock, paper, or scissors?");
while (!moves.includes(playerSelection.toLowerCase())) {
  playerSelection = prompt(
    "That move does not exist, please enter one of 3 choices: rock, paper or scissors."
  );
}
//What the computer picks
function getComputerChoice() {
  return moves[Math.floor(Math.random() * moves.length)];
}
//one round
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}!`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}!`;
  }
}
const computerSelection = getComputerChoice();
//shows what the computer picks
console.log(computerSelection);
//results
console.log(playRound(playerSelection, computerSelection));
