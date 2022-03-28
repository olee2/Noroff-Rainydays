import { jackets } from "./jackets.js"
import { collectionHTML } from "./create-html.js";

const jacketContainer = document.querySelector(".collection-container");

jacketContainer.innerHTML = collectionHTML(jackets);

