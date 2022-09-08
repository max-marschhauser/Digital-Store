import { albumList } from "./albumList.js";

displayAlbums(albumList);

export function displayAlbums(albumList) {
    albumList.forEach((item) => createAlbum(item));

    function createAlbum(item) {
        let albums = document.querySelector("[data-albums]");
        let albumRow = document.createElement("div");
        albumRow.classList.add("albums__item");

        let albumRowContents = `<img data-image src="${item.imgSrc}" width="150px" height="150px" />
        <h3 data-title>${item.title}</h3>
        <p data-author>${item.author}</p>
        <p data-year>${item.year}.</p>
        <p data-price>${item.price}€</p>
        <button type="button" data-add-to-cart>
            Place in cart
        </button>`;
        albumRow.innerHTML = albumRowContents;

        albums.append(albumRow);
    }
}
