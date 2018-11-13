
// common debounce function used to limit how often a function fires, performance
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// get the slider images
const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
    // wooo, tooo many events...performance issues!
    // console.log(e);
    // more stats, still too many events, hence..debounce...
    // console.count(e);

    //console.log(window.scrollY);
    sliderImages.forEach(sliderImage => {
        // const slideInAt = (window.scrollY + window.innerHeight);
        // value of scroll position when halfway throught the image
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        //console.log(slideInAt);
        // value at bottom of image
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        // use good var names to know what code is doing
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;

        if (isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active');
        } else {
            sliderImage.classList.remove('active');
        }
        
    });         
}   

window.addEventListener('scroll', debounce(checkSlide));

