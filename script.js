function getComputerGuess (){
    const options = ["rock", "paper", "scissors"];
    const computerGuess = Math.floor(Math.random()* options.length)
    return options[computerGuess];
}
function game(){
    const playerSelection = prompt("Let's play Rock, Paper Scissors!");
return playerSelection
}
console.log(game())