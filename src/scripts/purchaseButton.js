import { updatePrice } from "./updatePrice.js";

// PURCHASE BUTTON

let purchaseButton = document.querySelector("[data-purchase-button]");
purchaseButton.addEventListener("click", purchaseClicked);

export function purchaseClicked() {
    let price = document.querySelector("[data-total-price]");

    if (price.innerHTML === "0.00€") {
        alert("Please select products to purchase.");
    } else {
        alert("Thank you for your purchase.");
    }

    let selectedItems = document.querySelectorAll("[data-selected-items]");
    selectedItems.forEach(purchaseItems);

    function purchaseItems(item) {
        item.parentElement.remove();
    }

    updatePrice();
}
