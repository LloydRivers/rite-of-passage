const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const choices = document.querySelectorAll("button");
let userChoice
let computerChoice
let result
choices.forEach(choice => choice.addEventListener("click", (event)=>{
    userChoice = event.target.id
    userChoiceDisplay.innerHTML = userChoice
    getComputerChoice()
    getresult()
}))

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1
    if(randomNumber === 1){
        computerChoice = "rock"
    }
    if(randomNumber === 2){
        computerChoice = "scissors"
    }
    if(randomNumber === 3){
        computerChoice = "paper"
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getresult(){
    if(computerChoice === userChoice){
     result = "It's a draw"
    }
    if(computerChoice === 'rock' && userChoice === "paper"){
     result = "You won!"
    }
    if(computerChoice === 'rock' && userChoice === "scissors"){
     result = "You lost!"
    }
    if(computerChoice === 'paper' && userChoice === "scissors"){
     result = "You won!"
    }
    if(computerChoice === 'paper' && userChoice === "rock"){
     result = "You lose!"
    }
    if(computerChoice === 'scissors' && userChoice === "rock"){
     result = "You win!"
    }
    if(computerChoice === 'scissors' && userChoice === "paper"){
     result = "You lose!"
    }
    resultDisplay.innerHTML = result
}