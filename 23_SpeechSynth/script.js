/*
const msg = new SpeechSynthesisUtterance();

let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const stopButton = document.querySelector('#stop');
const speakButton = document.querySelector('#speak');


msg.text = document.querySelector('[name="text"]').value;*/

const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
msg.text = document.querySelector('[name="text"]').value;

speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);


function populateVoices() {
   voices = this.getVoices();
   //console.log(voices);
   const voiceOptions = voices
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join('');
   voicesDropdown.innerHTML = voiceOptions;
}

function setVoice() {
    //console.log('Changing voice');
    //console.log(this.value); //gets name property only
    msg.voice = voices.find(voice => voice.name === this.value);

}