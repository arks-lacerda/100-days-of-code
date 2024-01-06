// variables
const modal = document.querySelector('.modal'),
  btn = document.querySelector('.btn'),
  close = document.querySelector('.close');

btn.addEventListener('click', openModal);
close.addEventListener('click', closeModal);
modal.addEventListener('click', closeModal);

// Open modal

function openModal(e) {
  e.preventDefault();
  modal.style.display = 'block';
}

// Close modal
function closeModal(e) {
  e.preventDefault();
  modal.style.display = 'none';
}
