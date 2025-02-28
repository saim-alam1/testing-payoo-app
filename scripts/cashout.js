document.getElementById('cash-out-box').addEventListener('click', function () {
  setDisplay('cash-in', 'none');
  setDisplay('cash-out', 'block');
  setDisplay('transaction-history', 'none');
})


document.getElementById('withdraw-money-btn').addEventListener('click', function (event) {
  event.preventDefault();


  const mainBalance = convertMainBalanceIntoNumber('main-balance');

  const selectedBank = document.getElementById('all-bank').value;

  const agentNumber = forValue('agent-number');

  const amount = convertToNumber('cash-out-amount');
  console.log(amount);

  const pinNumber = convertToNumber('pin-number-2');

  if (amount > mainBalance) {
    alert('Invalid Amont');
    return;
  }

  if (agentNumber.length === 11) {
    if (amount && pinNumber) {
      if (pinNumber === 1234) {
        const sum = mainBalance - amount;
        changeTheValue('main-balance', sum);

        const container = document.getElementById('transaction-container');




        const div = document.createElement('div');
        div.classList.add('bg-green-500');
        div.innerHTML = `
        <h1 class='bg-yellow-400 text-center'>Added Money from ${selectedBank}</h1>
        <h3 class='text-center'>${amount}</h3>
        <p class='text-center'>Acoount number: ${agentNumber}</p>`

        container.appendChild(div);




      } else {
        console.log('Invalid PIN');
      }
    } else {
      console.log('Please fillup inputs');
    }
  } else {
    console.log('Invalid agent number');
  }
})