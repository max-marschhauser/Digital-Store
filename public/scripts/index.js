// ADD ITEM TO CART

const buttons = document.querySelectorAll("[data-addToCart]");

buttons.forEach((button) => {
    button.addEventListener("click", clickedAddToCart);
});

function clickedAddToCart(event) {
    let button = event.target;
    let shopItem = button.parentElement;
    let title = shopItem.querySelector("[data-title]").innerText;
    let author = shopItem.querySelector("[data-author]").innerText;
    let year = shopItem.querySelector("[data-year]").innerText;
    let price = shopItem.querySelector("[data-price]").innerText;
    let imageSrc = shopItem.querySelector("[data-image]").src;

    addItemToCart(title, author, year, price, imageSrc);
}

function addItemToCart(title, author, year, price, imageSrc) {
    let cartItemNames = document.querySelectorAll("[data-selectedTitle]");

    for (let i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText === title) {
            alert("This item is already added to the cart");
            return;
        }
    }

    let cartRow = document.createElement("div");
    cartRow.classList.add("cart__row");

    let cartRowContents = `
        <div class="cart__row--item" data-selectedItems>
            <img src="${imageSrc}" width="50px" height="50px" />
            <p data-selectedTitle>${title}</p>
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

function removeRow(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.remove();

    updatePrice();
}

// QUANTITY CHANGE

function changeQuantity(item) {
    item.target.value;

    if (item.target.value <= 0 || isNaN(item.target.value)) {
        item.target.value = 1;
    }

    updatePrice();
}

// UPDATE PRICE

function updatePrice() {
    let selectedItemsPrices = document.querySelectorAll("[data-selected-price]");

    let total = 0;
    let currentPrice = 0;

    for (let i = 0; i < selectedItemsPrices.length; i++) {
        currentPrice = Number(selectedItemsPrices[i].innerHTML.slice(0, -1));

        let selectedRow = selectedItemsPrices[i].parentElement;
        let quantity = selectedRow.querySelector("[data-quantity]");

        total += currentPrice * quantity.value;
        total = Number(total.toFixed(2));
    }

    total += "€";

    let totalPrice = document.querySelector("[data-total-price]");
    totalPrice.innerText = total;
}

// PURCHASE BUTTON

let purchaseButton = document.querySelector("[data-purchase-button]");
purchaseButton.addEventListener("click", purchaseClicked);

function purchaseClicked() {
    alert("Thank you for your purchase");

    let selectedItems = document.querySelectorAll("[data-selectedItems]");
    selectedItems.forEach(purchaseItems);

    function purchaseItems(item) {
        item.parentElement.remove();
    }

    updatePrice();
}
