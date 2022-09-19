// SINGLE PAGE APP

const aboutPage = document.querySelectorAll("[data-about-page]");
const storePage = document.querySelectorAll("[data-store-page]");
const cartPage = document.querySelectorAll("[data-cart-page]");

const aboutButtonSpa = document.querySelector("[data-about-button-SPA]");
const storeButtonSpa = document.querySelector("[data-store-button-SPA]");
const cartButtonSpa = document.querySelector("[data-cart-button-SPA]");

let openedPage = "about";
changePage();

aboutButtonSpa.addEventListener("click", () => {
	openedPage = "about";
	changePage();
});
storeButtonSpa.addEventListener("click", () => {
	openedPage = "store";
	changePage();
});
cartButtonSpa.addEventListener("click", () => {
	openedPage = "cart";
	changePage();
});

function changePage() {
	if (openedPage === "about") {
		aboutPage.forEach((element) => {
			element.classList.remove("hide-page");
		});
	} else {
		aboutPage.forEach((element) => {
			element.classList.add("hide-page");
		});
	}

	if (openedPage === "store") {
		storePage.forEach((element) => {
			element.classList.remove("hide-page");
		});
	} else {
		storePage.forEach((element) => {
			element.classList.add("hide-page");
		});
	}

	if (openedPage === "cart") {
		cartPage.forEach((element) => {
			element.classList.remove("hide-page");
		});
	} else {
		cartPage.forEach((element) => {
			element.classList.add("hide-page");
		});
	}
}
