const barMenu = document.querySelector('.bar-menu');
const popUp = document.querySelector('.pop-up');
const close = document.querySelector('.close');
const menu = document.querySelector('.menu');

barMenu.addEventListener('click', () => {
  popUp.classList.toggle('hidden');
});

close.addEventListener('click', () => {
  popUp.classList.toggle('hidden');
});
