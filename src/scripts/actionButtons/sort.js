// sort action button
const sortOption = document.querySelector("[data-sort-option]");
const sortButton = document.querySelector("[data-sort-selected-button]");
sortButton.addEventListener("click", whichSortWasSelected);

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
}

function authorAZ() {
	console.log("Author A-Z");
}

function authorZA() {
	console.log("Author Z-A");
}

function titleAZ() {
	console.log("Title A-Z");
}

function titleZA() {
	console.log("Title Z-A");
}

function year() {
	console.log("Year");
}

function yearReverse() {
	console.log("Year Reverse");
}

function price() {
	console.log("Price");
}

function priceReverse() {
	console.log("Price Reverse");
}
