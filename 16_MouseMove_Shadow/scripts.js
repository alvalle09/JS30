
const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
// we'll call the amount the shadow should stretch a "walk"
const walk = 100; // 100px

function shadow(e) {
    //console.log(e);
    //const width = hero.offsetWidth;
    //const height = hero.offsetHeight;
    //or all in one
    const {offsetWidth: width, offsetHeight: height} = hero;
    let { offsetX: x, offsetY: y } = e;
    // this will give the coordinates of the target
    //console.log(x, y);
    // "this" is what we're listening on, but "target" is what triggered event
    //console.log(this, e.target);

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    //console.log(x, y);

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2))

    //console.log(xWalk, yWalk);
    text.style.textShadow = `${xWalk}px ${yWalk}px 0 red`;


}

hero.addEventListener('mousemove', shadow);