
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

//console.table([["Phred","Codes","!"]]);

const cities = [];
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');


//const prom = fetch(endpoint);
fetch(endpoint)
    .then(blob => blob.json())
    //.then(data => console.log(data));
    // how to get data into cities array?, hint: can't use push
    // use spread syntax so each item in data gets spread into individual args
    .then(data => cities.push(...data));


function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
    //filter for city and states based on user input
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    });
}

function displayMatches() {
    console.log(this.value); // what is this.value?
}



searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

