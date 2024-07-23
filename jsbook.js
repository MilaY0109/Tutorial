const refs = {
  openModalBtn: document.querySelector('.bestsellers-area'),
  openModal: document.querySelector('.category_books_container'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  modalContainer: document.querySelector('.modal'),
};

refs.openModalBtn.addEventListener('click', toggleModalOpen);
refs.closeModalBtn.addEventListener('click', toggleModal);
window.addEventListener('keydown', handleKeyDown);
refs.modal.addEventListener('click', handleClickOutsideModal);

function toggleModalOpen(event) {
  if (event.target.classList.contains('bestsellers-book-cover')) {
    toggleModal();
    document.body.style.overflow = refs.modal.classList.contains('is-hidden') ? 'auto' : 'hidden';
  }
}

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
  document.body.style.overflow = refs.modal.classList.contains('is-hidden') ? 'auto' : 'hidden';
}

function handleKeyDown(event) {
  if (event.key === 'Escape') {
    refs.modal.classList.add('is-hidden');
    document.body.style.overflow = 'auto';
  }
}

function handleClickOutsideModal(event) {
  if (event.target === refs.modal) {
    refs.modal.classList.add('is-hidden');
    document.body.style.overflow = 'auto';
  }
}

if (!refs.modal.classList.contains('is-hidden')) {
  document.body.style.overflow = 'auto';
}
