const hamburger = document.querySelector(".hamburger");
const items = document.querySelector(".ham-items");
const cart = document.querySelector(".shopping-cart");
const cartBTN = document.querySelectorAll("#shopping_cart-24px");

cartBTN.forEach(c => {
    c.addEventListener("click", () => {
        cart.classList.toggle("show");
        items.classList.remove("hidden")
    })
});

hamburger.onclick = () => {
    items.classList.toggle("hidden")
    cart.classList.remove("show");
}
