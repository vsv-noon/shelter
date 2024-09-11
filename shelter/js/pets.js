import pets from "../data/pets.js";
import { showPopup } from "./modules/modal.js";
import { hamburgerMenuToggle } from "./modules/hamburger.js";
import { paginate } from "./modules/pagination.js";

window.addEventListener('DOMContentLoaded', () => {
  const cardsList = document.querySelector('.cards-wrapper');
  paginate(pets);
  showPopup();
  hamburgerMenuToggle();
})