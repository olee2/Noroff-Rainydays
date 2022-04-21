import { loadCollection } from "../load-collection.js";

const url = `https://oae.one/jackets/wp-json/wc/v3/products/?featured=true&`
const jacketContainer = document.querySelector(".home-grid");

loadCollection(url, jacketContainer);
