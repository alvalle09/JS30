
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
        // extract pixels
        let pixels = ctx.getImageData(0, 0, width, height);

        // console.log(pixels);
        // pauses execution for debuggig
        // debugger;
        // mess with the pixels
        //pixels = redEffect(pixels);
        //pixels = rgbSplit(pixels);

        //ctx.globalAlpha = 0.1;

        pixels = greenScreen(pixels);


        // put them back
        ctx.putImageData(pixels, 0, 0);

    }, 15);
}   

function takePhoto() {
    // play the sound
    snap.currentTime = 0; 
    snap.play();

    // take the data from canvas
    const data = canvas.toDataURL('image/jpeg');
    console.log(data);

    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'handsome');
    //link.textContent = 'Download Image';
    link.innerHTML = `<img src="${data}" alt="Me" />`;
    strip.insertBefore(link, strip.firstChild);

}

function redEffect(pixels) {
    for(let i = 0; i < pixels.data.length; i+=4) {
        pixels.data[i + 0] = pixels.data[i + 0] + 100;     // red  ,adding + 0 for formatting purposes only
        pixels.data[i + 1] = pixels.data[i + 1] - 50;      // green  
        pixels.data[i + 2] = pixels.data[i + 2] * 0.5;     // blue
        // no need for alpha value
    }
    return pixels;
}

function rgbSplit(pixels) {
    for(let i = 0; i < pixels.data.length; i+=4) {
        pixels.data[i - 150] = pixels.data[i + 0];     // red  
        pixels.data[i + 100] = pixels.data[i + 1];      // green  
        pixels.data[i - 250] = pixels.data[i + 2];     // blue
        // no need for alpha value
    }
        return pixels;
    }


function greenScreen(pixels) {
    const levels = {};

    document.querySelectorAll ('.rgb input').forEach((input) => {
        levels[input.name] = input.value ;
    });

    console.log(levels);
}


getVideo();

video.addEventListener('canplay', paintToCanvas);