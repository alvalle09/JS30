
const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
msg.text = document.querySelector('[name="text"]').value;

speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
options.forEach(option => option.addEventListener('change', setOption));

speakButton.addEventListener('click', toggle);
// this won't work
//stopButton.addEventListener('click', toggle(false)); // would only run on pageload
stopButton.addEventListener('click', ()=> toggle(false));


function setOption() {
    // we know what option was changed, and what it was changed to. 
    console.log(this.name, this.value);
    msg[this.name] = this.value;
    toggle();
}


function populateVoices() {
   voices = this.getVoices();
   //console.log(voices);
   const voiceOptions = voices
    // to filter for english voices only, uncomment following line.
    //.filter(voice => voice.lang.includes('en'))
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join('');
   voicesDropdown.innerHTML = voiceOptions;
}

function setVoice() {
    //console.log('Changing voice');
    //console.log(this.value); //gets name property only
    msg.voice = voices.find(voice => voice.name === this.value);
    // cancel any voices speaking, and restart speak
    toggle();
}

function toggle(startOver = true) {
    speechSynthesis.cancel();
    if (startOver) {
        speechSynthesis.speak(msg);
    }
}