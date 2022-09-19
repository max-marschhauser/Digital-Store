import {} from "./displayAlbums/displayAlbums.js"; // display albums from albumList.js onto the site
import {} from "./cart/cart.js"; // placing items into cart, removing items from cart, managing price, quantity and purchase button
import {} from "./actionButtons/actionButtons.js"; // action buttons for site (filter, search, sort)
import {} from "./actionButtons/filter.js"; // filter action button
import {} from "./actionButtons/search.js"; // search action button
import {} from "./actionButtons/sort.js"; // sort action button

//COPYRIGHT DATE

const copyrightDate = document.querySelector("[data-copyright-date]");

copyrightDate.innerHTML = "&copy;" + new Date().getFullYear() + ".";

// SINGLE PAGE APP

const aboutPage = document.querySelectorAll("[data-about-page]");
const storePage = document.querySelectorAll("[data-store-page]");
const purchasePage = document.querySelectorAll("[data-purchase-page]");

const aboutButtonSpa = document.querySelector("[data-about-button-SPA]");
const storeButtonSpa = document.querySelector("[data-store-button-SPA]");
const purchaseButtonSpa = document.querySelector("[data-purchase-button-SPA]");

let x = 0; // 0 data-about-page; 1 data-store-page, 2 data-purchase-page
changePage();

aboutButtonSpa.addEventListener("click", () => {
	x = 0;
	changePage();
});
storeButtonSpa.addEventListener("click", () => {
	x = 1;
	changePage();
});
purchaseButtonSpa.addEventListener("click", () => {
	x = 2;
	changePage();
});

function changePage() {
	if (x === 0) {
		aboutPage.forEach((element) => {
			element.classList.remove("hide-page");
		});
	} else {
		aboutPage.forEach((element) => {
			element.classList.add("hide-page");
		});
	}

	if (x === 1) {
		storePage.forEach((element) => {
			element.classList.remove("hide-page");
		});
	} else {
		storePage.forEach((element) => {
			element.classList.add("hide-page");
		});
	}

	if (x === 2) {
		purchasePage.forEach((element) => {
			element.classList.remove("hide-page");
		});
	} else {
		purchasePage.forEach((element) => {
			element.classList.add("hide-page");
		});
	}
}
