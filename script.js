"use strict"

let playerScore = 0;
let computerScore = 0;

//game();

const rockButton = document.querySelector("#rockButton"); 
const papperButton = document.querySelector("#papperButton"); 
const scissorsButton = document.querySelector("#scissorsButton"); 
const resultsDiv = document.querySelector("#results"); 
let i = 1; 

const roundCounter = document.createElement("p"); 
roundCounter.setAttribute("id", "roundCounter");

const playerChoicePara = document.createElement("p");
playerChoicePara.setAttribute("id","playerChoice"); 

const computerChoicePara = document.createElement("p"); 
computerChoicePara.setAttribute("id","computerChoice"); 

const scorePara = document.createElement("p"); 
scorePara.setAttribute("id","scorePara"); 

    rockButton.addEventListener("click" , function eventHandler() {

            roundCounter.textContent = `${i}/5`;
            resultsDiv.appendChild(roundCounter);

            let computerChoice = getComputerChoice();
            playRound("Rock" , computerChoice);

            playerChoicePara.textContent = "Player Choice : " + rockButton.textContent;
            resultsDiv.appendChild(playerChoicePara); 

            computerChoicePara.textContent = "Computer Choice : " + computerChoice; 
            resultsDiv.appendChild(computerChoicePara); 

            scorePara.textContent = `Computer Score : ${computerScore}
            Player Score : ${playerScore}`;
            resultsDiv.appendChild(scorePara);
            i++;

            if(i === 6) {
                rockButton.removeEventListener("click", eventHandler);
            }

    });




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


//The winner is displayed after 5 rounds

function game() {
    for (let i = 0 ; i < 1 ; i++) {
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

