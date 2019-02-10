
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const timeKeeper = document.querySelector('.timeleft');

let lastHole;
let timeUp = false;
let score = 0;
let totalTime = 10;
let countdown;

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min ) + min);
}

function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    //console.log(holes.length);
    const hole = holes[idx];

    if (hole === lastHole) {
        console.log('Same hole!');
        return randomHole(holes);
    }
    
    //console.log(hole);
    lastHole = hole;
    return hole;
}

function startTimer() {
    const seconds = 10;
    timer(seconds);
    //console.log(seconds);
}

function displayTimeLeft(seconds) {
    
    timeKeeper.textContent = seconds;
    //document.title = `${'🕓'} ${display}`;

}

function timer(seconds) {
    // clear any timers first
    clearInterval(countdown);
    let secondsLeft = seconds;

    countdown = setInterval(() => {
        secondsLeft--; // run date.now again to get current time, divide by 1k to get seconds
        // check if we need to stop running
        /*
        if (secondsLeft <= 0) {
            return;
        } */   /// this doesn't stop even from running, it just returns nothing      

        // can't be < 0, otherwise will still give -1 seconds
        if (secondsLeft <= 0) {        
            clearInterval(countdown);
            return;
        }
        //console.log(secondsLeft);
        displayTimeLeft(secondsLeft);
    }, 1000);
} 



function peep() {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    console.log(time, hole);
    
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        // if game isn't over, keep repeating
       if (!timeUp) peep();
    }, time);
}

function startGame() {
    scoreBoard.textContent = 0;
    score = 0;
    timeUp = false;
    peep();    
    setTimeout(() => timeUp = true, 10000);
    startTimer();
}

//setTimeout(() => timeKeeper.textContent = totalTime--, 1000);

function bonk(e) {
    if (!e.isTrusted) return; // this only true when actual click from user, not simulated in js
    console.log(e);
    score++;
    this.classList.remove('up');
    scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', bonk));
//moles.forEach(mole => mole.addEventListener('touchstart', bonk));
