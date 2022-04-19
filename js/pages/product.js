
import { fetchData } from "../fetch-data.js";
import { productHTML, cartProductHTML, cartSummaryHTML } from "../create-html.js";
import { counter } from "../item-counter.js";
import { addEvent, showCart } from "../cart.js";

const id = new URLSearchParams(document.location.search).get("id");
const container = document.querySelector(".container");
const cart = document.querySelector(".cart-products");
const cartSummary = document.querySelector(".summary");
const numItems = document.querySelectorAll(".num-items");
const url = `https://oae.one/jackets/wp-json/wc/v3/products/${id}?`;

const productData = async () => {
    const data = await fetchData(url);
    productHTML(container, data);

    const sizeRadios = document.querySelectorAll("input[name='size']");
    const button = document.querySelector("button");

    button.disabled = true;

    for (let i = 0; i < sizeRadios.length; i++){
        sizeRadios[i].addEventListener("click", function() {
            button.disabled = false;
            button.innerHTML = "Add to Cart";
        })
    }
    const form = document.querySelector("form");

form.onsubmit = (event) => {
    event.preventDefault();
    let size = document.querySelector("input[name='size']:checked").value;
    let color = document.querySelector("input[name='color']:checked").value;
    let count = counter();
    window.localStorage.setItem(data.name, JSON.stringify({number: 1, color: color, size: size, price: Number(data.price)}))
    cart.innerHTML = cartProductHTML();
    cartSummary.innerHTML = cartSummaryHTML();
    count < 1 ? showCart() : undefined;
    numItems.forEach(i => i.innerHTML = counter());
    addEvent();
}
}

productData();


