
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
    highlight.style.width = `${linkCoords.width}px`;
    highlight.style.height = `${linkCoords.height}px`;
    highlight.style.transform = `translate(100px, 100px)`;

}

anchors.forEach(a => a.addEventListener('mouseenter', highlightLink));
