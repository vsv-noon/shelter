const hamburgerMenu = document.querySelector('.hamburger-button');
const navMenu = document.querySelector('.nav-menu-list');
const overlay = document.querySelector('.overlay');

window.addEventListener('resize', () => {
  document.body.classList.remove('lock');
  hamburgerMenu.classList.remove('hamburger-active');
  navMenu.classList.remove('nav-menu-active');
  overlay.classList.remove('overlay-on');
});

const hamburgerMenuToggle = () => {
  hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('hamburger-active');
    navMenu.classList.toggle('nav-menu-active');
    document.body.classList.toggle('lock');
    overlay.classList.toggle('overlay-on');
  });
};

// const overlayOn = () => {
//   const overlayOn = document.createElement('div');
//   overlayOn.classList.add('overlay-on');
//   document.body.appendChild(overlayOn);
//   document.body.style.overflow = 'hidden';
// };

// const overlayOff = () => {
//   document.querySelector('.modal').remove();
//   document.querySelector('.overlay-on').remove();
//   document.body.style.overflow = '';
// };

document.addEventListener('click', (e) => {
  if (
    (!navMenu.contains(e.target) && e.target !== hamburgerMenu) ||
    e.target.classList.contains('nav-link') ||
    e.target.classList.contains('nav-active')
  ) {
    document.body.classList.remove('lock');
    hamburgerMenu.classList.remove('hamburger-active');
    navMenu.classList.remove('nav-menu-active');
    overlay.classList.remove('overlay-on');
   }

  let target = e.target.closest('.modal-close-btn');
  let classes = e.target.classList;

  if (target || classes.contains('overlay-on')) {
    // overlayOff();
    document.querySelector('.modal').remove();
    document.querySelector('.overlay-on').remove();
    document.body.style.overflow = '';
  }
});

export { hamburgerMenuToggle };
