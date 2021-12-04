'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const botCloseModal = document.querySelector('.close-modal');
const botShowModal = document.querySelectorAll('.show-modal');

const showModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < botShowModal.length; i++)
  botShowModal[i].addEventListener('click', showModal);

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

botCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
