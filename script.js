const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
menu.addEventListener('click', () => {
  menu.classList.toggle('open');
  nav.classList.toggle('open');
});
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('open');
  nav.classList.remove('open');
}));
