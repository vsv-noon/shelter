import pets from "../data/pets.js";
import { hamburgerMenuToggle } from "./modules/hamburger.js";
import { showPopup } from "./modules/modal.js";
import { slider } from "./modules/slider.js";

window.addEventListener('DOMContentLoaded', () => {
  showPopup();
  hamburgerMenuToggle();
})