// import {Bunny, Dragon, Velocirator } from './class.js';

const playWithPet = document.getElementById ("playWithPet");
const boredText = document.getElementById ("boredText");
const restart = document.getElementById ("restart");

restart.style.display = "none";
let boredomLevel = 5;
let intervalId 
let timeoutId


const bored = () => {
     intervalId = setInterval( () => {
        boredomLevel++;
        boredText.textContent = boredomLevel;
        if (boredomLevel == 10) {
            boredText.textContent = "Your pet went on a rampage Game Over";
            gameOver();
        }
    }, 1000);  
}

const play = () => {
    clearInterval (intervalId);
    clearTimeout (timeoutId);
    boredomLevel--;
    console.log(boredomLevel);
    delay();
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
    restart.style.display = "block";
}

boredText.textContent = `${boredomLevel}`;
playWithPet.addEventListener("click", () => {
    play()
    boredText.textContent = boredomLevel;
});

restart.addEventListener("click", () => {
    boredomLevel = 6;
    restart.style.display = "none";
    playWithPet.style.display = "block";
})
