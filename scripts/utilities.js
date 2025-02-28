// To grab values
function forValue(id) {
  return document.getElementById(id).value;
}

// To convert into number
function convertToNumber(id) {
  const input = document.getElementById(id).value;
  const convertedInput = parseInt(input);
  return convertedInput;
}

// To convert the main balance into number
function convertMainBalanceIntoNumber(id) {
  const input = document.getElementById(id).innerText;
  const convertedInput = parseFloat(input);
  return convertedInput;
}

// To change any values
function changeTheValue(id, value) {
  document.getElementById(id).innerText = value;
}