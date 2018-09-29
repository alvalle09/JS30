
// const checkboxes = document.querySelectorAll('.inbox');
// const items = document.querySelectorAll('.item');

// select both above in 1 line instead
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

// handle click event
function handleCheck(e) {
    console.log(e);
}

// loop through each checkbox...click event triggered by keyboard event too
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));




