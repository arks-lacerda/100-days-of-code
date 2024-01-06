const randomColor = document.querySelector('.color-gen');
const btnColorGen = document.querySelector('.btn-gen');

const generateColor = () => {
  const randomColorHex = Math.random().toString(16).substring(2, 8);
  document.body.style.backgroundColor = `#${randomColorHex}`;
  randomColor.innerHTML = `#${randomColorHex}`;
};

btnColorGen.addEventListener('click', generateColor);

// let color = Math.random().toString(16).substring(2, 8);
// console.log(color);

// let test = '0.23456789';
// test = test.substring(2, 8);
// console.log(test);
