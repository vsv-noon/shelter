const ourFriendsCard = document.querySelectorAll('.our-friends-card');
const closeButton = document.querySelector('.modal-close-btn');

let slides = [];

fetch('./data/pets.json')
  .then((response) => response.json())
  .then((data) => {
    slides.push(...data);
    addSlidesToHTML();
  });

function addSlidesToHTML() {
  if (slides != null) {
    slider.innerHTML = '';

    slides.forEach((card) => {
      const newCard = createCardElement(card);
      slider.appendChild(newCard);
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

const wrapper = document.querySelector('.wrapper-our-friends-slider');
const slider = document.querySelector('.slider-wrapper');
const arrowButtons = document.querySelectorAll('.arrow-button');
// const firstSlideWidth = slider.querySelector('.slide').offsetWidth;
const firstSlideWidth = 270 + 90;
const sliderChildren = [...slider.children];

let cardPerView = Math.round(slider.offsetWidth - firstSlideWidth);

arrowButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (document.querySelector('.slider-wrapper').children.length <= 8) {
      slides.reverse().forEach((card) => {
        const newCard = createCardElement(card);
        slider.prepend(newCard);
      });
      slides.reverse().forEach((card) => {
        const newCard = createCardElement(card);
        slider.appendChild(newCard);
      });
    }
    // console.log(document.querySelector('.slider-wrapper').children.length);

    if (document.body.clientWidth > 1275) {
      slider.scrollLeft +=
        btn.id === 'left' ? -firstSlideWidth * 3 : firstSlideWidth * 3;
    } else if (document.body.clientWidth > 767) {
      slider.scrollLeft +=
        btn.id === 'left' ? -firstSlideWidth * 2 : firstSlideWidth * 2;
    } else {
      slider.scrollLeft +=
        btn.id === 'left' ? -firstSlideWidth : firstSlideWidth;
    }
  });
});

const infinityScroll = () => {
  if (slider.scrollLeft === 0) {
    slider.classList.add('no-transition');
    slider.scrollLeft = slider.scrollWidth - 6 * slider.offsetWidth;
    slider.classList.remove('no-transition');
  } else if (
    Math.ceil(slider.scrollLeft) ===
    slider.scrollWidth - slider.offsetWidth
  ) {
    slider.classList.add('no-transition');
    slider.scrollLeft = slider.offsetWidth * 2.5;
    slider.classList.remove('no-transition');
  }
};

slider.addEventListener('scroll', infinityScroll);

export { slider };
