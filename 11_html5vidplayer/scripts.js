
/* Get Elements */

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');

const toggle = player.querySelector('.toggle');
const skipup = player.querySelector('.skipup');
const skipButtons = player.querySelectorAll('[data-skip');
const ranges = player.querySelectorAll('.player__slider');
const fstoggle = player.querySelector('.fstoggle');

let fullscreen = false;

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
    //video.requestFullscreen(); ///this doesn't work
}


function toggleFullscreen() {
    //console.log(player.style.minWidth);
    //player.style.minWidth = '100%';    
    //player.style.minHeight = '100%';
    fullscreen = !fullscreen;
    (fullscreen ? player.webkitRequestFullscreen() : document.webkitExitFullscreen());
    const btntxt = fullscreen ? 'Exit Full Screen' : 'Full Screen';
    console.log(btntxt);
    // from const above
    fstoggle.textContent = btntxt;

   /* if (fullscreen) {
        player.webkitRequestFullscreen();

    }
    else {
        document.webkitExitFullscreen();
    } */
    console.log(fullscreen);    
}


function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}


function handleRangeUpdate() {
    video[this.name] = this.value;
    //console.log(this.value);
    //console.log(this.name);
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

function scrub(e) {
    //console.log(e);
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

/* Hook up events */



video.addEventListener('click', togglePlay); // No need to use () in functionCall()
toggle.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton); 
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

skipButtons.forEach(button => button.addEventListener('click', skip ));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
//example of a short-circuit
progress.addEventListener('mousemove',(e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

///challenge: try adding full screen button...to be continued.
fstoggle.addEventListener('click', toggleFullscreen);













