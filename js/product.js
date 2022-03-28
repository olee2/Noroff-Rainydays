import { jackets } from "./jackets.js"
import { productHTML, cartProductHTML, cartSummaryHTML } from "./create-html.js";
import { counter } from "./item-counter.js";
import { addEvent, showCart, animation } from "./cart.js";


const name = new URLSearchParams(document.location.search).get("name");
const container = document.querySelector(".container");
const jacket = jackets.find(j => j.name === name);
const cart = document.querySelector(".cart-products");
const cartSummary = document.querySelector(".summary");
const numItems = document.querySelector(".num-items");

productHTML(container, jacket);

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
    window.localStorage.setItem(`${jacket.name}`, JSON.stringify({number: 1, color: `${color}`, size: `${size}`, price: jacket.price}))
    cart.innerHTML = cartProductHTML();
    cartSummary.innerHTML = cartSummaryHTML();
    animation()
    count < 1 ? showCart() : undefined;
    numItems.innerHTML = counter();
    addEvent();
    
}
