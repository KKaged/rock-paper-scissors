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
  let winner;

  if (playerSelection === computerSelection) {
    winner = "It's a tie!";
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    winner = `You Win! The Computer Picked ${computerSelection}`;
  } else {
    winner = `Computer Wins with ${computerSelection}!`;
  }

  document.querySelector(".result").innerText = winner;
}
const computerSelection = getComputerChoice();
