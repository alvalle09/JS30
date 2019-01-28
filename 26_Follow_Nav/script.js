const triggers = document.querySelectorAll('.cool > li');
const backgroung = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter() {
    console.log('enter!@');
    this.classList.add('trigger-enter');
    setTimeout(() => {
        console.log(this);
        this.classList.add('trigger-enter-active');  
    }, 150);
}


function handleLeave() {
    console.log('Leaving!@');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));





