const hamburger = document.querySelector(".hamburger");
const items = document.querySelector(".ham-items");

hamburger.onclick = () => {
    items.classList.toggle("hidden")
}