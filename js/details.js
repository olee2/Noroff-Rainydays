const form = document.querySelector("form");
const first = document.querySelector("#first");
const last = document.querySelector("#last");
const email = document.querySelector("#email")
const adress = document.querySelector("#adress");
const zip = document.querySelector("#postal");
const city = document.querySelector("#city")

form.onsubmit =  (event) => {
    event.preventDefault();
    location.assign(`summary.html?email=${email.value.trim()}&first=${first.value.trim()}&last=${last.value.trim()}&adress=${adress.value.trim()}&zip=${zip.value.trim()}&city=${city.value.trim()}`);
}