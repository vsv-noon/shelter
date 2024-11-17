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

let arr = [
  ...shuffle(pets),
  ...shuffle(pets),
  ...shuffle(pets),
  ...shuffle(pets),
  ...shuffle(pets),
  ...shuffle(pets),
]

function shuffle(pets) {
  let newArr = [...pets];
  for (let i = newArr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

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
      document.querySelector(
        '.btn-current-item h4'
      ).textContent = `${currentPage}`;
    } else {
      currentPage--;
      document.querySelector(
        '.btn-current-item h4'
      ).textContent = `${currentPage}`;
    }

    if (event.target.closest('.btn-right-right')) {
      if (document.body.clientWidth > 1000) {
        currentPage = 6;
        document.querySelector(
          '.btn-current-item h4'
        ).textContent = `${currentPage}`;
      } else if (document.body.clientWidth > 600) {
        currentPage = 8;
        document.querySelector(
          '.btn-current-item h4'
        ).textContent = `${currentPage}`;
      } else {
        currentPage = 16;
        document.querySelector(
          '.btn-current-item h4'
        ).textContent = `${currentPage}`;
      }
    }

    if (event.target.closest('.btn-left-left')) {
      currentPage = 1;
      document.querySelector(
        '.btn-current-item h4'
      ).textContent = `${currentPage}`;
    }

    // window.addEventListener('resize', () => {
    //   if (document.body.clientWidth > 1000 && currentPage < 6) {
    //     btnNextPagination.classList.remove('disabled');
    //     btnEndPagination.classList.remove('disabled');

    //   } else if (document.body.clientWidth > 600 && currentPage < 8) {
    //     btnNextPagination.classList.remove('disabled');
    //     btnEndPagination.classList.remove('disabled');

    //   } else {
    //     currentPage = 16;

    //   }
    // })

    if (currentPage > 1) {
      btnPrevPagination.classList.remove('disabled');
      btnStartPagination.classList.remove('disabled');
    }

    if (currentPage === 1) {
      btnPrevPagination.classList.add('disabled');
      btnStartPagination.classList.add('disabled');
    }

    if (document.body.clientWidth > 1000) {
      if (currentPage == 6) {
        btnNextPagination.classList.add('disabled');
        btnEndPagination.classList.add('disabled');
      } else {
        btnNextPagination.classList.remove('disabled');
        btnEndPagination.classList.remove('disabled');
      }
    } else if (document.body.clientWidth > 600) {
      if (currentPage == 8) {
        btnNextPagination.classList.add('disabled');
        btnEndPagination.classList.add('disabled');
      } else {
        btnNextPagination.classList.remove('disabled');
        btnEndPagination.classList.remove('disabled');
      }
    } else {
      if (currentPage == 16) {
        btnNextPagination.classList.add('disabled');
        btnEndPagination.classList.add('disabled');
      } else {
        btnNextPagination.classList.remove('disabled');
        btnEndPagination.classList.remove('disabled');
      }
    }

    // if (currentPage > 6) {
    //   currentPage = 1;
    //   document.querySelector('.btn-current-item h4').textContent = `${currentPage}`;
    // } else if (currentPage === 1) {
    //   // currentPage = liElements.length;
    // }

    renderPetsList(arr, petsList, petsCount, currentPage);
  };

  btnNextPagination.addEventListener('click', handlePagination);
  btnPrevPagination.addEventListener('click', handlePagination);
  btnStartPagination.addEventListener('click', handlePagination);
  btnEndPagination.addEventListener('click', handlePagination);
};

export { paginate };
