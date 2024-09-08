const paginate = (pets) => {
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

  let petsCount = 7;
  let currentPage = 1;

  const productContainer = document.querySelector('.tabs-wrapper');
  const pagination = document.querySelector('.tabs-pagination');
  const btnPrevPagination = document.querySelector('.btn-left');
  const btnNextPagination = document.querySelector('.btn-right');

  const renderPetsList = (pets, container, numberOfPets, page) => {
    productContainer.innerHTML = '';

    const firstPetIndex = numberOfPets * page - numberOfPets;
    console.log('firstPetIndex: ', firstPetIndex);

    const lastPetIndex = firstPetIndex + numberOfPets;
    console.log('lastPetIndex: ', lastPetIndex);

    const petsOnPage = pets.slice(firstPetIndex, lastPetIndex);
    console.log('petsOnPage: ', petsOnPage);

    petsOnPage.forEach(({ name, img }) => {
      let newCard = document.createElement('div');
      // newCard.id = `${card.id}`;
      newCard.classList.add('slide');
      newCard.classList.add('our-friends-card');
      newCard.innerHTML = `<img class="slide-img" src="${img}" alt="${name}">
     <h4 class="card-title">${name}</h4>
     <button class="slide-button">Learn more</button>`;
      container.append(newCard);
    });
  };

  renderPetsList(pets, productContainer, petsCount, currentPage);
};

export { paginate };
