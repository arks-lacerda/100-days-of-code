// variables
const modal = document.querySelector('.modal'),
  modalContent = document.querySelector('.modal-content'),
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
function closeModal() {
  modalContent.classList.add('slide-up');
  setTimeout(() => {
    modal.style.display = 'none';
    modalContent.classList.remove('slide-up');
  }, 500);
}
