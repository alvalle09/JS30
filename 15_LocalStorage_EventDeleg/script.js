
  // this app will use localStorage Object for saving state. 
  // also uses event delegations for items that aren't in Dom at time of assiging event handler
  const addItems = document.querySelector('.add-items'); // the form element
  const itemsList = document.querySelector('.plates'); // Plates list
  // const items = []; // array for saving plates, initially empty array
  const items = JSON.parse(localStorage.getItem('items')) || [] ;

  function addItem(e) {
    // prevent form from submitting to server which will refresh the form
    e.preventDefault();
    
    // we can use "this" here because this=the form element
    const text = (this.querySelector('[name=item]')).value; // wrap in parens first, then grab value property of input text box
    const item = {
        //text: 'Item Name',
        //text: text,
        // with ES6 you can just use:
        text, 
        done: false
    }
    items.push(item);    
    //console.log(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    // reset refreshes the form after submit event, this clears the input box
    this.reset();
  }

  // the reason to pass in values instead of using const above is to make this function reusable
  // i.e., function won't break if you call this function without an object
  function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {      // this will loop over every item in plates arrary
        // need to use terniary operator for checked property
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : '' } /> 
                <label for="item${i}">${plate.text}</lable>
            </li>
        `;
    }).join(''); // map returns array, so join will concatenate and return one big string
  }

  // event delegation 
  function toggleDone(e) {
    // console.log(e);
    //console.log(e.target); // need to check if the target we're looking for is the element we want
    
    if (!e.target.matches('input')) return; // ignore if not an input element

    //console.log(e.target);
    const el = e.target;
    //console.log(el.dataset.index);
    const index = el.dataset.index;
    // toggle the item using ! operator
    items[index].done = !items[index].done;    
    // persist to localstorage
    localStorage.setItem('items', JSON.stringify(items));
    // render the list
    populateList(items, itemsList);
  }

  // listen for submit event, not click event
  addItems.addEventListener('submit', addItem);

  // use event delegation of parent element
  itemsList.addEventListener('click', toggleDone);

  // this method re-renders entire list, inefficient for large list. 
  populateList(items, itemsList);

  // the following won't work because we're dynamically re-rendering the items list, so events won't be attached
  //
  //const checkBoxes = document.querySelectorAll('input');
  //checkBoxes.forEach(input => input.addEventListener('click', ()=> alert('hi')));


  // Challenge!
  /// to do on my own !!!
  //  1) re-render just single item
  //  2) check all / uncheck all button
