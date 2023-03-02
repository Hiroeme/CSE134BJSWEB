/**
* Shows an alert dialog. 
* 
* @param temp - DOM element to grab and change content
*/
function showAlertDialog(temp) {
  temp.querySelector('.title').textContent = 'Alarm Pressed!';
  temp.querySelector('.prompt').style.display = 'none';

  temp.getElementById('cancel').style.display = 'none';
  temp.getElementById('ok').textContent = 'OK';

  const dialog = temp.getElementById('dialog');
  const yes = temp.getElementById('ok');

  yes.addEventListener('click', () => {
    dialog.close();
  });
};

/**
* Shows a dialog to confirm the user input. This is done by clicking on the yes / no buttons
* 
* @param temp - DOM element to be manipulated
* @param result - Object with result of user input ( optional )
*/
function showConfirmDialog(temp, result) {
  temp.querySelector('.title').textContent = 'Would you like to confirm?';
  temp.querySelector('.prompt').style.display = 'none';

  temp.getElementById('cancel').textContent = 'Cancel';
  temp.getElementById('ok').textContent = 'OK';

  const no = temp.getElementById('cancel');
  const yes = temp.getElementById('ok');
  const output = temp.getElementById('output2');

  const dialog = temp.getElementById('dialog');

  no.addEventListener('click', () => {
    output.textContent = 'The value returned by the confirm method is : false';

    dialog.close();
  });

  yes.addEventListener('click', () => {
    output.textContent = 'The value returned by the confirm method is : true';

    dialog.close();
  });
};

/**
* Shows a dialog to ask for a name. It is used in conjunction with showDialog ()
* 
* @param temp - DOM element to grab and change content
*/
function showPromptDialog(temp) {
  temp.querySelector('.title').textContent = 'What is your name?';


  temp.getElementById('cancel').textContent = 'Cancel';
  temp.getElementById('ok').textContent = 'OK';

  const no = temp.getElementById('cancel');
  const yes = temp.getElementById('ok');
  const output = temp.getElementById('output2');
  const inputL = temp.querySelector('input');

  let result = '';

  inputL.addEventListener('change', () => {
    result = DOMPurify.sanitize(inputL.value);
  });


  no.addEventListener('click', () => {
    output.textContent = `User didn’t enter anything`;

    dialog.close();
  });

  yes.addEventListener('click', () => {
    // Prompt the user if the user entered anything else prompt the user.
    if (result == '') {
      output.textContent = `User didn’t enter anything`;
    } else {
      output.textContent = `Prompt result: ${result}`;
    }
    dialog.close();
  });
};

export {showAlertDialog, showConfirmDialog, showPromptDialog};
