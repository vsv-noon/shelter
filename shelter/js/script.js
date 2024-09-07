document.addEventListener('DOMContentLoaded', () => {
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

  // create Slides & Tabs

  const ourFriendsCard = document.querySelectorAll('.our-friends-card');
  const closeButton = document.querySelector('.modal-close-btn');

  let slides = [];
  let cards = [];

  fetch('./data/pets.json')
    .then((response) => response.json())
    .then((data) => {
      slides.push(...data);
      addSlidesToHTML();
    });

    fetch('./data/pets.json')
    .then((response) => response.json())
    .then((data) => {
      cards.push(...data);
      addCardsToHTML();
    });

  const sliderTrack = document.querySelector('.slider-track');
  const listCardsHTML = document.querySelector('.cards-wrapper');

  function addSlidesToHTML() {
    if (slides != null) {
      sliderTrack.innerHTML = '';
      slides.forEach((card) => {
        const newCard = createCardElement(card);
        sliderTrack.appendChild(newCard);
      });
    }
  }

  function addCardsToHTML() {
    if (cards != null) {
      // listCardsHTML.innerHTML = '';
      cards.forEach((card) => {
        const newCard = createCardElement(card);
        // listCardsHTML.appendChild(newCard);
      });
    }
  }

  function createCardElement(card) {
    let newCard = document.createElement('div');
    newCard.id = `${card.id}`;
    newCard.classList.add('slide');
    newCard.classList.add('our-friends-card');
    newCard.innerHTML = `<img class="slide-img" src="${card.img}" alt="${card.name}">
     <h4 class="card-title">${card.name}</h4>
     <button class="slide-button">Learn more</button>`;

    return newCard;
  }

  // Modal

  function createElementPopup(currentId) {
    let thisCard = cards.filter((value) => value.id == currentId)[0];
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

  (function showPopup() {
    document.addEventListener('click', (e) => {
      let target = e.target.closest('.slide');

      if (target) {
        overlayOn();
        createElementPopup(target.id);
      }
    });
  })();

  // Slider

  const wrapper = document.querySelector('.wrapper-our-friends-slider');
  const slider = document.querySelector('.slider-wrapper');
  const arrowButtons = document.querySelectorAll('.arrow-button');
  const firstSlideWidth = 270 + 90;
  const sliderTrackChildren = [...sliderTrack.children];

  console.log(sliderTrack.children);

  let cardPerView = Math.round(slider.offsetWidth - firstSlideWidth);
  slides.slice(-cardPerView).reverse().forEach(card => {
    addSlidesToHTML(card);
  })
  console.log(cardPerView)

  arrowButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      slider.scrollLeft += btn.id === 'left' ? -firstSlideWidth * 3 : firstSlideWidth * 3;
    })
  })
});
