const playerSelection = "scissors";
function getComputerGuess (){
    const options = ["rock", "paper", "scissors"];
    const computerGuess = Math.floor(Math.random()* options.length)
    return options[computerGuess];
}
function playRound(playerSelection, computerSelection){
if (playerSelection === computerSelection){
    return "The game is a tie!";
}
if (playerSelection === "rock"){
    if (computerSelection === "paper"){
        return "Congratulations, you won!";
    }
    else {
        return "Sorry, the computer won!";
    }
}

if (playerSelection === "scissors"){
    if (computerSelection === "paper"){
        return "Congratulations, you won!";
    }
    else {
        return "Sorry, the computer won!";
    }
}

if (playerSelection === "rock"){
    if (computerSelection === "scissors"){
        return "Congratulations, you won!";
    }
    else {
        return "Sorry, the computer won!";
    }
}
}
const computerSelection = getComputerGuess();
console.log (playRound(playerSelection, computerSelection))