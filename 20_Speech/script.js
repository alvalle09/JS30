
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recog = new SpeechRecognition();
recog.interimResults = true;
recog.lang = 'en-US';

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recog.addEventListener('result', e => {
    //console.log(e.results);

    const transcript = Array.from(e.results) 
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

    p.textContent = transcript;

    if(e.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
    }
    console.log(transcript);

    if(transcript.includes('dog')) {
        console.log('🐕🐕🐕🐕🐕🐕🐕🐕🐕🐕🐕🐕🐕🐕🐕🐕🐕🐕 Woof!!!')
    }

});

recog.addEventListener('end', recog.start);

recog.start();