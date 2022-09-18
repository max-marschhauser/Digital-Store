// search action button

import { albumList } from "../displayAlbums/albumList.js";

const searchInput = document.querySelector("[data-search-input]");

searchInput.addEventListener("input", (event) => {
	const albums = document.querySelectorAll("[data-albums-item]");
	const value = event.target.value.toLowerCase();

	albums.forEach((album) => {
		let title = album.querySelector("[data-title]").textContent;
		let author = album.querySelector("[data-author]").textContent;
		let year = album.querySelector("[data-year]").textContent;

		const isVisible =
			title.toLowerCase().includes(value) ||
			author.toLowerCase().includes(value) ||
			year.toLowerCase().includes(value);
		album.classList.toggle("albums__item__hide--search", !isVisible);
	});

	let albumsToDisplay = [];

	albums.forEach((album) => {
		if (album.classList.contains("albums__item__hide--search") === false) {
			albumsToDisplay.push(album.querySelector("[data-title]").innerHTML);
		}
	});

	albumList.forEach((item) => {
		if (albumsToDisplay.includes(item.title)) {
			item.search = false;
		} else {
			item.search = true;
		}
	});
});
