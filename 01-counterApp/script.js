const count = document.querySelector('.count');
const subtractCount = document.querySelector('.subtract');
const resetCount = document.querySelector('.reset');
const addCount = document.querySelector('.add');

const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', (e) => {
  if (e.target.classList.contains('add')) {
    count.textContent++;
    setColor();
  }

  if (e.target.classList.contains('reset')) {
    count.textContent = 0;
    setColor();
  }

  if (e.target.classList.contains('subtract')) {
    count.textContent--;
    setColor();
  }
});

function setColor() {
  if (count.innerHTML > 0) {
    count.style.color = 'green';
  } else if (count.innerHTML < 0) {
    count.style.color = 'orangered';
  } else {
    count.style.color = '#fff';
  }
}

// addCount.addEventListener('click', () => {
//   count.textContent++;
// });

// subtractCount.addEventListener('click', () => {
//   count.textContent--;
// });

// resetCount.addEventListener('click', () => {
//   count.textContent = 0;
// });
