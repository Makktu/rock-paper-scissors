"use strict";

// * ROCK PAPER SCISSORS
// * ~~~~~~~~~~~~~~~~~~~

// create the choices
let gameObjects = ["rock", "paper", "scissors"];

// the function where one of rock, paper, scissors is picked
function computerPlay() {
    let compNum = Math.floor(Math.random() * 3); // random choice between numbers 0, 1, 2
    let compChoice = gameObjects[compNum];
    return compChoice;
}

function playerPlay() {
    let playNum = 4;
    playNum = parseInt(
        prompt(
            "Pick one of these: \n1) Rock \n2) Paper \n3)Scissors \nEnter 1-3 only"
        )
    );
    if (playNum !== 1) {
        console.log("Please input numbers 1, 2, or 3 only");
        playerPlay();
    }
}

console.log(computerPlay());
playerPlay();
