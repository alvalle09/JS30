
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

    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX
    }

    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    // this one hard coded for prototyping
    //highlight.style.transform = `translate(100px, 100px)`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;


}

anchors.forEach(a => a.addEventListener('mouseenter', highlightLink));
