document.getElementById('transaction-box').addEventListener('click', function (event) {

  event.preventDefault();


  setDisplay('cash-in', 'none');
  setDisplay('cash-out', 'none');
  setDisplay('transaction-history', 'block');
})