// sort action button
const sortOption = document.querySelector("[data-sort-option]");
const sortButton = document.querySelector("[data-sort-selected-button]");
sortButton.addEventListener("click", whichSortWasSelected);

import { albumList } from "../displayAlbums/albumList.js";
import { displayAlbums } from "../displayAlbums/displayAlbums.js";

function whichSortWasSelected() {
	let value = sortOption.options[sortOption.selectedIndex].value;

	switch (value) {
		case "Author A-Z":
			authorAZ();
			break;
		case "Author Z-A":
			authorZA();
			break;
		case "Title A-Z":
			titleAZ();
			break;
		case "Title Z-A":
			titleZA();
			break;
		case "Year":
			year();
			break;
		case "Year Reverse":
			yearReverse();
			break;
		case "Price":
			price();
			break;
		case "Price Reverse":
			priceReverse();
			break;
	}
	displayAlbums(albumList);
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
	console.log(albumList);
}

function yearReverse() {
	albumList.sort((a, b) => {
		return b.year - a.year;
	});
	console.log(albumList);
}

function price() {
	albumList.sort((a, b) => {
		return a.price - b.price;
	});
	console.log(albumList);
}

function priceReverse() {
	albumList.sort((a, b) => {
		return b.price - a.price;
	});
	console.log(albumList);
}
