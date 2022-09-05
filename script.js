window.onload = () => {
  const barMenu = document.querySelector('.bar-menu');
  const popUp = document.querySelector('.pop-up');
  const close = document.querySelector('.close');
  const menu = document.querySelector('.menu');

  barMenu.addEventListener('click', () => {
    popUp.classList.remove('hidden');
  });

  close.addEventListener('click', () => {
    popUp.classList.remove('hidden');
  });

  menu.addEventListener('click', () => {
    popUp.classList.add('hidden');
  });
};