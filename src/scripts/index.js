import {} from "./displayAlbums.js"; // display albums from albumList.js onto the site
import {} from "./cart.js"; // placing items into cart, removing items from cart, managing price, quantity and purchase button
import {} from "./actionButtons.js"; // action buttons for site (filter, search, sort)
import {} from "./search.js"; // defines function for search action button

//COPYRIGHT DATE

const copyrightDate = document.querySelector("[data-copyright-date]");

copyrightDate.innerHTML = "&copy;" + new Date().getFullYear() + ".";