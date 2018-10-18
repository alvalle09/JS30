
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
    //video[video.paused ? 'play' : 'pause' ](); // yes, this would work, but it's ugly
    video[method](); // invoke method as prop to video
}

function handleRangeUpdate() {
    video[this.name] = this.value;
    console.log(this.value);
    console.log(this.name);
}

function skip() {
    //console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}

function updateButton() {
    console.log('update the button');
    // terniary syntax
    const icon = this.paused ? '🕷' : '🕸';
    console.log(icon);
    // from const above
    toggle.textContent = icon;
}

/* Hook up events */
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton); // fyi, () not used in function call...
video.addEventListener('pause', updateButton);

skipButtons.forEach(button => button.addEventListener('click', skip ));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));








