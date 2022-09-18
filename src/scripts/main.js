import {} from "./displayAlbums/displayAlbums.js"; // display albums from albumList.js onto the site
import {} from "./cart/cart.js"; // placing items into cart, removing items from cart, managing price, quantity and purchase button
import {} from "./actionButtons/actionButtons.js"; // action buttons for site (filter, search, sort)
import {} from "./actionButtons/filter.js"; // filter action button
import {} from "./actionButtons/search.js"; // search action button
import {} from "./actionButtons/sort.js"; // sort action button

//COPYRIGHT DATE

const copyrightDate = document.querySelector("[data-copyright-date]");

copyrightDate.innerHTML = "&copy;" + new Date().getFullYear() + ".";
