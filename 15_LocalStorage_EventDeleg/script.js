
  // this app will use localStorage Object for saving state. 
  // also uses event delegations for items that aren't in Dom at time of assiging event handler
  const addItems = document.querySelector('.add-items'); // the form element
  const itemsList = document.querySelector('.plates'); // Plates list
  const items = []; // array for saving plates

  //alert('hello');

  function addItem(e){
    // prevent form from submitting to server
    e.preventDefault();
    // console.log('hello');

    const text = (this.querySelector('[name=item]')).value; // wrap in parens first, then grab value of input text box
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
    this.reset();

  }

  // the reason to pass in values instead of using const above is to make this function reusable
  function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {      // this will loop over every item in plates arrary
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" />
                <label for="item${i}">${plate.text}</lable>
            </li>
        `;
    }).join(''); // map returns array, so join will concatenate and return one big string
  }


  // listen for submit event, not click event
  addItems.addEventListener('submit', addItem);


