
// first thing to do is grab the canvas object.
const canvas = document.querySelector('#draw');

// get the context of the canvase, can be in 2D or 3D, google it
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

// flag is set when holding mouse down, and not clicking down to stop drawing
let isDrawing = false;
let lastX = 0; // ????
let lastY = 0;

function draw(e) {
    // this will log all mouse events, all the time, we don't want that
    //console.log(e);    
    if (!isDrawing) return; // exit draw function when not drawing
    // everything below this will run when isDrawing is true
    // console.log(e);
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    // update new coords
    // lastX = e.offsetX;
    // lastY = e.offsetY;
    // shortcut to above, called "destructuring an array"
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

//canvas.addEventListener('mousedown', () => isDrawing = true); // this won't work, on mousedown we need to update x,y to start at last location
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw); 

canvas.addEventListener('mouseup', () => isDrawing = false);
// also when leaving the window, stop the drawing
canvas.addEventListener('mouseout', () => isDrawing = false);
