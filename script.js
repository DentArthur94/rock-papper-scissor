"use strict"

let playerScore = 0;
let computerScore = 0;

game();

console.log(`Computer Score : ${computerScore}
Player Score : ${playerScore}`);

// The computer choice is randomly generated
function getComputerChoice() {
    let randomSelection = Math.floor(Math.random() *3);
    
    switch (randomSelection) {
        case 0:
            return 'Rock';
        case 1:
            return 'Papper';
        case 2:
            return 'Scissors'; 
    } 
}

// As I user I want to input my choice, case insenstive
function getPlayerChoice() {
    let playerChoice = prompt("Please choose Rock, Papper or Scissors !");
    playerChoice = playerChoice[0].toUpperCase() + playerChoice.slice(1).toLowerCase();

    return playerChoice;
}

//I want to play a round of RPS against the computer
function playRound(playerSelection,computerSelection) {
    let result;
    if (playerSelection === "Rock" && computerSelection === "Papper") {

        computerScore++;
        return result = "You lose ! Papper beats Rock";

    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {

        playerScore++;
        return result = "You win ! Rock beats Scissors";

    } else if (playerSelection === "Papper" && computerSelection === "Rock") {

        playerScore++;
        return result = "You win ! Papper beats Rock";

    } else if (playerSelection === "Papper" && computerSelection === "Scissors") {

        computerScore++;
        return result = "You lose ! Scissors beats Papper";

    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {

        computerScore++;
        return result = "You lose ! Rock beats Scissor";

    } else if (playerSelection === "Scissors" && computerSelection === "Papper") {

        playerScore++;
        return result = "You win ! Scissors beats Papper";

    } else {

        return result = "It's a draw !";
    }
}


//The winner is displayed after 5 rounds

function game() {
    for (let i = 0 ; i < 5 ; i++) {
        //set player choice
        let playerChoice = getPlayerChoice(); 

        //check user input
        if (playerChoice !== "Rock" && playerChoice !== "Papper" && playerChoice !== "Scissors") {
            console.log(playerChoice);
            throw new Error("Please choose a correct choice");
        }


        //set computer choice
        let computerChoice = getComputerChoice();

        //log both choices
        console.log(playerChoice);
        console.log(computerChoice);

        //display result of the round
        console.log(playRound(playerChoice,computerChoice));
    }
}

