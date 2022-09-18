// form action button
import { albumList } from "../displayAlbums/albumList.js";

// FILTER SELECT BUTTON

const filterCheckedButton = document.querySelector("[data-filter-checked-button]");
filterCheckedButton.addEventListener("click", checkIfAnyAreClicked);

// CHECK IF ANY FILTER OPTION IS CHECKED, IF NONE IS CHECKED THEN RESET FILTER OPTION

function checkIfAnyAreClicked() {
	const albumsItem = document.querySelectorAll("[data-albums-item]");
	const allFilterOptions = document.querySelectorAll("[data-filter-option]");
	let counter = 0;

	allFilterOptions.forEach((option) => {
		if (option.checked === false) {
			counter++;
		}
	});

	if (allFilterOptions.length === counter) {
		albumsItem.forEach((album) => {
			album.classList.remove("albums__item__hide--filter");
		});

		albumList.forEach((item) => (item.filter = false));
	} else {
		filterAlbums();
	}
}

function filterAlbums() {
	const albumsItem = document.querySelectorAll("[data-albums-item]");
	albumsItem.forEach((album) => {
		album.classList.add("albums__item__hide--filter");
		albumList.forEach((item) => {
			item.filter = true;
		});

		if (filterAuthor(album) === true && filterYear(album) === true && filterPrice(album) === true) {
			album.classList.remove("albums__item__hide--filter");
		}
	});

	let albumsToDisplay = [];

	albumsItem.forEach((album) => {
		if (album.classList.contains("albums__item__hide--filter") === false) {
			albumsToDisplay.push(album.querySelector("[data-title]").innerHTML);
		}
	});

	albumList.forEach((item) => {
		if (albumsToDisplay.includes(item.title)) {
			item.filter = false;
		}
	});
}

function filterAuthor(album) {
	const filterOptionAuthor = document.querySelectorAll("[data-filter-option-author]");
	const author = album.querySelector("[data-author]");
	let matched = false;
	let checked = false;

	filterOptionAuthor.forEach((option) => {
		if (option.checked === true) {
			checked = true;
			if (option.value === author.innerHTML) {
				matched = true;
			}
		}
	});

	if (matched === true || checked === false) {
		return true;
	} else {
		return false;
	}
}

function filterYear(album) {
	const filterOptionYear = document.querySelectorAll("[data-filter-option-year]");
	const year = album.querySelector("[data-year]");
	let matched = false;
	let checked = false;

	filterOptionYear.forEach((option) => {
		let startYear = "";
		let endYear = "";
		let selectedAlbumYear = 0;

		if (option.checked === true) {
			checked = true;

			for (let i = 0; i < option.value.length; i++) {
				if (i < 4) {
					startYear += option.value[i];
				} else if (i > 5 && i < 10) {
					endYear += option.value[i];
				}
			}

			startYear = parseInt(startYear);
			endYear = parseInt(endYear);
			selectedAlbumYear = parseInt(year.innerHTML);

			if (selectedAlbumYear >= startYear && selectedAlbumYear <= endYear) {
				matched = true;
			}
		}
	});

	if (matched === true || checked === false) {
		return true;
	} else {
		return false;
	}
}

function filterPrice(album) {
	const filterOptionPrice = document.querySelectorAll("[data-filter-option-price]");
	const price = album.querySelector("[data-price]");
	let matched = false;
	let checked = false;

	filterOptionPrice.forEach((option) => {
		if (option.checked === true) {
			checked = true;

			let startPrice = "";
			let finishPrice = "";
			let euroSignCounter = 0;
			let albumPriceTag = "";

			for (let i = 0; i < option.value.length; i++) {
				if (option.value[i] === "€") {
					euroSignCounter++;
					i += 2;
				}
				if (option.value[i] !== "€" && euroSignCounter === 0) {
					startPrice += option.value[i];
				}
				if (option.value[i] !== "€" && euroSignCounter === 1) {
					finishPrice += option.value[i];
				}
			}

			startPrice = parseFloat(startPrice);
			finishPrice = parseFloat(finishPrice);

			for (let j = 0; j < price.innerHTML.length - 1; j++) {
				albumPriceTag += price.innerHTML[j];
			}

			albumPriceTag = parseFloat(albumPriceTag);

			if (albumPriceTag > startPrice && albumPriceTag <= finishPrice) {
				matched = true;
			}
		}
	});

	if (matched === true || checked === false) {
		return true;
	} else {
		return false;
	}
}
