function convert() {
  const value = parseFloat(document.getElementById("degrees").value);
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const resultBox = document.getElementById("result");

  if (isNaN(value)) {
    resultBox.textContent = "Please enter a valid number";
    return;
  }

  let celsius;

  //  here we Convert from 'from' unit to Celsius
  switch (from) {
    case "celsius":
      celsius = value;
      break;
    case "fahrenheit":
      celsius = (value - 32) * 5 / 9;
      break;
    case "kelvin":
      celsius = value - 273;
      break;
  }

  // here Convert from Celsius to 'to' unit
  let result;
  switch (to) {
    case "celsius":
      result = celsius;
      break;
    case "fahrenheit":
      result = (celsius * 9 / 5) + 32;
      break;
    case "kelvin":
      result = celsius + 273;
      break;
  }

  resultBox.textContent = `${result.toFixed(4)} °${getUnitSymbol(to)}`;
}

function getUnitSymbol(unit) {
  switch (unit) {
    case "celsius": return "C";
    case "fahrenheit": return "F";
    case "kelvin": return.2f "K";
  }
}
