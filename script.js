"use strict"

// The computer choice is randomly generated
function getComputerChoice() {
    let randomSelection = Math.floor(Math.random() *3);
    
    switch (randomSelection) {
        case 0:
            return 'Rock';
        case 1:
            return 'Papper';
        case 2:
            return 'Scissor'; 
    } 
}

// As I user I want to input my choice, case insenstive



//I want to play a round of RPS against the computer

//The winner is displayed after 5 rounds

