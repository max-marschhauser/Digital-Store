import { updatePrice } from "./updatePrice.js";

// ADD ITEM TO CART

const buttons = document.querySelectorAll("[data-add-to-cart]");
buttons.forEach((button) => {
    button.addEventListener("click", clickedAddToCart);
});

export function clickedAddToCart(event) {
    let button = event.target;
    let shopItem = button.parentElement;
    let title = shopItem.querySelector("[data-title]").innerText;
    let author = shopItem.querySelector("[data-author]").innerText;
    let year = shopItem.querySelector("[data-year]").innerText;
    let price = shopItem.querySelector("[data-price]").innerText;
    let imageSrc = shopItem.querySelector("[data-image]").src;

    addItemToCart(title, author, year, price, imageSrc);
}

export function addItemToCart(title, author, year, price, imageSrc) {
    let cartItemNames = document.querySelectorAll("[data-selected-title]");

    for (let i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText === title) {
            alert("This item is already added to the cart");
            return;
        }
    }

    let cartRow = document.createElement("div");
    cartRow.classList.add("cart__row");

    let cartRowContents = `
        <div class="cart__row--item" data-selected-items>
            <img src="${imageSrc}" width="50px" height="50px" />
            <p data-selected-title>${title}</p>
            <p>${author}</p>
            <p>${year}</p>
        </div>
        <div data-selected-price>${price}</div>
        <input class="cart__row--quantity" type="number" value="1" data-quantity/>
        <button class="cart__row--remove" type="button" data-remove-button>Remove</button>`;

    cartRow.innerHTML = cartRowContents;

    let selectedProducts = document.querySelector("[data-selected-products]");

    selectedProducts.append(cartRow);

    let remove = document.querySelectorAll("[data-remove-button");
    remove.forEach((item) => item.addEventListener("click", removeRow));

    let quantity = document.querySelectorAll("[data-quantity]");
    quantity.forEach((item) => item.addEventListener("change", changeQuantity));

    updatePrice();
}

// REMOVE ROW BUTTON

export function removeRow(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.remove();

    updatePrice();
}

// QUANTITY CHANGE

export function changeQuantity(item) {
    item.target.value;

    if (item.target.value <= 0 || isNaN(item.target.value)) {
        item.target.value = 1;
    }

    updatePrice();
}
