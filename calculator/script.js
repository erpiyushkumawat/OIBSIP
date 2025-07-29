// script.js
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let input = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (value) {
      input += value;
      display.value = input;
    }
  });
});

// Clear button
document.getElementById('clear').addEventListener('click', () => {
  input = '';
  display.value = '';
});

// Delete last character
document.getElementById('delete').addEventListener('click', () => {
  input = input.slice(0, -1);
  display.value = input;
});

// Evaluate expression
document.getElementById('equals').addEventListener('click', () => {
  try {
    input = eval(input).toString();
    display.value = input;
  } catch {
    display.value = "Error";
    input = '';
  }
});

// Keyboard support
document.addEventListener('keydown', (e) => {
  const validKeys = '0123456789+-*/.';
  if (validKeys.includes(e.key)) {
    input += e.key;
    display.value = input;
  } else if (e.key === 'Enter') {
    try {
      input = eval(input).toString();
      display.value = input;
    } catch {
      display.value = "Error";
      input = '';
    }
  } else if (e.key === 'Backspace') {
    input = input.slice(0, -1);
    display.value = input;
  } else if (e.key === 'Escape') {
    input = '';
    display.value = '';
  }
});
