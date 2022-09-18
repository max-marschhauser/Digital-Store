// sort action button
const sortOption = document.querySelector("[data-sort-option]");
const sortButton = document.querySelector("[data-sort-selected-button]");

sortButton.addEventListener("click", whichSortWasSelected);

import { albumList } from "../displayAlbums/albumList.js";
import { displayAlbums } from "../displayAlbums/displayAlbums.js";

function whichSortWasSelected() {
	let value = sortOption.options[sortOption.selectedIndex].value;

	removeAlbums();
	switch (value) {
		case "Author A-Z":
			authorAZ();

			displayAlbums(albumList);
			break;
		case "Author Z-A":
			authorZA();

			displayAlbums(albumList);
			break;
		case "Title A-Z":
			titleAZ();

			displayAlbums(albumList);
			break;
		case "Title Z-A":
			titleZA();

			displayAlbums(albumList);
			break;
		case "Year":
			year();
			removeAlbums();
			displayAlbums(albumList);
			break;
		case "Year Reverse":
			yearReverse();

			displayAlbums(albumList);
			break;
		case "Price":
			price();

			displayAlbums(albumList);
			break;
		case "Price Reverse":
			priceReverse();

			displayAlbums(albumList);
			break;
	}
}

function authorAZ() {
	albumList.sort((a, b) => {
		let authora = a.author.toLowerCase();
		let authorb = b.author.toLowerCase();

		if (authora < authorb) {
			return -1;
		}
		if (authorb < authora) {
			return 1;
		}
		return 0;
	});
}

function authorZA() {
	albumList.sort((a, b) => {
		let authora = a.author.toLowerCase();
		let authorb = b.author.toLowerCase();

		if (authora > authorb) {
			return -1;
		}
		if (authorb > authora) {
			return 1;
		}
		return 0;
	});
}

function titleAZ() {
	albumList.sort((a, b) => {
		let titlea = a.title.toLowerCase();
		let titleb = b.title.toLowerCase();

		if (titlea < titleb) {
			return -1;
		}
		if (titleb < titlea) {
			return 1;
		}
		return 0;
	});
}

function titleZA() {
	albumList.sort((a, b) => {
		let titlea = a.title.toLowerCase();
		let titleb = b.title.toLowerCase();

		if (titlea > titleb) {
			return -1;
		}
		if (titleb > titlea) {
			return 1;
		}
		return 0;
	});
}

function year() {
	albumList.sort((a, b) => {
		return a.year - b.year;
	});
}

function yearReverse() {
	albumList.sort((a, b) => {
		return b.year - a.year;
	});
}

function price() {
	albumList.sort((a, b) => {
		return a.price - b.price;
	});
}

function priceReverse() {
	albumList.sort((a, b) => {
		return b.price - a.price;
	});
}

function removeAlbums() {
	const albumsItem = document.querySelectorAll("[data-albums-item]");

	albumsItem.forEach((item) => {
		item.remove();
	});
}
