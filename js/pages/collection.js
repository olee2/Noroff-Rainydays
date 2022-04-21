import { loadCollection } from "../load-collection.js";

const jacketContainer = document.querySelector(".collection-container");
const categories = document.querySelectorAll(".category");
const url = "https://oae.one/jackets/wp-json/wc/v3/products?"

loadCollection(url, jacketContainer)

categories.forEach(c => c.addEventListener("click", function(){
    loadCollection(url, jacketContainer, this.id);
    categories.forEach(c => c.classList.remove("choosen"))
    c.classList.add("choosen")
}))
