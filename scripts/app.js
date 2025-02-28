document.getElementById('login-btn').addEventListener('click', function () {
  const mobileNumber = forValue('mobile-number');

  const pinNumber = convertToNumber('pin-number');

  if (mobileNumber && pinNumber) {
    if (mobileNumber.length === 11) {
      if (pinNumber === 1234) {
        window.location.href = '../main.html';
      } else {
        console.log('Please enter a valid PIN');
      }
    } else {
      console.log('Please enter a valid Mobile Number');
    }
  } else {
    console.log('Please fillup the inputs');
  }
})