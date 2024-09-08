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

  let arr = [...pets, ...pets.reverse(), ...pets.reverse(), ...pets.reverse(), ...pets.reverse(), ...pets.reverse()];

  console.log(arr);

  let petsCount = 0;
  let currentPage = 1;

  if (document.body.clientWidth > 1275) {
    petsCount = 8;
  } else if (document.body.clientWidth > 767) {
    petsCount = 6;
  } else {
    petsCount = 3;
  }

  const petsList = document.querySelector('.tabs-wrapper');
  const pagination = document.querySelector('.tabs-pagination');
  const btnPrevPagination = document.querySelector('.btn-left');
  const btnNextPagination = document.querySelector('.btn-right');
  const btnStartPagination = document.querySelector('.btn-left-left');
  const btnEndPagination = document.querySelector('.btn-right-right');

  const renderPetsList = (arr, container, numberOfPets, page) => {
    container.innerHTML = '';

    const firstPetIndex = numberOfPets * page - numberOfPets;
    // console.log('firstPetIndex: ', firstPetIndex);

    const lastPetIndex = firstPetIndex + numberOfPets;
    // console.log('lastPetIndex: ', lastPetIndex);

    const petsOnPage = arr.slice(firstPetIndex, lastPetIndex);
    // console.log('petsOnPage: ', petsOnPage);

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

  renderPetsList(arr, petsList, petsCount, currentPage);

  const handlePagination = (event) => {
    if (event.target.closest('.btn-right')) {
      currentPage++;
      document.querySelector('.btn-current-item h4').textContent = `${currentPage}`;
    } else {
      currentPage--;
      document.querySelector('.btn-current-item h4').textContent = `${currentPage}`;
    }

    if (currentPage > 1) {
      btnPrevPagination.classList.remove('disabled');
      btnStartPagination.classList.remove('disabled');
    }

    if (currentPage === 1) {
      btnPrevPagination.classList.add('disabled');
      btnStartPagination.classList.add('disabled');
    }

    if (currentPage > 6) {
      currentPage = 1;
      document.querySelector('.btn-current-item h4').textContent = `${currentPage}`;
    } else if (currentPage === 1) {
      // currentPage = liElements.length;
    }

    renderPetsList(arr, petsList, petsCount, currentPage);
  }

  btnNextPagination.addEventListener('click', handlePagination);
  btnPrevPagination.addEventListener('click', handlePagination);
  btnStartPagination.addEventListener('click', handlePagination);
  btnEndPagination.addEventListener('click', handlePagination);
};

export { paginate };
