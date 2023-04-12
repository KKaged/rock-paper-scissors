//Defining the moves in the game
const moves = ["Rock", "Paper", "Scissors"];
const rock = document.querySelector(".rock");
const scissors = document.querySelector(".scissors");
const paper = document.querySelector(".paper");
let playerSelection;

rock.addEventListener("click", () => {
  console.log(`The Computer Picks ${computerSelection}`);
  playerSelection = "Rock";
  console.log(`You Picked Rock!`);

  console.log(playRound(playerSelection, computerSelection));
});
scissors.addEventListener("click", () => {
  console.log(`The Computer Picks ${computerSelection}`);
  playerSelection = "Scissors";
  console.log("You picked Scissors!");
  console.log(playRound(playerSelection, computerSelection));
});
paper.addEventListener("click", () => {
  console.log(`The Computer Picks ${computerSelection}`);
  playerSelection = "Paper";
  console.log("You Picked Paper!");
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
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
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
