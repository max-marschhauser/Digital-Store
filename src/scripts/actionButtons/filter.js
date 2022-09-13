// form action button

let selectedFilterOptionAuthor = document.querySelectorAll("[data-selected-filter-option-author]");
let selectedFilterOptionYear = document.querySelectorAll("[data-selected-filter-option-year]");
let selectedFilterOptionPrice = document.querySelectorAll("[data-selected-filter-option-price]");
let filterSelectedButton = document.querySelector("[data-filter-selected-button]");

filterSelectedButton.addEventListener("click", checkIfAnyAreClicked);

function checkIfAnyAreClicked() {
	checkIfAnyAreClickedAuthor();
	checkIfAnyAreClickedYear();
	checkIfAnyAreClickedPrice();
}

function checkIfAnyAreClickedAuthor() {
	let counter = 0;
	selectedFilterOptionAuthor.forEach((option) => {
		if (option.checked === false) {
			counter++;
		}
	});
	if (selectedFilterOptionAuthor.length === counter) {
		console.log("no author selected");
	} else {
		selectedFilterOptionAuthor.forEach((option) => {
			if (option.checked === true) {
				console.log(option.value + " is checked");
			} else {
				console.log(option.value + " is not checked");
			}
		});
	}
}

function checkIfAnyAreClickedYear() {
	let counter = 0;
	selectedFilterOptionYear.forEach((option) => {
		if (option.checked === false) {
			counter++;
		}
	});
	if (selectedFilterOptionYear.length === counter) {
		console.log("no year selected");
	} else {
		selectedFilterOptionYear.forEach((option) => {
			if (option.checked === true) {
				console.log(option.value + " is checked");
			} else {
				console.log(option.value + " is not checked");
			}
		});
	}
}

function checkIfAnyAreClickedPrice() {
	let counter = 0;
	selectedFilterOptionPrice.forEach((option) => {
		if (option.checked === false) {
			counter++;
		}
	});
	if (selectedFilterOptionPrice.length === counter) {
		console.log("no price selected");
	} else {
		selectedFilterOptionPrice.forEach((option) => {
			if (option.checked === true) {
				console.log(option.value + " is checked");
			} else {
				console.log(option.value + " is not checked");
			}
		});
	}
}
