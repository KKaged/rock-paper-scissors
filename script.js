//Defining the moves in the game
const moves = ["rock", "paper", "scissors"];
const rock = document.querySelector(".rock");
const scissors = document.querySelector(".scissors");
const paper = document.querySelector(".paper");
let playerSelection;

rock.addEventListener("click", () => {
  console.log(`The computer picks ${computerSelection}`);
  playerSelection = "rock";
  console.log(`You picked Rock!`);

  console.log(playRound(playerSelection, computerSelection));
});
scissors.addEventListener("click", () => {
  console.log(`The computer picks ${computerSelection}`);
  playerSelection = "scissors";
  console.log("You picked Scissors!");
  console.log(playRound(playerSelection, computerSelection));
});
paper.addEventListener("click", () => {
  console.log(`The computer picks ${computerSelection}`);
  playerSelection = "paper";
  console.log("You picked Paper!");
  console.log(playRound(playerSelection, computerSelection));
});

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
