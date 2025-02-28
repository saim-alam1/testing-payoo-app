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