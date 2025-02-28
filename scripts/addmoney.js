document.getElementById('cash-in-box').addEventListener('click', function () {
  setDisplay('cash-in', 'block');
  setDisplay('cash-out', 'none');
  setDisplay('transaction-history', 'none');
})

document.getElementById('add-money-btn').addEventListener('click', function (event) {
  event.preventDefault();

  const accountNumber = forValue('account-number');

  const amountToAdd = convertToNumber('amount-number');

  const pinNumber = convertToNumber('pin-number');

  const mainBalance = convertMainBalanceIntoNumber('main-balance');

  if (amountToAdd && pinNumber) {
    if (accountNumber.length === 11) {
      if (pinNumber === 1234) {
        const sum = mainBalance + amountToAdd;
        changeTheValue('main-balance', sum);
      } else {
        console.log('Enter a valid PIN');
      }
    } else {
      console.log('Account number isn\'t valid');
    }
  } else {
    console.log('Please enter all the inputs');
  }
})