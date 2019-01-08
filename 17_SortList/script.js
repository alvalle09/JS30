
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

const sortedBands = bands.sort(function (a, b) {
    if (strip(a) > strip(b)) {
        return 1;
    }
    else {
        return -1;
    }    
});


console.log(sortedBands);