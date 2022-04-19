import { collectionHTML } from "../create-html.js";
import { feturedProducts } from "../featured-products.js";
import { fetchData } from "../fetch-data.js";

const url = `https://oae.one/jackets/wp-json/wc/v3/products/?featured=true&`
const jacketContainer = document.querySelector(".home-grid");

const setup = async () => {
    const data = await fetchData(url);
    const featured = await feturedProducts(data);
    console.log(featured);
    jacketContainer.innerHTML = collectionHTML(featured);
}

setup();