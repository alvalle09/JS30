
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;

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
    timeUp = false;
    peep();
    setTimeout(() => timeUp = true, 10000);

}
