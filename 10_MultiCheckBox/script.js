
// const checkboxes = document.querySelectorAll('.inbox');
// const items = document.querySelectorAll('.item');

// select both above in 1 line instead
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

// using let because this var will be dynamic
let lastChecked; 

// handle click event
function handleCheck(e) {
    //console.log(e);
    // lets us track if an item is between 2 other checkboxes
    let inBetween = false;

    // check if they had shift key down, 
    // and check that they are checking it
    if(e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            //console.log(checkbox);
            if(checkbox === this || checkbox === lastChecked){
                inBetween = !inBetween;    
                console.log('Starting in Between!');
            }

            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }

    lastChecked = this;
}

// loop through each checkbox...click event triggered by keyboard event too
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));





