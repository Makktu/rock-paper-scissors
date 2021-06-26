"use strict";

// * ROCK PAPER SCISSORS
// * ~~~~~~~~~~~~~~~~~~~

// create the choices
let gameObjects = ["rock", "paper", "scissors"];

// the function where one of rock, paper, scissors is picked by the 'AI'
function computerPlay() {
    let compNum = Math.floor(Math.random() * 3); // random choice between numbers 0, 1, 2
    let compChoice = gameObjects[compNum];
    return compChoice;
}

function playerPlay() {
    let playChoice = prompt("Pick one of these: \nrock \npaper \nscissors");

    playChoice.toString().toLowerCase();

    if (
        playChoice !== "rock" &&
        playChoice !== "paper" &&
        playChoice !== "scissors"
    ) {
        alert("Please enter a valid choice");
        playerPlay();
    }

    return playChoice;
}

function decideWinner(comp, player) {
    if (comp == player) {
        return 0;
    }
    if (comp == "rock" && player == "scissors") return 1;
    if (comp == "paper" && player == "rock") return 1;
    if (comp == "scissors" && player == "paper") return 1;

    if (comp == "rock" && player == "paper") return 2;
    if (comp == "scissors" && player == "rock") return 2;
    if (comp == "paper" && player == "scissors") return 2;
}

const playAgain = () => {
    let again = prompt("Play Again? (y/n)");
    if (again == "y") {
        mainGameLoop();
    } else {
        document.write("Goodbye");
    }
};

function mainGameLoop() {
    let round;
    let comScore = 0;
    let playerScore = 0;

    for (round = 1; round < 6; round++) {
        alert(`*** Beginning Round ${round} ***`);
        let compPick = computerPlay();
        let playerPick = playerPlay();

        let result = decideWinner(compPick, playerPick);

        if (result == 0) {
            alert(
                `A draw. Computer ${compPick} ties with Player ${playerPick}!`
            );
            comScore += 0.5;
            playerScore += 0.5;
            continue;
        }
        if (result == 1) {
            alert(
                `You lose... Computer ${compPick} beats Player ${playerPick}!`
            );
            comScore += 1;
            continue;
        }
        if (result == 2) {
            alert(`You win! Player ${playerPick} beats Computer ${compPick}.`);
            playerScore += 1;
            continue;
        }
    }
    alert(`Final scores: \nPlayer: ${playerScore}\nComputer: ${comScore}`);
    playAgain();
}

mainGameLoop();
