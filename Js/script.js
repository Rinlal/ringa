let mysteryNumber = Math.ceil(Math.random()*100);
// console.log(mysteryNumber);

let playersGuess = 0;
let guessesRemaining=10;
let guessesMade= 0;
let gameState="";
let gameWon=false;

const input = document.querySelector("#input");
const output = document.querySelector("#output");
const button = document.querySelector("#button");

button.computedStyleMap.cursor = "pointer";
button.addEventListener("click",clickHandler,false);
window.addEventListener("keydown",keyDownHandler,false);

function keyDownHandler(event) {
    if(event.keyCode==13) {
        validateInput();
    }
}

function clickHandler() {
    playGame();
}

function clickHandler() {
    validateInput();
}

function validateInput() {
    playersGuess=Number(input.value);
    if(isNaN(playersGuess)){
        output.innerHTML="Syötä vain numeroita!";
    } else {
        playGame();
    }
}

function playGame(){
    input.select();
    guessesRemaining--;
    guessesMade++;
    gameState="Tämä oli arvaus nro: "+guessesMade+". Sinulla on "+ guessesRemaining+" jäljellä."
    playersGuess = parseInt(input.value);

    if(playersGuess>mysteryNumber) {
        output.innerHTML="Arvauksesi oli liian suuri. "+gameState;
        if (guessesRemaining<1){
            endGame();
        }
    } else if (playersGuess<mysteryNumber) {
        output.innerHTML="Arvauksesi oli liian pieni "+gameState;
        if (guessesRemaining<1){
            endGame();
        }
    } else {
        output.innerHTML="Arvasit oikein!";
        gameWon=true;
        endGame();
        
    }
}
function endGame() {
    if(gameWon){
        output.innerHTML="Aivan oikein! Numero oli "+mysteryNumber+
        " Sinulla meni "+ guessesMade+" arvausta.";
    } else {
        output.innerHTML=
        "Ei enää arvauksia jäljellä. Numero oli: "+mysteryNumber;
    }
    button.removeEventListener("click", clickHandler,false);
    window.removeEventListener("keydown", keyDownHandler, false);
    button.disabled=true;
    input.disabled=true;
}