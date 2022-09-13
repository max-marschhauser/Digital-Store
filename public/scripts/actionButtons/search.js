let searchInput = document.querySelector("[data-search-input]");
let albums = document.querySelectorAll("[data-albums-item]");

searchInput.addEventListener("input", (event) => {
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
});
