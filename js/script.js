// document.addEventListener('DOMContentLoaded', () => {
  // import { pets } from "../data/pets";

  // const hamburgerMenu = document.querySelector('.hamburger-button');
  // const navMenu = document.querySelector('.nav-menu-list');
  // const overlay = document.querySelector('.overlay');

  // Hamburger menu

  // window.addEventListener('resize', () => {
  //   document.body.classList.remove('lock');
  //   hamburgerMenu.classList.remove('hamburger-active');
  //   navMenu.classList.remove('nav-menu-active');
  //   overlay.classList.remove('overlay-on');
  // });

  // hamburgerMenu.addEventListener('click', () => {
  //   hamburgerMenu.classList.toggle('hamburger-active');
  //   navMenu.classList.toggle('nav-menu-active');
  //   document.body.classList.toggle('lock');
  //   overlay.classList.toggle('overlay-on');
  // });

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

  // document.addEventListener('click', (e) => {
  //   // console.log(e.target);
  //   if (
  //     (!navMenu.contains(e.target) && e.target !== hamburgerMenu) ||
  //     e.target.classList.contains('nav-link') ||
  //     e.target.classList.contains('nav-active')
  //   ) {
  //     document.body.classList.remove('lock');
  //     hamburgerMenu.classList.remove('hamburger-active');
  //     navMenu.classList.remove('nav-menu-active');
  //     overlay.classList.remove('overlay-on');
  //   }

  //   let target = e.target.closest('.modal-close-btn');
  //   let classes = e.target.classList;

  //   if (target || classes.contains('overlay-on')) {
  //     overlayOff();
  //   }
  // });

  // create Slides

  // const ourFriendsCard = document.querySelectorAll('.our-friends-card');
  // const closeButton = document.querySelector('.modal-close-btn');

  // let slides = [];
  // let cards = [];

  // fetch('./data/pets.json')
  //   .then((response) => response.json())
  //   .then((data) => {
  //     cards.push(...data);
  //     addCardsToHTML();
  //   });

  // function addCardsToHTML() {
  //   if (cards != null) {
  //     cardsList.innerHTML = '';
  //     cards.forEach((card) => {
  //       const newCard = createCardElement(card);
  //       cardsList.appendChild(newCard);
  //     });
  //   }
  // }

  // fetch('./data/pets.json')
  //   .then((response) => response.json())
  //   .then((data) => {
  //     slides.push(...data);
  //     addSlidesToHTML();
  //   });

  // function addSlidesToHTML() {
  //   if (slides != null) {
  //     slider.innerHTML = '';

  //     slides.forEach((card) => {
  //       const newCard = createCardElement(card);
  //       slider.appendChild(newCard);
  //     });
  //   }
  // }

  // function createCardElement(card) {
  //   let newCard = document.createElement('div');
  //   newCard.id = `${card.id}`;
  //   newCard.classList.add('slide');
  //   newCard.classList.add('our-friends-card');
  //   newCard.innerHTML = `<img class="slide-img" src="${card.img}" alt="${card.name}">
  //    <h4 class="card-title">${card.name}</h4>
  //    <button class="slide-button">Learn more</button>`;

  //   return newCard;
  // }

  // Modal

  // function createElementPopup(currentName) {
  //   // let thisCard = cards.filter((value) => value.id == currentId)[0];
  //   let thisCard = slides.filter((value) => value.name == currentName)[0];

  //   const modalCard = document.createElement('div');

  //   modalCard.classList.add('modal');
  //   modalCard.innerHTML = `
  //   <button class="modal-close-btn">
  //     <img src="./assets/icons/close-btn.svg" alt="close-button">
  //   </button>
  //   <img class="modal-img" src="${thisCard.img}" alt="">
  //   <div class="modal-info">
  //     <h3 class="modal-title">${thisCard.name}</h3>
  //     <h4 class="modal-subtitle">${thisCard.type} - ${thisCard.breed}</h4>
  //     <p class="modal-description">${thisCard.description}</p>
  //     <ul class="modal-ul">
  //       <li><span>Age:</span> ${thisCard.age}</li>
  //       <li><span>Inoculations:</span> ${thisCard.inoculations}</li>
  //       <li><span>Diseases:</span> ${thisCard.diseases}</li>
  //       <li><span>Parasites:</span> ${thisCard.parasites}</li>
  //     </ul>
  //   </div>  `;

  //   document.body.appendChild(modalCard);
  // }

  // (function showPopup() {
  //   document.addEventListener('click', (e) => {
  //     let target = e.target.closest('.slide');

  //     if (target) {
  //       overlayOn();
  //       // createElementPopup(target.id);
  //       createElementPopup(target.children[1].textContent);
  //       // console.log(target.children[1].textContent);
  //     }
  //   });
  // })();

  // Slider

  // const wrapper = document.querySelector('.wrapper-our-friends-slider');
  // const slider = document.querySelector('.slider-wrapper');
  // const arrowButtons = document.querySelectorAll('.arrow-button');
  // // const firstSlideWidth = slider.querySelector('.slide').offsetWidth;
  // const firstSlideWidth = 270 + 90;
  // const sliderChildren = [...slider.children];

  // let cardPerView = Math.round(slider.offsetWidth - firstSlideWidth);

  // arrowButtons.forEach((btn) => {
  //   btn.addEventListener('click', (e) => {
  //     e.preventDefault();
  //     if (document.querySelector('.slider-wrapper').children.length <= 8) {
  //       slides.reverse().forEach((card) => {
  //         const newCard = createCardElement(card);
  //         slider.prepend(newCard);
  //       });
  //       slides.reverse().forEach((card) => {
  //         const newCard = createCardElement(card);
  //         slider.appendChild(newCard);
  //       });
  //     }
  //     // console.log(document.querySelector('.slider-wrapper').children.length);

  //     if (document.body.clientWidth > 1275) {
  //       slider.scrollLeft +=
  //         btn.id === 'left'
  //           ? -firstSlideWidth * 3
  //           : firstSlideWidth * 3;
  //     } else if (document.body.clientWidth > 767) {
  //       slider.scrollLeft +=
  //         btn.id === 'left'
  //           ? -firstSlideWidth * 2
  //           : firstSlideWidth * 2;
  //     } else {
  //       slider.scrollLeft +=
  //         btn.id === 'left' ? -firstSlideWidth : firstSlideWidth;
  //     }
  //   });
  // });

  // const infinityScroll = () => {
  //   if (slider.scrollLeft === 0) {
  //     slider.classList.add('no-transition');
  //     slider.scrollLeft = slider.scrollWidth - (6 * slider.offsetWidth);
  //     slider.classList.remove('no-transition');
  //   } else if (
  //     Math.ceil(slider.scrollLeft) ===
  //     slider.scrollWidth - slider.offsetWidth
  //   ) {
  //     slider.classList.add('no-transition');
  //     slider.scrollLeft = slider.offsetWidth * 2.5;
  //     slider.classList.remove('no-transition');
  //   }
  // };

  // slider.addEventListener('scroll', infinityScroll);
// });
