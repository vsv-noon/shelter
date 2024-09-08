import pets from "../data/pets.js";
import { paginate } from "./modules/pagination.js";

window.addEventListener('DOMContentLoaded', () => {
  const cardsList = document.querySelector('.cards-wrapper');
  paginate(pets);
})