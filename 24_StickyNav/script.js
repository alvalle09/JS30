
const nav = document.querySelector('#main');
// om page load, get position of top of nav
const topOfNav = nav.offsetTop;

function fixNav() {
    console.log(topOfNav,  window.scrollY);
    if (window.scrollY >= topOfNav) {
       document.body.classList.add('fixed-nav');
    } else {
        document.body.classList.remove('fixed-nav');
    }
}

window.addEventListener('scroll', fixNav);

