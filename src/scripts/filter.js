// filter which albums do you want to be displayed on site

let filterButton = document.querySelector("[data-filter]");
filterButton.addEventListener("click", filterAlbums);

function filterAlbums(){
let x = document.querySelectorAll("[data-albums-item]");
x.forEach((item) => console.log(item));
}