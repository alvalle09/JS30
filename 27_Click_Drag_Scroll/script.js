
const slider = document.querySelector('.items');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    //console.log(e);
    startX = e.pageX - slider.offsetLeft; // in case there's extra padding on slider element
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return; // only run when mouse down
    e.preventDefault();

    const x = e.pageX - slider.offsetLeft;
    console.log(x, startX);

    //console.count(isDown);  
    //console.log('Do more work!');
});

