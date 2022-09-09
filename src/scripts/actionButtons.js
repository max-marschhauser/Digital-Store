// action buttons for site (filter, search, sort)

let filterButton = document.querySelector("[data-filter-button]");
let searchButton = document.querySelector("[data-search-button]");
let sortButton = document.querySelector("[data-sort-button]");

let filterSelector = document.querySelector("[data-filter-selector]");
let searchSelector = document.querySelector("[data-search-selector]");
let sortSelector = document.querySelector("[data-sort-selector]");

filterButton.addEventListener("click", openFilter);
searchButton.addEventListener("click", openSearch);
sortButton.addEventListener("click", openSort);

function openFilter() {
    searchSelector.classList.remove("options__show");
    sortSelector.classList.remove("options__show");
    filterSelector.classList.toggle("options__show");
}

function openSearch() {
    sortSelector.classList.remove("options__show");
    filterSelector.classList.remove("options__show");
    searchSelector.classList.toggle("options__show");
}

function openSort() {
    searchSelector.classList.remove("options__show");
    filterSelector.classList.remove("options__show");
    sortSelector.classList.toggle("options__show");
}
