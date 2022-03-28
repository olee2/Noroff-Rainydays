import { jackets } from "./jackets.js"
import { collectionHTML } from "./create-html.js";

const jacketContainer = document.querySelector(".home-grid");

jacketContainer.innerHTML = collectionHTML(jackets, 4);


