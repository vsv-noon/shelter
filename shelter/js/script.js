const hamburgerMenu = document.querySelector('.hamburger-button');
const navMenu = document.querySelector('.nav-menu-list');
const overlay = document.querySelector('.overlay');

// Hamburger menu

window.addEventListener('resize', () => {
  document.body.classList.remove('lock');
  hamburgerMenu.classList.remove('hamburger-active');
  navMenu.classList.remove('nav-menu-active');
  overlay.classList.remove('overlay-on');
})

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('hamburger-active');
  navMenu.classList.toggle('nav-menu-active');
  document.body.classList.toggle('lock');
  overlay.classList.toggle('overlay-on');
});

document.addEventListener('click', (e) => {
  console.log(e.target);
  if (!navMenu.contains(e.target)
    && e.target !== hamburgerMenu
    || e.target.classList.contains('nav-link')
    || e.target.classList.contains('nav-active')) {
    document.body.classList.remove('lock');
    hamburgerMenu.classList.remove('hamburger-active');
    navMenu.classList.remove('nav-menu-active');
    overlay.classList.remove('overlay-on');
  }
});

