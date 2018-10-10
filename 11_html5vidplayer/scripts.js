
/* Get Elements */

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');

const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip');
const ranges = player.querySelectorAll('.player__slider');



/* Build our functions */
function togglePlay() {
    
    // video has built in paused property, no play property
    /*
    if (video.paused) {
        video.play();
    }
    else
    {
        video.pause();
    }   */  
    // use ternary operator instead of above code
    const method = video.paused ? 'play' : 'pause' ;
    video[method](); // invoke method as prop to video
}

function updateButton() {
    // terniary for toggling icon based on paused prop
    const icon = this.paused ? '🕷' : '🕸';
    // from const above
    toggle.textContent = icon;
}

/* Hook up events */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton); // fyi, () not used in function call...
video.addEventListener('pause', updateButton);







