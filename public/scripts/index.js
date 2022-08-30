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
        <div class="cart__row--item">
            <img src="${imageSrc}" width="50px" height="50px" />
            <p data-selectedTitle>${title}</p>
            <p>${author}</p>
            <p>${year}</p>
        </div>
        <div>${price}</div>
        <input class="cart__row--quantity" type="number" value="1" />
        <button class="cart__row--remove" type="button" data-remove-button>Remove</button>`;

    cartRow.innerHTML = cartRowContents;

    let selectedProducts = document.querySelector("[data-selected-products]");

    selectedProducts.append(cartRow);

    let remove = document.querySelectorAll("[data-remove-button");
    remove.forEach((item) => item.addEventListener("click", removeRow));
}

function removeRow(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.remove();
}
