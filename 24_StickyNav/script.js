
const nav = document.querySelector('#main');
// om page load, get position of top of nav
const topOfNav = nav.offsetTop;

function fixNav() {
    console.log(topOfNav,  window.scrollY);
    if (window.scrollY >= topOfNav) {
       document.body.classList.add('fixed-nav');
       // cant' use "padding-top" in js, use camelCase instead
       // also, don't hardcode the paddingtop prop to something like 74px, size of nav could change based on font, etc..
       document.body.style.paddingTop = nav.offsetHeight + 'px';
    } else {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
    }
}

window.addEventListener('scroll', fixNav);

