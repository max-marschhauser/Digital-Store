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
    //updateCartTotal();
    console.log(title, author, year, imageSrc, price);
}

function addItemToCart(title, author, year, price, imageSrc) {
    let cartRow = document.createElement("div");
    //cartRow.classList.add("cart-row");
    let cartItems = document.getElementsByClassName("cart-items")[0];
    /*var cartItemNames = cartItems.getElementsByClassName("cart-item-title");
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert("This item is already added to the cart");
            return;
        }
    }*/
    /*var cartRowContents = `
        
    cartRow.innerHTML = cartRowContents;*/
    cartItems.append(cartRow);
    //cartRow.getElementsByClassName("btn-danger")[0].addEventListener("click", removeCartItem);
    //cartRow.getElementsByClassName("cart-quantity-input")[0].addEventListener("change", quantityChanged);
}
