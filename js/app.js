
var openModalButton = document.querySelector('.travel-search-button'),
    modalReserv = document.querySelector('.main-form');

openModalButton.addEventListener('click', function () {
    modalReserv.classList.toggle('search-form-hidden');
});
