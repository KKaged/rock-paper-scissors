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
    Swal.fire({
      title: "It's a tie!",
      text: `No one wins! It's a tie!`,
      icon: `warning`,
      confirmButtonText: "Try Again!",
    });
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    Swal.fire({
      title: "You Win!",
      text: `${playerSelection} beats ${computerSelection}`,
      icon: "success",
      confirmButtonText: "Play Again",
    });
  } else {
    // Player loses
    Swal.fire({
      title: "You Lose!",
      text: `${computerSelection} beats ${playerSelection}`,
      icon: "error",
      confirmButtonText: "Try Again",
    });
  }
}
const computerSelection = getComputerChoice();
