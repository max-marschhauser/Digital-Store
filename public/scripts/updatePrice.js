// UPDATE PRICE

export function updatePrice() {
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

    if (total === "0€") {
        total = "0.00€";
    }

    let totalPrice = document.querySelector("[data-total-price]");
    totalPrice.innerText = total;
}
