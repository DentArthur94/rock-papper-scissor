"use strict"

let playerScore = 0;
let computerScore = 0;


const rockButton = document.querySelector("#rockButton"); 
const papperButton = document.querySelector("#papperButton"); 
const scissorsButton = document.querySelector("#scissorsButton"); 
const resultsDiv = document.querySelector("#results"); 

const buttons = document.querySelectorAll("button");

let i = 1; 
let endGameResult; 

const roundCounter = document.createElement("p"); 
const playerChoicePara = document.createElement("p");
const computerChoicePara = document.createElement("p"); 
const scorePara = document.createElement("p"); 


buttons.forEach(function(button) {

    button.addEventListener("click" , function eventHandler() {

            roundCounter.textContent = `${i}/5`;
            resultsDiv.appendChild(roundCounter);

            let computerChoice = getComputerChoice();
            let playerChoice = button.textContent;
            playRound(playerChoice , computerChoice);

            playerChoicePara.textContent = "Player Choice : " + playerChoice;
            resultsDiv.appendChild(playerChoicePara); 

            computerChoicePara.textContent = "Computer Choice : " + computerChoice; 
            resultsDiv.appendChild(computerChoicePara); 

            scorePara.textContent = `Computer Score : ${computerScore}
            Player Score : ${playerScore}`;
            resultsDiv.appendChild(scorePara);
            i++;

            if(i === 6) {
                if (computerScore>playerScore) {
                        endGameResult = "Computer wins !";
                } else if (playerScore>computerScore) {
                        endGameResult ="Player wins !"; 
                } else {
                        endGameResult = "It's a draw !"
                }

                const endGamePara = document.createElement("p"); 
                endGamePara.textContent = endGameResult;
                resultsDiv.appendChild(endGamePara);
                button.removeEventListener("click", eventHandler);
            }

    })});




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




