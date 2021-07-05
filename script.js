"use strict";

// * WITH GUI
// * ROCK PAPER SCISSORS
// * ~~~~~~~~~~~~~~~~~~~

// the function where one of rock, paper, scissors is picked by the 'AI'
function computerPlay() {
    let compNum = Math.floor(Math.random() * 3); // random choice between numbers 0, 1, 2
    let compChoice = gameObjects[compNum];
    return compChoice;
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

function decideVictory(com, player) {
    if (com === player) {
        messageArea.innerText = `DRAW - You ${player} / COM ${com}`;
    } else if (com > player) {
        messageArea.innerText = `LOSE - You ${player} / COM ${com}`;
        gameOver.play();
    } else if (com < player) {
        messageArea.innerText = `WIN! - You ${player} / COM ${com}`;
        victoryFanfare.play();
    }
    // resultArea.innerText = "";
    playAgain();
}

const playAgain = () => {
    playAgainArea.innerHTML = `<button onclick="go()" class="play-again">PLAY AGAIN</button>`;
};

function go() {
    messageArea.innerText = "BEGIN!";
    resultArea.innerText = "";
    playAgainArea.innerText = "";
    youScore.innerText = `YOU: 0`;
    AIScore.innerText = `COM: 0`;
    round = 1;
    comScore = 0;
    playerScore = 0;
    playChoice = "";
    return;
}

function mainGameLoop(playChoice) {
    if (round <= 5) {
        messageArea.innerText = `Round ${round}`;

        let compPick = computerPlay();
        // let playerPick = playerPlay();

        let result = decideWinner(compPick, playChoice);

        if (result == 0) {
            resultArea.innerText = `A draw. Computer ${compPick} ties with Player ${playChoice}!`;
            comScore += 0.5;
            playerScore += 0.5;
        }
        if (result == 1) {
            resultArea.innerText = `You lose... Computer ${compPick} beats Player ${playChoice}!`;
            comScore += 1;
        }
        if (result == 2) {
            resultArea.innerText = `You win! Player ${playChoice} beats Computer ${compPick}.`;
            playerScore += 1;
        }

        youScore.innerText = `YOU: ${playerScore}`;
        AIScore.innerText = `COM: ${comScore}`;

        round += 1;
        if (round === 6) decideVictory(comScore, playerScore);
        playChoice = "";

        return;
    }
}

// create the choices
let gameObjects = ["rock", "paper", "scissors"];

const buttons = document.querySelectorAll(".player-btn");
const messageArea = document.querySelector(".messages");
const resultArea = document.querySelector(".results");
const playAgainArea = document.querySelector(".play-again");
const youScore = document.querySelector(".you-score");
const AIScore = document.querySelector(".com-score");
const victoryFanfare = new Audio("sound/Victory.wav");
const gameOver = new Audio("sound/gameover.wav");

let round = 1;
let comScore = 0;
let playerScore = 0;
let playChoice = "";

buttons.forEach((button) => {
    button.addEventListener("click", function () {
        playChoice = button.id;
        mainGameLoop(playChoice);
    });
});
