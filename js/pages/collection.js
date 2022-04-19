import { fetchData } from "../fetch-data.js"
import { collectionData } from "../collection-data.js";
import { collectionHTML } from "../create-html.js";
import { category } from "../category.js";

const jacketContainer = document.querySelector(".collection-container");
const categories = document.querySelectorAll(".category");

const setup = async (cat='all') => {
    const data = await fetchData("https://oae.one/jackets/wp-json/wc/v3/products?");
    const filtered = await collectionData(data, cat);
    jacketContainer.innerHTML = collectionHTML(filtered);
}

categories.forEach(c => c.addEventListener("click", function(){
    setup(this.id);
    categories.forEach(c => c.classList.remove("choosen"))
    c.classList.add("choosen")
}))

setup();


