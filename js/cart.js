import { cartProductHTML, cartSummaryHTML } from "./create-html.js";
import { deleteItem } from "./delete.js";
import { counter } from "./item-counter.js";

const productContainer = document.querySelector(".cart-products");
const summaryContainer = document.querySelector(".summary");
const numItems = document.querySelectorAll(".num-items")

productContainer.innerHTML = cartProductHTML();
summaryContainer.innerHTML = cartSummaryHTML();
numItems.forEach(i => i.innerHTML = counter());

export const addEvent = () => {
    const deleteX = document.querySelectorAll(".delete");
    deleteX.forEach(d => {
        d.addEventListener("click", function(){
            deleteItem(d.id)
            numItems.forEach(i => i.innerHTML = counter());
            productContainer.innerHTML = cartProductHTML();
            summaryContainer.innerHTML = cartSummaryHTML();
            addEvent();
        })
    })
}

export const showCart = () => {
    const cart = document.querySelector(".shopping-cart");
    cart.classList.add("show");
    setTimeout(() => {
        cart.classList.remove("show");
    }, 3000)
}


addEvent();
