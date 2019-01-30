
const slider = document.querySelector('.items');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', () => {
    isDown = true;
    slider.classList.add('active');
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', () => {
    if (!isDown) return; // only run when mouse down
    console.log(isDown);  
    console.log('Do more work!');
});

