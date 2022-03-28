const hamburger = document.querySelector(".hamburger");
const items = document.querySelector(".ham-items");
const cart = document.querySelector(".shopping-cart");
const cartBTN = document.querySelector("#shopping_cart-24px");


cartBTN.onclick = () => {
    cart.classList.toggle("show");
}

hamburger.onclick = () => {
    items.classList.toggle("hidden")
}

