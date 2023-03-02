// Adds event listener to alert button. Alert onClick
const alertf = document.getElementById('alert-button');
alertf.addEventListener('click', (e) => {
  alert(`Alert pressed!`);
});



// Adds a click listener to confirm user input. It's called when the user confirms
const confirmf = document.getElementById('confirm-button');
confirmf.addEventListener('click', (e) => {
  const output = document.getElementById('output');
  const result = confirm(`Do you confirm this?`);
  output.textContent =
    `The value returned by the confirm method is : ${result}`;
});

// Adds a click listener to prompt for a name and output the result to the output html tag
const promptf = document.getElementById('prompt-button');
promptf.addEventListener('click', (e) => {
  const output = document.getElementById('output');
  const result = prompt('What is your name?');
  if (result != null) {
    output.innerHTML = `Prompt result: ${result}`;
  } else {
    output.textContent = `User didn’t enter anything`;
  }
});

// Adds event listener to spromptf and prompts for a name. If there is no name out is the user enters nothing
const spromptf = document.getElementById('sprompt-button');
spromptf.addEventListener('click', (e) => {
  const output = document.getElementById('output');
  const result = DOMPurify.sanitize(prompt('What is your name?'));
  if (result != null) {
    output.innerHTML = `Prompt result: ${(result)}`;
  } else {
    output.textContent = `User didn’t enter anything`;
  }
});
