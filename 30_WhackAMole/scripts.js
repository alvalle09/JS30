
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const timeKeeper = document.querySelector('.timeleft');
const btnStart = document.querySelector('.start');
const testColor = document.querySelector('.test');

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
    const seconds = 20;
    timer(seconds);
    //console.log(seconds);
}

function displayTimeLeft(seconds) {  
    timeKeeper.textContent = `${seconds} seconds left`;
    document.title = `${'🕓'} ${seconds} left to whak a mole!`;
}

function timer(seconds) {
    // clear any timers first
    clearInterval(countdown);
    let secondsLeft = seconds;

    countdown = setInterval(() => {
        secondsLeft--; 
        // check if we need to stop running
        /*
        if (secondsLeft <= 0) return;   */   /// this doesn't stop even from running, it just returns nothing      

        // can't be <= 0, otherwise will still give -1 seconds
        if (secondsLeft < 0) {        
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000);
} 



function peep() {
    const time = randomTime(200, 1000);  //(200, 1000) // how much time the mole will peep up
    const hole = randomHole(holes); // which hole will it pop up on 
    //console.log(time, hole);
    
    //hole.classList.remove('bonked');
    moles.forEach(mole => mole.classList.remove('bonked'));
    hole.classList.add('up');
    
    setTimeout(() => {
        hole.classList.remove('up');
        
        // if game isn't over, keep repeating
        if (!timeUp) { 
            peep();
        }
        else {
            btnStart.disabled = false;
        };
    }, time);
}

function startGame() {
    btnStart.disabled = true;
    scoreBoard.textContent = 0;
    score = 0;
    timeUp = false;

    peep();
    // end after 10 seconds
    setTimeout(() => timeUp = true, 20000);
    // show time left
    timeKeeper.style.display = 'block';

    startTimer();
}

//setTimeout(() => timeKeeper.textContent = totalTime--, 1000);

function bonk(e) {
    if (!e.isTrusted) return; // this only true when actual click from user, not simulated in js
    console.log(e);
    score++;
    this.classList.add('bonked');
    this.classList.remove('up');
    //this.classList.remove('bonked');
    
    scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', bonk));
//moles.forEach(mole => mole.addEventListener('touchstart', bonk));
