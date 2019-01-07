
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
    return banName.replace(/^(a |the |an )/i, '').trim();
}               

const sortedBands = bands.sort(function (a, b) {
    if (a > b) {
        return 1;
    }
    else {
        return -1;
    }    
});


console.log(sortedBands);