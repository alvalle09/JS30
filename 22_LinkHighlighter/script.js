
//  👁️👁️ 👁️👁️ 👁️👁️ 👁️👁️  
const anchors = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);


function highlightLink() {
    // some debugging console stuff...
    //console.log('Highlighted!');
    //console.log(this);    
    const linkCoords = this.getBoundingClientRect();
    console.log(linkCoords);
}

anchors.forEach(a => a.addEventListener('mouseenter', highlightLink));
