function getComputerGuess (){
    const options = ["rock", "paper", "scissors"];
    const computerGuess = Math.floor(Math.random()* options.length)
    return options[computerGuess];
}
console.log(getComputerGuess())