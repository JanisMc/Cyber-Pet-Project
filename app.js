// import {Bunny, Dragon, Velocirator } from './class.js';
const image = document.getElementById("img");

image.style.display = "none"


const playWithPet = document.getElementById ("playWithPet");
const boredText = document.getElementById ("boredText");
const restart = document.getElementById ("restart");
const boredDisplay = document.getElementById("boredDisplay")

restart.style.display = "none";
boredDisplay.textContent = "Your pet would like to play with you";
let boredomLevel = 5;
let intervalId 
let timeoutId

const checkBored = () => {
    if (boredomLevel == 10) {
        boredDisplay.textContent = "Your pet became bored & went on a rampage Game Over";
        gameOver();
    } else if (boredomLevel > 0 || boredomLevel< 10){
        boredDisplay.textContent = "Your pet would like to play with you"
    }
}

const bored = () => {
    intervalId = setInterval( () => {
       boredomLevel++;
       boredText.textContent = boredomLevel;
       checkBored();
       }, 1000);  
}

const play = () => {
    if (boredomLevel == 0) {
        boredDisplay.textContent = "Your pet is tried & needs to rest for a little while";
    } else  {;
    clearInterval (intervalId);
    clearTimeout (timeoutId);
    boredomLevel--;
    delay();
    }
    
}


const delay = () => {
    timeoutId = setTimeout(() => {
        bored()
    }, 5000);  
}

const gameOver = () => {
    clearInterval (intervalId);
    clearTimeout (timeoutId);
    playWithPet.style.display = "none";
    restart.style.display = "inline";
}

boredText.textContent = `${boredomLevel}`;
playWithPet.addEventListener("click", () => {
    play()
    boredText.textContent = boredomLevel;
});

restart.addEventListener("click", () => {
    boredomLevel = 6;
    boredDisplay.textContent = "Your pet would like to play with you"
    restart.style.display = "none";
    playWithPet.style.display = "inline";
})
