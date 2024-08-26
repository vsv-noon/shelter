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

const overlayOn = () => {
  const overlayOn = document.createElement('div');
  overlayOn.classList.add('overlay-on');
  document.body.appendChild(overlayOn);
  document.body.style.overflow = 'hidden';
}

const overlayOff = () => {
  document.querySelector('.modal').remove();
       document.querySelector('.overlay-on').remove();
       document.body.style.overflow = '';
}

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

     target = e.target.closest('.modal-close-btn');
     if (target) {
       overlayOff();
     }
});

// Modal

const ourFriendsCard = document.querySelectorAll('.our-friends-card');
const closeButton = document.querySelector('.modal-close-btn');

const createElementPopup = () => {
  const modalCard = document.createElement('div');
  modalCard.classList.add('modal');
  modalCard.innerHTML = `
    <button class="modal-close-btn">
      <img src="./icons/close-btn.svg" alt="close-button">
    </button>
    <img class="modal-img" src="./images/pets-jennifer.png" alt="">
    <div class="modal-info">
      <h3 class="modal-title">Jennifer</h3>
      <h4 class="modal-subtitle">Dog - Labrador</h4>
      <p class="modal-description">
        Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.
      </p>
      <ul class="modal-ul">
        <li><span>Age:</span> 2 months</li>
        <li><span>Inoculations:</span> none</li>
        <li><span>Diseases:</span> none</li>
        <li><span>Parasites:</span> none</li>
      </ul>
    </div>  `

  document.body.appendChild(modalCard);
}

ourFriendsCard.forEach((el) => {
  el.addEventListener('click', () => {
    overlayOn();
    createElementPopup();
    console.log('first')
  });

})





