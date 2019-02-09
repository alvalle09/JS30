
let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
// anything with [data-time] is selected, can include images, buttons, text..
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;
    console.log({now, then});
    displayTimeLeft(seconds);
    // only need to run once
    displayEndTime(then);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) /1000); // run date.now again to get current time, divide by 1k to get seconds
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

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds <10 ? '0': ''}${remainderSeconds}`;
    timerDisplay.textContent = display;
    document.title = `${'🕓'} ${display}`;

    console.log({minutes, remainderSeconds});
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const adjustedHour = hour > 12 ? hour - 12 : (hour == 0 ? '12' : hour );
    const minutes = end.getMinutes();
    endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 12 ? '0' : ''}${minutes}  `;


}

function startTimer() {
    const seconds = parseInt(this.dataset.time);
    console.log(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));