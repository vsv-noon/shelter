// import { pets } from "../data/pets";

const hamburgerMenu = document.querySelector('.hamburger-button');
const navMenu = document.querySelector('.nav-menu-list');
const overlay = document.querySelector('.overlay');

// Hamburger menu

window.addEventListener('resize', () => {
  document.body.classList.remove('lock');
  hamburgerMenu.classList.remove('hamburger-active');
  navMenu.classList.remove('nav-menu-active');
  overlay.classList.remove('overlay-on');
});

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
};

const overlayOff = () => {
  document.querySelector('.modal').remove();
  document.querySelector('.overlay-on').remove();
  document.body.style.overflow = '';
};

document.addEventListener('click', (e) => {
  console.log(e.target);
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
    overlayOff();
  }
});

// Modal

const ourFriendsCard = document.querySelectorAll('.our-friends-card');
const closeButton = document.querySelector('.modal-close-btn');

let cards = null;

fetch('./data/pets.json')
  .then((response) => response.json())
  .then((data) => {
    cards = data;
    console.log(cards);
    addDataToHTML();
  });

function addDataToHTML() {
  let listCardsHTML = document.querySelector('.slider-wrapper');

  if (cards != null) {
    cards.forEach((card) => {
      let newCard = document.createElement('div');
      // let link = document.createElement('a');
      // link.href = 'index.html?id=' + card.id;
      // newCard.appendChild(link);
      // newCard.href = 'index.html?id=' + card.id;
      // newCard = document.createElement('a');
      newCard.classList.add('slide');
      newCard.classList.add('our-friends-card');
      newCard.innerHTML = `<img class="slide-img" src="${card.img}" alt="${card.name}">
         <h4 class="card-title">${card.name}</h4>
         <button class="slide-button">Learn more</button>`;
      listCardsHTML.appendChild(newCard);
    });
  }
}

function createElementPopup(card) {
  const modalCard = document.createElement('div');
  modalCard.classList.add('modal');
  modalCard.innerHTML = `
    <button class="modal-close-btn">
      <img src="./assets/icons/close-btn.svg" alt="close-button">
    </button>
    <img class="modal-img" src="./assets/images/pets-jennifer.png" alt="">
    <div class="modal-info">
      <h3 class="modal-title"></h3>
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
    </div>  `;

  document.body.appendChild(modalCard);
}

console.log(ourFriendsCard)

// ourFriendsCard.forEach((el) => {
//   el.addEventListener('click', () => {
//     overlayOn();
//     createElementPopup();
//   });
// });

document.addEventListener('click', (e) => {
  let target = e.target.closest('.slide');
  if (target) {
    e.preventDefault();
    overlayOn();
    createElementPopup();
  }
})
