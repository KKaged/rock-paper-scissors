//Defining the moves in the game
const moves = ["Rock", "Paper", "Scissors"];
const rock = document.querySelector(".rock");
const scissors = document.querySelector(".scissors");
const paper = document.querySelector(".paper");
const playerScore = document.querySelector(".playerScore");
const computersScore = document.querySelector(".computerScore");
const finalResult = document.querySelector(".finalResults");
const result = document.querySelector(".result");
let playerSelection;
let computerSelection;
let winnerScore = 0;
let computerScore = 0;
let winner;

//What the computer picks
const newComputerChoice = () => {
  computerSelection = moves[Math.floor(Math.random() * moves.length)];
  return computerSelection;
};

rock.addEventListener("click", () => {
  console.log(`The Computer Picks ${computerSelection}`);
  playerSelection = "Rock";
  console.log(`You Picked Rock!`);
  playRound(playerSelection);
});
scissors.addEventListener("click", () => {
  console.log(`The Computer Picks ${computerSelection}`);
  playerSelection = "Scissors";
  console.log("You picked Scissors!");
  playRound(playerSelection);
});
paper.addEventListener("click", () => {
  console.log(`The Computer Picks ${computerSelection}`);
  playerSelection = "Paper";
  console.log("You Picked Paper!");
  playRound(playerSelection);
});

//one round
function playRound(playerSelection) {
  newComputerChoice();
  if (playerSelection === computerSelection) {
    winner = "It's a tie!";
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    winnerScore++;
    winner = `You Win! The Computer Picked ${computerSelection}`;
    playerScore.innerText = `Your Score: ${winnerScore}`;
    console.log(`Your Score: ` + winnerScore);
  } else {
    winner = `Computer Wins with ${computerSelection}!`;
    computerScore++;
    computersScore.innerText = `Computer Score: ${computerScore}`;
    console.log(`Comp ` + computerScore);
  }
  document.querySelector(".result").innerText = winner;
  if (winnerScore === 5) {
    finalResult.innerText = "You Win!";
    winnerScore = 0;
    computerScore = 0;
    playerScore.innerText = `Your Score: ${winnerScore}`;
    computersScore.innerText = `Computer Score: ${computerScore}`;
  } else {
    if (computerScore === 5) {
      finalResult.innerText = "Computer Wins!";
      winnerScore = 0;
      computerScore = 0;
      playerScore.innerText = `Your Score: ${winnerScore}`;
      computersScore.innerText = `Computer Score: ${computerScore}`;
    }
  }
}
