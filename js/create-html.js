export const collectionHTML = (arr, num) => {
    if(num) arr = arr.slice(0, num);
    return arr.map(j => `<a href="product.html?id=${j.id}" class="product">
                            <img src="${j.image}" alt="${j.name}">
                            <div class="flex column product-details">
                                <h2>${j.name} Jacket</h2>
                                <p>NOK ${j.price},-</p>
                            </div>
                        </a>`).join("")
}

export const productHTML = (container, jacket) => {
    container.innerHTML = ` 
    <div class="product-img">
                            <img src="${jacket.images[0].src}" alt="${jacket.name} Jacket">
                        </div>
                        <div class="flex column justify-between gap20 product-container">
                            <div class="flex justify-between align-center">
                                <h1 class="product-name">${jacket.name} Jacket</h1>
                                <p class="product-price">NOK ${jacket.price},-</p>
                            </div>
                            <form class="product-form flex column justify-between flex1">
                            <div class="product-color flex align-center gap20">
                                    <p class="radio-label">Color</p>
                                    <div class="flex flex1 gap20">
                                        <input type="radio" name="color" value="Red" id="red" checked>
                                        <label for="red">Red</label>
                                        <input type="radio" name="color" value="Green" id="green">
                                        <label for="green">Green</label>
                                        <input type="radio" name="color" value="Blue" id="blue">
                                        <label for="blue">Blue</label>
                                    </div>
                                </div>
                                <div class="product-size flex align-center gap20">
                                    <p class="radio-label label">Size</p>
                                    <div class="flex flex1 gap20">
                                        <input type="radio" name="size" value="Small" id="small">
                                        <label for="small">Small</label>
                                        <input type="radio" name="size" value="Medium" id="medium">
                                        <label for="medium">Medium</label>
                                        <input type="radio" name="size" value="Large" id="large">
                                        <label for="large">Large</label>
                                    </div>
                                </div>
                                <div class=".btn-container">
                                    <button class="cta-button">Select Size</button>
                                </div>
                            </form>
                            <div class="product-info">
                                ${jacket.description}
                            </div>
                        </div>`
}

export const cartProductHTML = () => {
    let html = [];
    Object.keys(localStorage).forEach(j => {

        const details = JSON.parse(window.localStorage.getItem(j));
        html.push(`<div class="cart-item">
                        <a id="${j}" class="delete link">&#10006;</a>
                        <div class="flex padding-15 gap20">
                            <img src="images/jackets/${j}.png" alt="${j} Jacket">
                            <div class="flex column justify-between flex1">
                                <h3>${j} Jacket</h3>
                                <div class="flex justify-between">
                                    <p class="product-size">${details.size}</p>
                                    <p class="product-color">${details.color}</p>
                                </div>
                                <p class="price">$${details.price}</p>
                                <input class="number" type="number" name="number1" id="number1" min="1" value="1">
                            </div>
                        </div>
                        
                    </div>
                    `)
    })
    return html.join("");
}

export const cartSummaryHTML = () => {
    let jackets = [];
    Object.keys(localStorage).forEach(j => {
        if(j !== "customer") jackets.push(JSON.parse(window.localStorage.getItem(j)))
    })
    try {
        return `<div class="summary">
                <div class="flex justify-between">
                    <p class="sum">Sum, ${jackets.length} jacket(s)</p>
                    <p class="price1">$${jackets.map(j => j.price).reduce((a, b) => a + b).toFixed(2)}</p>
                </div>
                <hr>
                <div class="flex justify-between">
                    <p class="total">Total</p>
                    <p class="price2">$${jackets.map(j => j.price).reduce((a, b) => a + b).toFixed(2)}</p>
                </div>
                <a class="cta-button" href="details.html">Checkout</a>
            </div>`
    } catch (error) {
        return `<div class="flex column align-center">
                    <p>The cart is empty</p>
                    <a class="cta-button" href="collection.html">Get Started!</a>
                </div>
        `
    }
}

export const lastSummaryHTML = () => {
    let jackets = [];
    Object.keys(localStorage).forEach(j => {
        if(j !== "customer") jackets.push(JSON.parse(window.localStorage.getItem(j)))
    })
    try {
        return  `<p class="sum">Sum, ${jackets.length} products</p>
                <p id="ship">Shipping</p>
                <p class="price3">$&nbsp;&nbsp;${10}</p>
                <hr>
                <p class="total">Total</p>
                <p class="price1">$${jackets.map(j => j.price).reduce((a, b) => a + b).toFixed(2)}</p>
                <p class="price2">$${(jackets.map(j => j.price).reduce((a, b) => a + b) + 10).toFixed(2)}</p>
                `
    } catch (error) {
        return error;
    }
}

export const createShippingHTML = (first, last, adress, zip, city) => {
    return `
            <p>${first + " " + last}</p>
            <p>${adress}</p>
            <p>${zip + " " + city}</p>
            `
}