
const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');     // mp3 sound, camera click

function getVideo() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false}) 
    // getUserMedia returns a promise...
    .then(localMediaStream => {      
        console.log(localMediaStream);
        // following line doesn't work anymore, it's been deprecated
        //video.src = window.URL.createObjectURL(localMediaStream);
        // use this instead
        video.srcObject = localMediaStream;
        // this function will emit 'canplay', captured below on eventlistener
        video.play();

    })
    .catch(err => {
        console.error(`Sorry, access denied`, err);
    })
}

function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    //console.log(width, height);
    canvas.width = width;
    canvas.height = height;

    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
    }, 16);
}   

function takePhoto() {
    // play the sound
    snap.currentTime = 0; 
    snap.play();

}

getVideo();

video.addEventListener('canplay', paintToCanvas);