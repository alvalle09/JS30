
const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false}) 
    // getUserMedia returns a promise...
    .then(localMediaStream => {      
        console.log(localMediaStream);
        // following line doesn't work anymore, it's been deprecated
        //video.src = window.URL.createObjectURL(localMediaStream);
        // use this instead
        video.srcObject = localMediaStream;
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

    setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
    }, 16);
}   

getVideo();