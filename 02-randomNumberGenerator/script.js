const number = document.querySelector('.number');
const btnGenerate = document.querySelector('.btn-generate');

const generateNumber = () => {
  // Generate number btn 1 and 100
  const randomNumber = Math.floor(Math.random() * 100 + 1);
  number.innerHTML = randomNumber;
};

btnGenerate.addEventListener('click', generateNumber);

generateNumber();
