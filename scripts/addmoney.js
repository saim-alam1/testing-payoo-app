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

  const selectedBank = document.getElementById('all-bank').value;
  // console.log(selectedBank);

  if (amountToAdd < 0) {
    alert('Please input positive number');
    return;
  }

  if (amountToAdd && pinNumber) {
    if (accountNumber.length === 11) {
      if (pinNumber === 1234) {
        const sum = mainBalance + amountToAdd;
        changeTheValue('main-balance', sum);

        const container = document.getElementById('transaction-container');



        const div = document.createElement('div');
        div.classList.add('bg-red-500');
        div.innerHTML = `
        <h1 class='bg-yellow-400 text-center'>Added Money from ${selectedBank}</h1>
        <h3 class='text-center'>${amountToAdd}</h3>
        <p class='text-center'>Acoount number: ${accountNumber}</p>`

        container.appendChild(div);


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