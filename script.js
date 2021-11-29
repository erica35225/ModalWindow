'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);
// if close button is pressed than hide the overlay and modal window
btnCloseModal.addEventListener('click', closeModal);
// if overlay is clicked than hide the overlay and modal window
overlay.addEventListener('click', closeModal);
// if Escape key is pressed than hide the overlay and modal window
document.addEventListener('keydown', function (e) {
    console.log(e)
    if (e.key === 'Escape' && !overlay.classList.contains('hidden')) {
        modal.classList.add('hidden')
        overlay.classList.add('hidden')
    }
})