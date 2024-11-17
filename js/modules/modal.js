import pets from '../../data/pets.js';

function createElementPopup(currentName) {
  // let thisCard = cards.filter((value) => value.id == currentId)[0];
  let thisCard = pets.filter((value) => value.name == currentName)[0];

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

function showPopup() {
  document.addEventListener('click', (e) => {
    let target = e.target.closest('.slide');

    if (target) {
      // overlayOn();
      const overlayOn = document.createElement('div');
      overlayOn.classList.add('overlay-on');
      document.body.appendChild(overlayOn);
      document.body.style.overflow = 'hidden';
      // createElementPopup(target.id);
      createElementPopup(target.children[1].textContent);
      console.log(target.children[1].textContent);
    }
  });
}

export { showPopup };
