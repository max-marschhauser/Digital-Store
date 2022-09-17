// form action button

let filterOptionAuthor = document.querySelectorAll("[data-filter-option-author]");
let filterOptionYear = document.querySelectorAll("[data-filter-option-year]");
let filterOptionPrice = document.querySelectorAll("[data-filter-option-price]");

// FILTER SELECT BUTTON
let filterCheckedButton = document.querySelector("[data-filter-checked-button]");
filterCheckedButton.addEventListener("click", checkIfAnyAreClicked);

function checkIfAnyAreClicked() {
	checkIfAnyAreClickedAuthor();
	// checkIfAnyAreClickedYear();
	//	checkIfAnyAreClickedPrice();
}

// FILTER AUTHOR

function checkIfAnyAreClickedAuthor() {
	let counter = 0;

	filterOptionAuthor.forEach((option) => {
		if (option.checked === false) {
			counter++;
		}
	});
	if (filterOptionAuthor.length === counter) {
		filterOptionAuthor.forEach((option) => {
			removeHideClassAuthor(option.value);
		});
	} else {
		// ovdje skratiti author funkciju tako da primi dva parametra - option.value i option.checked --> ili samo option pa onda u funkciji uzmem kad mi šta treba
	}
	/*
	{
		filterOptionAuthor.forEach((option) => {
			if (option.checked === true) {
				removeHideClassAuthor(option.value);
			} else {
				addHideClassAuthor(option.value);
			}
		});
	}*/
}

// FILTER YEAR

function checkIfAnyAreClickedYear() {
	let counter = 0;

	filterOptionYear.forEach((option) => {
		if (option.checked === false) {
			counter++;
		}
	});
	if (filterOptionYear.length === counter) {
		filterOptionYear.forEach((option) => {
			removeHideClassYear(option.value);
		});
	} else {
		filterOptionYear.forEach((option) => {
			if (option.checked === true) {
				removeHideClassYear(option.value);
			} else {
				addHideClassYear(option.value);
			}
		});
	}
}

// FILTER PRICE

function checkIfAnyAreClickedPrice() {
	let counter = 0;

	filterOptionPrice.forEach((option) => {
		if (option.checked === false) {
			counter++;
		}
	});
	if (filterOptionPrice.length === counter) {
		filterOptionPrice.forEach((option) => {
			removeHideClassPrice(option.value);
		});
	} else {
		filterOptionPrice.forEach((option) => {
			if (option.checked === true) {
				removeHideClassPrice(option.value);
			} else {
				addHideClassPrice(option.value);
			}
		});
	}
}

function removeHideClassAuthor(option) {
	let albumAuthor = document.querySelectorAll("[data-author]");
	albumAuthor.forEach((album) => {
		if (album.innerHTML === option) {
			album.parentElement.classList.remove("albums__item__hide--filter");
		}
	});
}

function addHideClassAuthor(option) {
	let albumAuthor = document.querySelectorAll("[data-author]");
	albumAuthor.forEach((album) => {
		if (album.innerHTML === option) {
			album.parentElement.classList.add("albums__item__hide--filter");
		}
	});
}

function removeHideClassYear(option) {
	let startYear = "";
	let finishYear = "";

	for (let i = 0; i < option.length; i++) {
		if (i < 4) {
			startYear += option[i];
		}
		if (i > 5 && i < 10) {
			finishYear += option[i];
		}
	}

	startYear = parseInt(startYear);
	finishYear = parseInt(finishYear);

	let albumYear = document.querySelectorAll("[data-year]");
	albumYear.forEach((album) => {
		let yearOfAlbum = parseInt(album.innerHTML);
		if (yearOfAlbum >= startYear && yearOfAlbum <= finishYear) {
			album.parentElement.classList.remove("albums__item__hide--filter");
		}
	});
}

function addHideClassYear(option) {
	let startYear = "";
	let finishYear = "";

	for (let i = 0; i < option.length; i++) {
		if (i < 4) {
			startYear += option[i];
		}
		if (i > 5 && i < 10) {
			finishYear += option[i];
		}
	}

	startYear = parseInt(startYear);
	finishYear = parseInt(finishYear);

	let albumYear = document.querySelectorAll("[data-year]");
	albumYear.forEach((album) => {
		let yearOfAlbum = parseInt(album.innerHTML);
		if (yearOfAlbum >= startYear && yearOfAlbum <= finishYear) {
			album.parentElement.classList.add("albums__item__hide--filter");
		}
	});
}

function removeHideClassPrice(option) {
	let startPrice = "";
	let finishPrice = "";
	let euroCounter = 0;

	for (let i = 0; i < option.length; i++) {
		if (option[i] === "€") {
			euroCounter++;
			i += 2;
		}
		if (option[i] !== "€" && euroCounter === 0) {
			startPrice += option[i];
		}
		if (option[i] !== "€" && euroCounter === 1) {
			finishPrice += option[i];
		}
	}

	startPrice = parseFloat(startPrice);
	finishPrice = parseFloat(finishPrice);

	let albumPrice = document.querySelectorAll("[data-price]");
	albumPrice.forEach((album) => {
		let albumPriceTag = parseFloat(album.innerHTML);
		if (albumPriceTag >= startPrice && albumPriceTag <= finishPrice) {
			album.parentElement.classList.remove("albums__item__hide--filter");
		}
	});
}

function addHideClassPrice(option) {
	let startPrice = "";
	let finishPrice = "";
	let euroCounter = 0;

	for (let i = 0; i < option.length; i++) {
		if (option[i] === "€") {
			euroCounter++;
			i += 2;
		}
		if (option[i] !== "€" && euroCounter === 0) {
			startPrice += option[i];
		}
		if (option[i] !== "€" && euroCounter === 1) {
			finishPrice += option[i];
		}
	}
	startPrice = parseFloat(startPrice);
	finishPrice = parseFloat(finishPrice);

	let albumPrice = document.querySelectorAll("[data-price]");
	albumPrice.forEach((album) => {
		let albumPriceTag = parseFloat(album.innerHTML);
		if (albumPriceTag >= startPrice && albumPriceTag <= finishPrice) {
			album.parentElement.classList.add("albums__item__hide--filter");
		}
	});
}
