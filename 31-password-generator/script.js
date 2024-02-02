const empty = '';
const uCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbols = '!@#$%^&*=-_';

const pLength = document.getElementById('p-length');
const uppercase = document.getElementById('p-uppercase');
const lowerCase = document.getElementById('p-lowercase');
const pNumber = document.getElementById('p-number');
const pSymbols = document.getElementById('p-symbols');
const submit = document.getElementById('submit');
const password = document.getElementById('password');
const copy = document.getElementById('copy');

submit.addEventListener('click', () => {
  let initialPassword = empty;
  // Add character if an option is checked
  uppercase.checked ? (initialPassword += uCase) : '';
  lowerCase.checked ? (initialPassword += lCase) : '';
  pNumber.checked ? (initialPassword += number) : '';
  pSymbols.checked ? (initialPassword += symbols) : '';

  password.value = generatePassword(pLength.value, initialPassword);
});

function generatePassword(length, initialPassword) {
  let password = '';
  for (let i = 0; i < length; i++) {
    password += initialPassword.charAt(
      Math.floor(Math.random() * initialPassword.length)
    );
  }
  return password;
}

// Coy Function
copy.addEventListener('click', (e) => {
  e.preventDefault();
  navigator.clipboard.writeText(password.value).then(() => {
    copy.textContent = 'Copied!';
    setTimeout(() => {
      copy.textContent = 'Copy';
    }, 3000);
  });
});
