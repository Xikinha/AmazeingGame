import {LEVEL1, LEVEL2, LEVEL3} from "./layouts.js";
import {createMaze} from "./createMaze.js";
import {movePlayer} from "./movePlayer.js";

const levelUpdate = document.querySelector("#level");
const timeUpdate = document.querySelector("#time");
const btnInfo = document.querySelector("#btnInfo");
const popup = document.querySelector(".pop-up");
const btnStart = document.querySelector("#btnStart");
const btnNext = document.querySelector("#btnNext");
const maze = document.querySelector("#maze");
const time = document.querySelector("#time");
const message = document.querySelector("#message");
let timeLeft;
let level;
let startBlock;
let gameCounter = 0;
let interval;
let storedGameCounter;
let storedTreasureCounter;
let storedGameOn;
let storedGameOver;
let row = 0;
let col = 0;

/// Function to show/hide info box

const openPopup = () => {
    popup.style.display = "block";
};
const closePopup = () => {
    popup.style.display = "none";
};
btnInfo.addEventListener("click", event => {
    openPopup();
    setTimeout(closePopup, 3000);
});

/// Function to setup game

const setUpGame = (number) => {

    maze.innerHTML = "";
    message.style.display = "none";
    clearInterval(interval);

    if (number === 1) {
        level = number;
        timeLeft = 10;
        createMaze(LEVEL1, "26px", "26px");
    } else if (number === 2) {
        level = number;
        timeLeft = 15;
        createMaze(LEVEL2, "19.5px", "19.5px");
    } else if (number === 3) {
        level = number;
        timeLeft = 20;
        createMaze(LEVEL3, "13px", "13px");
    }

    startBlock = document.getElementsByClassName("start")[0];
    timeUpdate.innerHTML = timeLeft;
    levelUpdate.innerHTML = level;

    localStorage.setItem("gameOn", false);
    localStorage.setItem("gameOver", false);

};
  
/// Action when page is loaded

window.addEventListener("load", setUpGame(1));

/// Action when NEXT LEVEL button is clicked

btnNext.addEventListener("click", event => {

    storedTreasureCounter = localStorage.getItem("treasureCounter");
    if (storedTreasureCounter === "1") {
        setUpGame(2);
    } else if (storedTreasureCounter === "2") {
        setUpGame(3);
    }
    startBlock.className = "player";
    interval = setInterval(countdown, 1000);
    localStorage.setItem("gameOn", true);
    localStorage.setItem("gameOver", false);
    gameCounter++;
    localStorage.setItem("gameCounter", gameCounter);
});

/// Action when NEW GAME button is clicked

btnNew.addEventListener("click", event => {
    window.location.reload();
});

/// Action when START button is clicked

btnStart.addEventListener("click", event => {

    storedGameOn = localStorage.getItem("gameOn");
    storedGameOver = localStorage.getItem("gameOver");

    if (storedGameOn === "false" && storedGameOver === "false") {
        gameCounter++;
        localStorage.setItem("gameCounter", gameCounter);

        localStorage.setItem("gameOn", true);
        localStorage.setItem("gameOver", false);

        startBlock.className = "player";
        interval = setInterval(countdown, 1000);
    }
});

/// Event listener to move player with arrow keys

document.addEventListener("keydown", event => {

    storedGameOn = localStorage.getItem("gameOn");
    storedGameOver = localStorage.getItem("gameOver");

    if (storedGameOn === "true" && storedGameOver === "false") {
        movePlayer(event, storedGameCounter, timeLeft, interval, btnNext);
    }
    
});

/// Countdown timer

const countdown = () => {

    if (timeLeft === 0) {
        localStorage.setItem("gameOver", true);

        message.innerHTML = "GAME OVER";
        message.style.display = "block";
        message.className = "loss";
        
        btnNew.style.display = "block";
        btnNext.style.display = "none";
        btnStart.style.display = "none";
    } else {
        timeLeft--;
    }

    time.innerHTML = timeLeft;
};

