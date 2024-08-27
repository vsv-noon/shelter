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
  // console.log(e.target);
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
     addSlidesToHTML();
  });

function addSlidesToHTML() {
  let listCardsHTML = document.querySelector('.slider-wrapper');

  if (cards != null) {
    cards.forEach((card) => {
      let newCard = document.createElement('div');
      newCard.id = `${card.id}`
      newCard.classList.add('slide');
      newCard.classList.add('our-friends-card');
      newCard.innerHTML = `<img class="slide-img" src="${card.img}" alt="${card.name}">
         <h4 class="card-title">${card.name}</h4>
         <button class="slide-button">Learn more</button>`;
      listCardsHTML.appendChild(newCard);
    });
  }
}

function createElementPopup(currentId) {
  let thisCard = cards.filter(value => value.id == currentId)[0];

  const modalCard = document.createElement('div');

  modalCard.classList.add('modal');
  modalCard.innerHTML = `
    <button class="modal-close-btn">
      <img src="./assets/icons/close-btn.svg" alt="close-button">
    </button>
    <img class="modal-img" src="${thisCard.img}" alt="">
    <div class="modal-info">
      <h3 class="modal-title">${thisCard.name}</h3>
      <h4 class="modal-subtitle">${thisCard.type} - ${thisCard.breed}</h4>
      <p class="modal-description">${thisCard.description}</p>
      <ul class="modal-ul">
        <li><span>Age:</span> ${thisCard.age}</li>
        <li><span>Inoculations:</span> ${thisCard.inoculations}</li>
        <li><span>Diseases:</span> ${thisCard.diseases}</li>
        <li><span>Parasites:</span> ${thisCard.parasites}</li>
      </ul>
    </div>  `;

  document.body.appendChild(modalCard);
}

// console.log(ourFriendsCard)

// ourFriendsCard.forEach((el) => {
//   el.addEventListener('click', () => {
//     overlayOn();
//     createElementPopup();
//   });
// });

(function showPopup() {

  document.addEventListener('click', (e) => {
    let target = e.target.closest('.slide');

    if (target) {
      // e.preventDefault();
      overlayOn();
      createElementPopup(target.id);
      // console.log(target.id);
    }
  })
})()

