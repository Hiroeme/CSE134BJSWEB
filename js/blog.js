// Get bloglist from local storage if not empty, else empty list
const items = JSON.parse(localStorage.getItem('bloglist')) || [];

/**
* Opens the dialog for adding a new record to the database. 
* This is called by add and edit
*/
function openNew() {
  document.getElementById('addbtn').style.display = 'block';
  document.getElementById('editbtn').style.display = 'none';
  document.getElementById('dialog').showModal();
  reset();
}

/**
* Closes the dialog and resets dialog entries. 
* This is called when the user clicks the close button
*/
function closeDialog() {
  document.getElementById('dialog').close();
  reset();
}


/**
* Adds a new item to the list and saves it to local storage. 
* Called when user presses the Add button
* 
*/
function addItem() {
  const textInput = document.getElementById('textInput');
  const dateInput = document.getElementById('dateInput');
  const summInput = document.getElementById('textarea');

  const text = DOMPurify.sanitize(textInput.value);
  const date = DOMPurify.sanitize(dateInput.value);
  const summ = DOMPurify.sanitize(summInput.value);

  // if text is empty or text is empty
  if (text === '') return alert('Please enter a title');
  // if date is not empty return alert
  if (date === '') return alert('Please enter date');
  // if summ is not empty return an alert
  if (summ === '') return alert('Please enter summary');

  items.push({
    title: text,
    time: date,
    summary: summ,
  });

  localStorage.setItem('bloglist', JSON.stringify(items));
  listItems();

  document.getElementById('dialog').close();

  document.getElementById('list-items').style.display = 'block';
  reset();
}

/**
* Resets text fields to default values. This is called on dialog load and when user clicks on 
* Dialog buttons
*/
function reset() {
  document.getElementById('textInput').value = '';
  document.getElementById('dateInput').value = '';
  document.getElementById('textarea').value = '';
}


/**
* Opens dialog to edit an item. 
* Sets entries to items[index].title, time, and summary
* Changes Add to Edit
*/
function editItem() {
  const index = this.name;

  document.getElementById('dialog').showModal();

  document.getElementById('addbtn').style.display = 'none';
  document.getElementById('editbtn').style.display = 'block';

  let textInput = document.getElementById('textInput');
  let dateInput = document.getElementById('dateInput');
  let summInput = document.getElementById('textarea');

  textInput.value = items[index].title;
  dateInput.value = items[index].time;
  summInput.value = items[index].summary;

  document.getElementById('editbtn').addEventListener('click', () => {
    textInput = document.getElementById('textInput');
    dateInput = document.getElementById('dateInput');
    summInput = document.getElementById('textarea');

    // if the user input is not a title
    if (textInput.value === '') return alert('Please enter a title');
    // if dateInput. value is not empty
    if (dateInput.value === '') return alert('Please enter date');
    // if the user input is not a summary
    if (summInput.value === '') return alert('Please enter summary');


    // console.log(textInput.value);

    const text = DOMPurify.sanitize(textInput.value);
    const date = DOMPurify.sanitize(dateInput.value);
    const summ = DOMPurify.sanitize(summInput.value);

    // console.log(text);

    items[index].title = text;
    items[index].time = date;
    items[index].summary = summ;

    localStorage.setItem('bloglist', JSON.stringify(items));
    document.getElementById('dialog').close();
    listItems();
    reset();
  });
}

/**
* Creates a list of items and inserts it into the DOM. 
* This is called on load and when the user clicks on the list
*/
function listItems() {
  let list = '';
  // Generates a list of items in the list
  for (let i = 0; i < items.length; i++) {
    list += '<li>';
    list += '<h4>' + items[i].title + '</h4>';
    list += '<h5> Date: ' + items[i].time + '</h5>';
    list += '<p> Summary: ' + items[i].summary + '</p>';
    list +=
            '<button class=\'edit' + i + '\'' + 'name=\'' + i + '\'' +
            ')\'><i class=\'fa fa-pencil\'></i> Edit</button>';
    list +=
            '<button class=\'delete' + i + '\'' + 'name=\'' + i + '\'' +
            ')\'><i class=\'fa fa-trash\'></i> Delete</button></li>';
  }

  document.querySelector('#list-items').innerHTML = list;

  // Add click events to the items.
  for (let i = 0; i < items.length; i++) {
    document.querySelector(`.delete${i}`).addEventListener('click', deleteItem);
    document.querySelector(`.edit${i}`).addEventListener('click', editItem);
  }
}

/**
* Deletes an item from the list and saves it to local storage. If the list is empty the list is hidden
*/
function deleteItem() {
  items.splice(this.name, 1);
  localStorage.setItem('bloglist', JSON.stringify(items));

  // If the list is empty it will display the list items.
  if (items.length === 0) {
    document.getElementById('list-items').style.display = 'none';
  }

  listItems();
}


/**
* / / object / list to be used in a call to any of the methods of the object
*/
(function() {
  listItems();
})();


export {openNew, closeDialog, addItem};
