import { loadCollection } from "../load-collection.js";
import { errorMessage } from "../error-message.js";

const url = `https://oae.one/jackets/wp-json/wc/v3/products/?featured=true&`
const jacketContainer = document.querySelector(".home-grid");

loadCollection(url, jacketContainer).catch((error) => {
    jacketContainer.innerHTML += errorMessage(error);
})
