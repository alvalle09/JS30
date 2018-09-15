
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
        const regex = new RegExp(wordToMatch, 'gi'); // need this because we just can't put a var in the match function
        return place.city.match(regex) || place.state.match(regex);
    });
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}


function displayMatches() {
    //console.log(this.value); // what is this.value?
    const matchArray = findMatches(this.value, cities);
    //console.log(matchArray);  // first work on getting the data, then deal with hooking it up to html & event listeners
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi'); // create regex of value we're looking for, 'gi'= global, insensitive case
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`); // spaces matter here, if there's a space before the $, a space will be highlighted...bug
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        //replaced place.city & place.state with cityName/stateName
        return `
            <li>
            <span class="name">${cityName}, ${stateName}</span> 
            <span class="population">${numberWithCommas(place.population)}</span>
            </li>
        `; 
    }).join('');
    suggestions.innerHTML = html; //display matches using 
}

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

