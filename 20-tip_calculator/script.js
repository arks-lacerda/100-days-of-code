const btn = document.querySelector('.btn'),
  tip = document.querySelector('.tip'),
  total = document.querySelector('.total'),
  error = document.querySelector('.error');

const hideError = () => {
  setTimeout(() => {
    error.style.display = 'none';
  }, 3000);
};

const calculateTip = () => {
  const bill = document.querySelector('.bill').value;
  const rate = document.querySelector('.rate').value;

  if (bill === '' || rate == '') {
    // console.log('Please add a number');
    error.style.display = 'block';
    hideError();
  } else if (isNaN(bill)) {
    error.innerHTML = 'Please enter a number';
    error.style.display = 'block';
    hideError();
  } else {
    let tipAmt = bill * rate;
    tipAmt = Math.ceil(tipAmt);

    tip.innerHTML = `Tip: <span>$${tipAmt.toFixed(2)}</span>`;

    let totalBill = Number(bill) + tipAmt;
    totalBill = Math.ceil(totalBill);
    total.innerHTML = `Total Bill: <span>$${totalBill.toFixed(2)}</span>`;
  }
  clearTimeout(), 5000;
};

btn.addEventListener('click', calculateTip);
