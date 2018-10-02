
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
    // use ternary function instead?
    const method = video.paused ? 'play' : 'pause' ;
    video[method](); // weird syntax but it works!
}


/* Hook up events */
video.addEventListener('click', togglePlay);



