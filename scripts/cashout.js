document.getElementById('cash-out-box').addEventListener('click', function () {
  setDisplay('cash-in', 'none');
  setDisplay('cash-out', 'block');
  setDisplay('transaction-history', 'none');
})


document.getElementById('withdraw-money-btn').addEventListener('click', function (event) {
  event.preventDefault();


  const mainBalance = convertMainBalanceIntoNumber('main-balance');

  const agentNumber = forValue('agent-number');

  const amount = convertToNumber('cash-out-amount');
  console.log(amount);

  const pinNumber = convertToNumber('pin-number-2');


  if (agentNumber.length === 11) {
    if (amount && pinNumber) {
      if (pinNumber === 1234) {
        const sum = mainBalance - amount;
        changeTheValue('main-balance', sum);

        const container = document.getElementById('transaction-container');

        const p = document.createElement('p');
        p.innerText = `Cashout ${amount} from Agent Number ${agentNumber}`;

        container.appendChild(p);


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