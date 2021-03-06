
const bands = [ 'The Beatles', 
                'The Kinks',
                'Jimmy Hendrix and the Experience',
                'The Plot in You',
                'The Devil Wears Prada',
                'Pierce the Veil', 
                "The Rolling Stones",
                "Pink Floyd",
                "Tom Petty",
                "An Old Dog"];

function strip(banName) {
    //use regex to strip articles
    return banName.replace(/^(a |the |an )/i, '').trim();
}               


const sortedBands = bands.sort((a, b)=> strip(a) > strip(b) ? 1 : -1); 
   /* if (strip(a) > strip(b)) {
        return 1;
    }
    else {
        return -1;
    }  */ 
    //changed to terniary operator
    //return strip(a) > strip(b) ? 1 : -1;
    //Changed to single line function above

    document.querySelector('#bands').innerHTML = 
        sortedBands
        .map(band => `<li>${band}</li>`)
        .join(''); 

console.log(sortedBands);