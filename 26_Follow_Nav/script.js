

const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter() {
    // console.log('enter!@');
    this.classList.add('trigger-enter');
    // delay active class 150 milliseconds
    setTimeout(() => this.classList.add('trigger-enter-active'), 150);
    background.classList.add('open');

    const dropdown = this.querySelector('.dropdown');
    //console.log(dropdown);
    const dropdownCoords = dropdown.getBoundingClientRect();
    // get coords of nav too, to add to position relative to nav
    const navcoords = nav.getBoundingClientRect();
    //console.log(dropdownCoords);
    console.log(navcoords);

    const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        top: dropdownCoords.top,
        left: dropdownCoords.left,
    };
    // needs pixels, so use template strings
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('width', `${coords.width}px`);
    // this won't work when  another div or obther element above the nav...
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);

}


function handleLeave() {
    // console.log('Leaving!');
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');

    

}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));





