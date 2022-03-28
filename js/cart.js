import { cartProductHTML, cartSummaryHTML } from "./create-html.js";
import { deleteItem } from "./delete.js";
import { counter } from "./item-counter.js";

const productContainer = document.querySelector(".cart-products");
const summaryContainer = document.querySelector(".summary");
const numItems = document.querySelector(".num-items")

productContainer.innerHTML = cartProductHTML();
summaryContainer.innerHTML = cartSummaryHTML();
numItems.innerHTML = counter();

export const addEvent = () => {
    const deleteX = document.querySelectorAll(".delete");
    deleteX.forEach(d => {
        d.addEventListener("click", function(){
            deleteItem(d.id)
            numItems.innerHTML = counter();
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

export const animation = () => {
    const cart = document.querySelector("#shopping_cart-24px");
    const num = document.querySelector(".num-items");
    num.classList.add("num-animation")
    cart.classList.add("cart-animation");

}


addEvent();
