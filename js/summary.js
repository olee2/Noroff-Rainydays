import { lastSummaryHTML, createShippingHTML } from "./create-html.js";

const first = new URLSearchParams(document.location.search).get("first");
const last = new URLSearchParams(document.location.search).get("last");
const email = new URLSearchParams(document.location.search).get("email");
const adress = new URLSearchParams(document.location.search).get("adress");
const zip = new URLSearchParams(document.location.search).get("zip");
const city = new URLSearchParams(document.location.search).get("city");

const shipping = document.querySelector("#shipping");
const summary = document.querySelector(".summary-summary");
const form = document.querySelector("form");
const modal = document.querySelector(".confirmation");

summary.innerHTML = lastSummaryHTML();
shipping.innerHTML = createShippingHTML(first, last, adress, zip, city);

const confirmation = () => {

}

form.onsubmit = (event) => {
    event.preventDefault();
    modal.showModal();
    localStorage.clear();
    console.log("yooo")
}