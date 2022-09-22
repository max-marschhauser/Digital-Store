/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/images.js":
/*!******************************!*\
  !*** ./src/assets/images.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_favicon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main/favicon.png */ "./src/assets/main/favicon.png");
/* harmony import */ var _main_store1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/store1.png */ "./src/assets/main/store1.png");
/* harmony import */ var _main_store2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/store2.png */ "./src/assets/main/store2.png");
/* harmony import */ var _main_store3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/store3.jpg */ "./src/assets/main/store3.jpg");
/* harmony import */ var _albums_Black_Sabbath_Master_of_Reality_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./albums/Black_Sabbath/Master_of_Reality.jpg */ "./src/assets/albums/Black_Sabbath/Master_of_Reality.jpg");
/* harmony import */ var _albums_Black_Sabbath_Paranoid_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./albums/Black_Sabbath/Paranoid.jpg */ "./src/assets/albums/Black_Sabbath/Paranoid.jpg");
/* harmony import */ var _albums_Black_Sabbath_Vol_4_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./albums/Black_Sabbath/Vol_4.jpg */ "./src/assets/albums/Black_Sabbath/Vol_4.jpg");
/* harmony import */ var _albums_Deep_Purple_In_Rock_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./albums/Deep_Purple/In_Rock.jpg */ "./src/assets/albums/Deep_Purple/In_Rock.jpg");
/* harmony import */ var _albums_Led_Zeppelin_Mothership_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./albums/Led_Zeppelin/Mothership.jpg */ "./src/assets/albums/Led_Zeppelin/Mothership.jpg");
/* harmony import */ var _albums_Pink_Floyd_Animals_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./albums/Pink_Floyd/Animals.jpg */ "./src/assets/albums/Pink_Floyd/Animals.jpg");
/* harmony import */ var _albums_Pink_Floyd_Dark_Side_of_the_Moon_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./albums/Pink_Floyd/Dark_Side_of_the_Moon.jpg */ "./src/assets/albums/Pink_Floyd/Dark_Side_of_the_Moon.jpg");
/* harmony import */ var _albums_Pink_Floyd_Wish_You_Were_Here_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./albums/Pink_Floyd/Wish_You_Were_Here.jpg */ "./src/assets/albums/Pink_Floyd/Wish_You_Were_Here.jpg");
/* harmony import */ var _albums_The_Doors_LA_Woman_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./albums/The_Doors/LA_Woman.jpg */ "./src/assets/albums/The_Doors/LA_Woman.jpg");
/* harmony import */ var _albums_The_Doors_Morrison_Hotel_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./albums/The_Doors/Morrison_Hotel.jpg */ "./src/assets/albums/The_Doors/Morrison_Hotel.jpg");
/* harmony import */ var _albums_The_Doors_The_Doors_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./albums/The_Doors/The_Doors.jpg */ "./src/assets/albums/The_Doors/The_Doors.jpg");
/* harmony import */ var _albums_The_Doors_Waiting_for_the_Sun_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./albums/The_Doors/Waiting_for_the_Sun.jpg */ "./src/assets/albums/The_Doors/Waiting_for_the_Sun.jpg");

















/***/ }),

/***/ "./src/scripts/actionButtons/actionButtons.js":
/*!****************************************************!*\
  !*** ./src/scripts/actionButtons/actionButtons.js ***!
  \****************************************************/
/***/ (() => {

// action buttons for site (filter, search, sort)
var filterButton = document.querySelector("[data-filter-button]");
var searchButton = document.querySelector("[data-search-button]");
var sortButton = document.querySelector("[data-sort-button]");
var filterSelector = document.querySelector("[data-filter-selector]");
var searchSelector = document.querySelector("[data-search-selector]");
var sortSelector = document.querySelector("[data-sort-selector]");
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

/***/ }),

/***/ "./src/scripts/actionButtons/filter.js":
/*!*********************************************!*\
  !*** ./src/scripts/actionButtons/filter.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _displayAlbums_albumList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../displayAlbums/albumList.js */ "./src/scripts/displayAlbums/albumList.js");
// form action button
 // FILTER SELECT BUTTON

var filterCheckedButton = document.querySelector("[data-filter-checked-button]");
filterCheckedButton.addEventListener("click", checkIfAnyAreClicked); // CHECK IF ANY FILTER OPTION IS CHECKED, IF NONE IS CHECKED THEN RESET FILTER OPTION

function checkIfAnyAreClicked() {
  var albumsItem = document.querySelectorAll("[data-albums-item]");
  var allFilterOptions = document.querySelectorAll("[data-filter-option]");
  var counter = 0;
  allFilterOptions.forEach(function (option) {
    if (option.checked === false) {
      counter++;
    }
  });

  if (allFilterOptions.length === counter) {
    albumsItem.forEach(function (album) {
      album.classList.remove("albums__item__hide--filter");
    });
    _displayAlbums_albumList_js__WEBPACK_IMPORTED_MODULE_0__.albumList.forEach(function (item) {
      return item.filter = false;
    });
  } else {
    filterAlbums();
  }
}

function filterAlbums() {
  var albumsItem = document.querySelectorAll("[data-albums-item]");
  albumsItem.forEach(function (album) {
    album.classList.add("albums__item__hide--filter");
    _displayAlbums_albumList_js__WEBPACK_IMPORTED_MODULE_0__.albumList.forEach(function (item) {
      item.filter = true;
    });

    if (filterAuthor(album) === true && filterYear(album) === true && filterPrice(album) === true) {
      album.classList.remove("albums__item__hide--filter");
    }
  });
  var albumsToDisplay = [];
  albumsItem.forEach(function (album) {
    if (album.classList.contains("albums__item__hide--filter") === false) {
      albumsToDisplay.push(album.querySelector("[data-title]").innerHTML);
    }
  });
  _displayAlbums_albumList_js__WEBPACK_IMPORTED_MODULE_0__.albumList.forEach(function (item) {
    if (albumsToDisplay.includes(item.title)) {
      item.filter = false;
    }
  });
}

function filterAuthor(album) {
  var filterOptionAuthor = document.querySelectorAll("[data-filter-option-author]");
  var author = album.querySelector("[data-author]");
  var matched = false;
  var checked = false;
  filterOptionAuthor.forEach(function (option) {
    if (option.checked === true) {
      checked = true;

      if (option.value === author.innerHTML) {
        matched = true;
      }
    }
  });

  if (matched === true || checked === false) {
    return true;
  } else {
    return false;
  }
}

function filterYear(album) {
  var filterOptionYear = document.querySelectorAll("[data-filter-option-year]");
  var year = album.querySelector("[data-year]");
  var matched = false;
  var checked = false;
  filterOptionYear.forEach(function (option) {
    var startYear = "";
    var endYear = "";
    var selectedAlbumYear = 0;

    if (option.checked === true) {
      checked = true;

      for (var i = 0; i < option.value.length; i++) {
        if (i < 4) {
          startYear += option.value[i];
        } else if (i > 5 && i < 10) {
          endYear += option.value[i];
        }
      }

      startYear = parseInt(startYear);
      endYear = parseInt(endYear);
      selectedAlbumYear = parseInt(year.innerHTML);

      if (selectedAlbumYear >= startYear && selectedAlbumYear <= endYear) {
        matched = true;
      }
    }
  });

  if (matched === true || checked === false) {
    return true;
  } else {
    return false;
  }
}

function filterPrice(album) {
  var filterOptionPrice = document.querySelectorAll("[data-filter-option-price]");
  var price = album.querySelector("[data-price]");
  var matched = false;
  var checked = false;
  filterOptionPrice.forEach(function (option) {
    if (option.checked === true) {
      checked = true;
      var startPrice = "";
      var finishPrice = "";
      var euroSignCounter = 0;
      var albumPriceTag = "";

      for (var i = 0; i < option.value.length; i++) {
        if (option.value[i] === "€") {
          euroSignCounter++;
          i += 2;
        }

        if (option.value[i] !== "€" && euroSignCounter === 0) {
          startPrice += option.value[i];
        }

        if (option.value[i] !== "€" && euroSignCounter === 1) {
          finishPrice += option.value[i];
        }
      }

      startPrice = parseFloat(startPrice);
      finishPrice = parseFloat(finishPrice);

      for (var j = 0; j < price.innerHTML.length - 1; j++) {
        albumPriceTag += price.innerHTML[j];
      }

      albumPriceTag = parseFloat(albumPriceTag);

      if (albumPriceTag > startPrice && albumPriceTag <= finishPrice) {
        matched = true;
      }
    }
  });

  if (matched === true || checked === false) {
    return true;
  } else {
    return false;
  }
}

/***/ }),

/***/ "./src/scripts/actionButtons/search.js":
/*!*********************************************!*\
  !*** ./src/scripts/actionButtons/search.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _displayAlbums_albumList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../displayAlbums/albumList.js */ "./src/scripts/displayAlbums/albumList.js");
// search action button

var searchInput = document.querySelector("[data-search-input]");
searchInput.addEventListener("input", function (event) {
  var albums = document.querySelectorAll("[data-albums-item]");
  var value = event.target.value.toLowerCase();
  albums.forEach(function (album) {
    var title = album.querySelector("[data-title]").textContent;
    var author = album.querySelector("[data-author]").textContent;
    var year = album.querySelector("[data-year]").textContent;
    var isVisible = title.toLowerCase().includes(value) || author.toLowerCase().includes(value) || year.toLowerCase().includes(value);
    album.classList.toggle("albums__item__hide--search", !isVisible);
  });
  var albumsToDisplay = [];
  albums.forEach(function (album) {
    if (album.classList.contains("albums__item__hide--search") === false) {
      albumsToDisplay.push(album.querySelector("[data-title]").innerHTML);
    }
  });
  _displayAlbums_albumList_js__WEBPACK_IMPORTED_MODULE_0__.albumList.forEach(function (item) {
    if (albumsToDisplay.includes(item.title)) {
      item.search = false;
    } else {
      item.search = true;
    }
  });
});

/***/ }),

/***/ "./src/scripts/actionButtons/sort.js":
/*!*******************************************!*\
  !*** ./src/scripts/actionButtons/sort.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _displayAlbums_albumList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../displayAlbums/albumList.js */ "./src/scripts/displayAlbums/albumList.js");
/* harmony import */ var _displayAlbums_displayAlbums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../displayAlbums/displayAlbums.js */ "./src/scripts/displayAlbums/displayAlbums.js");
// sort action button
var sortOption = document.querySelector("[data-sort-option]");
var sortButton = document.querySelector("[data-sort-selected-button]");
sortButton.addEventListener("click", whichSortWasSelected);



function whichSortWasSelected() {
  var value = sortOption.options[sortOption.selectedIndex].value;
  removeAlbums();

  switch (value) {
    case "Author A-Z":
      authorAZ();
      (0,_displayAlbums_displayAlbums_js__WEBPACK_IMPORTED_MODULE_1__.displayAlbums)(_displayAlbums_albumList_js__WEBPACK_IMPORTED_MODULE_0__.albumList);
      break;

    case "Author Z-A":
      authorZA();
      (0,_displayAlbums_displayAlbums_js__WEBPACK_IMPORTED_MODULE_1__.displayAlbums)(_displayAlbums_albumList_js__WEBPACK_IMPORTED_MODULE_0__.albumList);
      break;

    case "Title A-Z":
      titleAZ();
      (0,_displayAlbums_displayAlbums_js__WEBPACK_IMPORTED_MODULE_1__.displayAlbums)(_displayAlbums_albumList_js__WEBPACK_IMPORTED_MODULE_0__.albumList);
      break;

    case "Title Z-A":
      titleZA();
      (0,_displayAlbums_displayAlbums_js__WEBPACK_IMPORTED_MODULE_1__.displayAlbums)(_displayAlbums_albumList_js__WEBPACK_IMPORTED_MODULE_0__.albumList);
      break;

    case "Year":
      year();
      removeAlbums();
      (0,_displayAlbums_displayAlbums_js__WEBPACK_IMPORTED_MODULE_1__.displayAlbums)(_displayAlbums_albumList_js__WEBPACK_IMPORTED_MODULE_0__.albumList);
      break;

    case "Year Reverse":
      yearReverse();
      (0,_displayAlbums_displayAlbums_js__WEBPACK_IMPORTED_MODULE_1__.displayAlbums)(_displayAlbums_albumList_js__WEBPACK_IMPORTED_MODULE_0__.albumList);
      break;

    case "Price":
      price();
      (0,_displayAlbums_displayAlbums_js__WEBPACK_IMPORTED_MODULE_1__.displayAlbums)(_displayAlbums_albumList_js__WEBPACK_IMPORTED_MODULE_0__.albumList);
      break;

    case "Price Reverse":
      priceReverse();
      (0,_displayAlbums_displayAlbums_js__WEBPACK_IMPORTED_MODULE_1__.displayAlbums)(_displayAlbums_albumList_js__WEBPACK_IMPORTED_MODULE_0__.albumList);
      break;
  }
}

function authorAZ() {
  _displayAlbums_albumList_js__WEBPACK_IMPORTED_MODULE_0__.albumList.sort(function (a, b) {
    var authora = a.author.toLowerCase();
    var authorb = b.author.toLowerCase();

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
  _displayAlbums_albumList_js__WEBPACK_IMPORTED_MODULE_0__.albumList.sort(function (a, b) {
    var authora = a.author.toLowerCase();
    var authorb = b.author.toLowerCase();

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
  _displayAlbums_albumList_js__WEBPACK_IMPORTED_MODULE_0__.albumList.sort(function (a, b) {
    var titlea = a.title.toLowerCase();
    var titleb = b.title.toLowerCase();

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
  _displayAlbums_albumList_js__WEBPACK_IMPORTED_MODULE_0__.albumList.sort(function (a, b) {
    var titlea = a.title.toLowerCase();
    var titleb = b.title.toLowerCase();

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
  _displayAlbums_albumList_js__WEBPACK_IMPORTED_MODULE_0__.albumList.sort(function (a, b) {
    return a.year - b.year;
  });
}

function yearReverse() {
  _displayAlbums_albumList_js__WEBPACK_IMPORTED_MODULE_0__.albumList.sort(function (a, b) {
    return b.year - a.year;
  });
}

function price() {
  _displayAlbums_albumList_js__WEBPACK_IMPORTED_MODULE_0__.albumList.sort(function (a, b) {
    return a.price - b.price;
  });
}

function priceReverse() {
  _displayAlbums_albumList_js__WEBPACK_IMPORTED_MODULE_0__.albumList.sort(function (a, b) {
    return b.price - a.price;
  });
}

function removeAlbums() {
  var albumsItem = document.querySelectorAll("[data-albums-item]");
  albumsItem.forEach(function (item) {
    item.remove();
  });
}

/***/ }),

/***/ "./src/scripts/cart/cart.js":
/*!**********************************!*\
  !*** ./src/scripts/cart/cart.js ***!
  \**********************************/
/***/ (() => {

// placing items into cart, removing items from cart, managing price, quantity and purchase button
// ADD ITEM TO CART
var numberOfAlbumsInCart = 0;
cartNotification();

function addButton() {
  var buttons = document.querySelectorAll("[data-add-to-cart]");
  buttons.forEach(function (button) {
    button.addEventListener("click", clickedAddToCart);
  });
  setTimeout(addButton, 100);
}

addButton();

function clickedAddToCart(event) {
  var button = event.target;
  var shopItem = button.parentElement;
  var title = shopItem.querySelector("[data-title]").innerText;
  var author = shopItem.querySelector("[data-author]").innerText;
  var year = shopItem.querySelector("[data-year]").innerText;
  var price = shopItem.querySelector("[data-price]").innerText;
  var imageSrc = shopItem.querySelector("[data-image]").src;
  addItemToCart(title, author, year, price, imageSrc);
}

function addItemToCart(title, author, year, price, imageSrc) {
  var cartItemNames = document.querySelectorAll("[data-selected-title]");

  for (var i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText === title) {
      alert("This item is already added to the cart");
      return;
    }
  }

  numberOfAlbumsInCart++;
  cartNotification();
  var cartRow = document.createElement("div");
  cartRow.classList.add("cart__row");
  var cartRowContents = "\n        <div class=\"cart__row--item\" data-selected-items>\n            <img src=\"".concat(imageSrc, "\" width=\"50px\" height=\"50px\" />\n            <p data-selected-title>").concat(title, "</p>\n            <p>").concat(author, "</p>\n            <p>").concat(year, "</p>\n        </div>\n        <div data-selected-price>").concat(price, "</div>\n        <input class=\"cart__row--quantity\" type=\"number\" value=\"1\" data-quantity/>\n        <button class=\"cart__row--remove\" type=\"button\" data-remove-button>Remove</button>");
  cartRow.innerHTML = cartRowContents;
  var selectedProducts = document.querySelector("[data-selected-products]");
  selectedProducts.append(cartRow);
  var remove = document.querySelectorAll("[data-remove-button");
  remove.forEach(function (item) {
    return item.addEventListener("click", removeRow);
  });
  var quantity = document.querySelectorAll("[data-quantity]");
  quantity.forEach(function (item) {
    return item.addEventListener("change", changeQuantity);
  });
  updatePrice();
} // REMOVE ROW BUTTON


function removeRow(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  numberOfAlbumsInCart--;
  updatePrice();
  cartNotification();
} // QUANTITY CHANGE


function changeQuantity(item) {
  item.target.value;

  if (item.target.value <= 0 || isNaN(item.target.value)) {
    item.target.value = 1;
  }

  updatePrice();
} // UPDATE PRICE


function updatePrice() {
  var selectedItemsPrices = document.querySelectorAll("[data-selected-price]");
  var total = 0;
  var currentPrice = 0;

  for (var i = 0; i < selectedItemsPrices.length; i++) {
    currentPrice = Number(selectedItemsPrices[i].innerHTML.slice(0, -1));
    var selectedRow = selectedItemsPrices[i].parentElement;
    var quantity = selectedRow.querySelector("[data-quantity]");
    total += currentPrice * quantity.value;
    total = Number(total.toFixed(2));
  }

  total += "€";

  if (total === "0€") {
    total = "0.00€";
  }

  var totalPrice = document.querySelector("[data-total-price]");
  totalPrice.innerText = total;
} // PURCHASE BUTTON


var purchaseButton = document.querySelector("[data-purchase-button]");
purchaseButton.addEventListener("click", purchaseClicked);

function purchaseClicked() {
  var price = document.querySelector("[data-total-price]");

  if (price.innerHTML === "0.00€") {
    alert("Please select products to purchase.");
  } else {
    alert("Thank you for your purchase.");
  }

  var selectedItems = document.querySelectorAll("[data-selected-items]");
  selectedItems.forEach(purchaseItems);

  function purchaseItems(item) {
    item.parentElement.remove();
  }

  numberOfAlbumsInCart = 0;
  updatePrice();
  cartNotification();
}

function cartNotification() {
  var cartNotification = document.querySelector("[data-cart-notification]");
  cartNotification.innerText = numberOfAlbumsInCart;

  if (numberOfAlbumsInCart === 0) {
    cartNotification.classList.add("notification--hiden");
  } else {
    cartNotification.classList.remove("notification--hiden");
  }
}

/***/ }),

/***/ "./src/scripts/displayAlbums/albumList.js":
/*!************************************************!*\
  !*** ./src/scripts/displayAlbums/albumList.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "albumList": () => (/* binding */ albumList)
/* harmony export */ });
// file contains list of albums that should be displayed on site
var albumList = [{
  title: "Master of Reality",
  author: "Black Sabbath",
  year: 1971,
  price: 10.99,
  imgSrc: "Master_of_Reality.jpg",
  filter: false,
  search: false
}, {
  title: "Paranoid",
  author: "Black Sabbath",
  year: 1970,
  price: 25.99,
  imgSrc: "Paranoid.jpg",
  filter: false,
  search: false
}, {
  title: "Vol. 4",
  author: "Black Sabbath",
  year: 1972,
  price: 15.59,
  imgSrc: "Vol_4.jpg",
  filter: false,
  search: false
}, {
  title: "In Rock",
  author: "Deep Purple",
  year: 1970,
  price: 17.29,
  imgSrc: "In_Rock.jpg",
  filter: false,
  search: false
}, {
  title: "Mothership",
  author: "Led Zeppelin",
  year: 2007,
  price: 13.99,
  imgSrc: "Mothership.jpg",
  filter: false,
  search: false
}, {
  title: "Animals",
  author: "Pink Floyd",
  year: 1977,
  price: 10.0,
  imgSrc: "Animals.jpg",
  filter: false,
  search: false
}, {
  title: "Dark Side of the Moon",
  author: "Pink Floyd",
  year: 1973,
  price: 19.99,
  imgSrc: "Dark_Side_of_the_Moon.jpg",
  filter: false,
  search: false
}, {
  title: "Wish You Were Here",
  author: "Pink Floyd",
  year: 1975,
  price: 15.0,
  imgSrc: "Wish_You_Were_Here.jpg",
  filter: false,
  search: false
}, {
  title: "L.A.Woman",
  author: "The Doors",
  year: 1971,
  price: 11.99,
  imgSrc: "LA_Woman.jpg",
  filter: false,
  search: false
}, {
  title: "Morrison Hotel",
  author: "The Doors",
  year: 1970,
  price: 10.99,
  imgSrc: "Morrison_Hotel.jpg",
  filter: false,
  search: false
}, {
  title: "The Doors",
  author: "The Doors",
  year: 1967,
  price: 18.99,
  imgSrc: "The_Doors.jpg",
  filter: false,
  search: false
}, {
  title: "Waiting for the Sun",
  author: "The Doors",
  year: 1968,
  price: 9.99,
  imgSrc: "Waiting_for_the_Sun.jpg",
  filter: false,
  search: false
}];

/***/ }),

/***/ "./src/scripts/displayAlbums/displayAlbums.js":
/*!****************************************************!*\
  !*** ./src/scripts/displayAlbums/displayAlbums.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayAlbums": () => (/* binding */ displayAlbums)
/* harmony export */ });
/* harmony import */ var _albumList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./albumList.js */ "./src/scripts/displayAlbums/albumList.js");
 // display albums from albumList.js onto the site

function displayAlbums(albumList) {
  albumList.forEach(function (item) {
    return createAlbum(item);
  });

  function createAlbum(item) {
    var albums = document.querySelector("[data-albums]");
    var albumRow = document.createElement("div");
    albumRow.classList.add("albums__item");

    if (item.filter === true) {
      albumRow.classList.add("albums__item__hide--filter");
    }

    if (item.search === true) {
      albumRow.classList.add("albums__item__hide--search");
    }

    albumRow.setAttribute("data-albums-item", "");
    var albumRowContents = "<img data-image src=\"".concat(item.imgSrc, "\" width=\"150px\" height=\"150px\" />\n        <h3 data-title>").concat(item.title, "</h3>\n        <p data-author>").concat(item.author, "</p>\n        <p data-year>").concat(item.year, ".</p>\n        <p data-price>").concat(item.price, "\u20AC</p>\n        <button type=\"button\" data-add-to-cart>\n            Place in cart\n        </button>");
    albumRow.innerHTML = albumRowContents;
    albums.append(albumRow);
  }
}
displayAlbums(_albumList_js__WEBPACK_IMPORTED_MODULE_0__.albumList);

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _spaControls_spaControls_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spaControls/spaControls.js */ "./src/scripts/spaControls/spaControls.js");
/* harmony import */ var _spaControls_spaControls_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_spaControls_spaControls_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _displayAlbums_displayAlbums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayAlbums/displayAlbums.js */ "./src/scripts/displayAlbums/displayAlbums.js");
/* harmony import */ var _cart_cart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart/cart.js */ "./src/scripts/cart/cart.js");
/* harmony import */ var _cart_cart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_cart_cart_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actionButtons_actionButtons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actionButtons/actionButtons.js */ "./src/scripts/actionButtons/actionButtons.js");
/* harmony import */ var _actionButtons_actionButtons_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_actionButtons_actionButtons_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actionButtons_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actionButtons/filter.js */ "./src/scripts/actionButtons/filter.js");
/* harmony import */ var _actionButtons_search_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actionButtons/search.js */ "./src/scripts/actionButtons/search.js");
/* harmony import */ var _actionButtons_sort_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actionButtons/sort.js */ "./src/scripts/actionButtons/sort.js");
/* harmony import */ var _misc_misc_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./misc/misc.js */ "./src/scripts/misc/misc.js");
/* harmony import */ var _misc_misc_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_misc_misc_js__WEBPACK_IMPORTED_MODULE_7__);
 // control nav buttons and SinglePageApp actions

 // display albums from albumList.js onto the site

 // placing items into cart, removing items from cart, managing price, quantity and purchase button

 // action buttons for site (filter, search, sort)

 // filter action button

 // search action button

 // sort action button

 // other misc functions

/***/ }),

/***/ "./src/scripts/misc/misc.js":
/*!**********************************!*\
  !*** ./src/scripts/misc/misc.js ***!
  \**********************************/
/***/ (() => {

//COPYRIGHT DATE
var copyrightDate = document.querySelector("[data-copyright-date]");
copyrightDate.innerHTML = "&copy;" + new Date().getFullYear() + ".";

/***/ }),

/***/ "./src/scripts/spaControls/spaControls.js":
/*!************************************************!*\
  !*** ./src/scripts/spaControls/spaControls.js ***!
  \************************************************/
/***/ (() => {

// SINGLE PAGE APP
var aboutPage = document.querySelectorAll("[data-about-page]");
var storePage = document.querySelectorAll("[data-store-page]");
var cartPage = document.querySelectorAll("[data-cart-page]");
var aboutButtonSpa = document.querySelectorAll("[data-about-button-SPA]");
var storeButtonSpa = document.querySelectorAll("[data-store-button-SPA]");
var cartButtonSpa = document.querySelectorAll("[data-cart-button-SPA]");
var openedPage = "about";
changePage();
aboutButtonSpa.forEach(function (button) {
  button.addEventListener("click", function () {
    openedPage = "about";
    changePage();
  });
});
storeButtonSpa.forEach(function (button) {
  button.addEventListener("click", function () {
    openedPage = "store";
    changePage();
  });
});
cartButtonSpa.forEach(function (button) {
  button.addEventListener("click", function () {
    openedPage = "cart";
    changePage();
  });
});

function changePage() {
  if (openedPage === "about") {
    aboutPage.forEach(function (element) {
      element.classList.remove("hide-page");
    });
  } else {
    aboutPage.forEach(function (element) {
      element.classList.add("hide-page");
    });
  }

  if (openedPage === "store") {
    storePage.forEach(function (element) {
      element.classList.remove("hide-page");
    });
  } else {
    storePage.forEach(function (element) {
      element.classList.add("hide-page");
    });
  }

  if (openedPage === "cart") {
    cartPage.forEach(function (element) {
      element.classList.remove("hide-page");
    });
  } else {
    cartPage.forEach(function (element) {
      element.classList.add("hide-page");
    });
  }
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  font-family: \"Montserrat\", sans-serif;\n  --color-dark: hsl(0, 0%, 25%);\n  --color-dark-transparent: hsla(0, 0%, 25%, 0.9);\n  --color-light: hsl(0, 0%, 95%);\n  --color-light-transparent: hsla(0, 0%, 95%, 0.9);\n  --color-primary: hsl(175, 100%, 50%);\n  --nav-load-time: 300ms;\n  --nav-link-load-time: 500ms;\n  --article-load-delay: calc(var(--nav-load-time) + var(--nav-link-load-time) + 200ms);\n}\n\nbody {\n  background-color: var(--color-light);\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  border: 0;\n  outline: 0;\n  padding: 0;\n  margin: 0;\n  vertical-align: baseline;\n  font-weight: inherit;\n  font-size: inherit;\n  font-size: 100%;\n  scroll-behavior: smooth;\n  cursor: default;\n}\n\n::-webkit-scrollbar {\n  width: 0.75rem;\n}\n\n::-webkit-scrollbar-track {\n  background: var(--color-light);\n  border-inline: 0.05rem solid var(--color-dark);\n  border-block: 0.15rem solid var(--color-dark);\n}\n\n::-webkit-scrollbar-thumb {\n  background: var(--color-dark-transparent);\n  border-radius: 50vmax;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: var(--color-dark);\n}\n\n::selection {\n  background-color: var(--color-dark-transparent);\n  color: var(--color-light-transparent);\n}\n\n.navbar {\n  position: sticky;\n  top: 0;\n  z-index: 9999;\n  padding-block: 0.25rem;\n  border-bottom: 1px solid var(--color-primary);\n  height: fit-content;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  background-color: var(--color-dark);\n  box-shadow: 0px 0px 0px 0.1rem var(--color-dark);\n  overflow: hidden;\n  animation: nav-load var(--nav-load-time) ease-in;\n}\n.navbar__item {\n  position: relative;\n  padding: 0.5rem 1rem;\n  text-decoration: none;\n  color: var(--color-primary);\n  cursor: pointer;\n  transition: all 0.5s ease;\n  animation-name: nav-link-load;\n  animation-duration: var(--nav-link-load-time);\n  animation-timing-function: ease-in;\n  animation-delay: var(--nav-load-time);\n  animation-fill-mode: forwards;\n  transform: scale(0);\n}\n.navbar__item:hover, .navbar__item:focus-visible {\n  opacity: 0.5;\n  transform: scale(1.1);\n}\n@media only screen and (min-width: 600px) and (min-height: 0px) {\n  .navbar__item {\n    font-size: 1.2rem;\n  }\n}\n@media only screen and (min-width: 1200px) and (min-height: 0px) {\n  .navbar__item {\n    font-size: 1.5rem;\n  }\n}\n.navbar__item:first-child {\n  animation-name: nav-first-link-load;\n  transform: translateX(-1000%);\n}\n.navbar__item:last-child {\n  animation-name: nav-last-link-load;\n  transform: translateX(1000%);\n}\n.navbar__item--notification {\n  position: absolute;\n  right: -0.5rem;\n  top: 0.1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 1.25rem;\n  height: 1.25rem;\n  border-radius: 50%;\n  background-color: var(--color-primary);\n  color: var(--color-dark);\n}\n@media only screen and (min-width: 1000px) and (min-height: 0px) {\n  .navbar__item--notification {\n    width: 1.5rem;\n    height: 1.5rem;\n  }\n}\n\n.notification--hiden {\n  display: none;\n}\n\n@keyframes nav-load {\n  0% {\n    transform: translateY(-100%);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n@keyframes nav-link-load {\n  0% {\n    transform: scale(0);\n  }\n  90% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes nav-first-link-load {\n  0% {\n    transform: translateX(-1000%);\n  }\n  90% {\n    transform: translateX(50%);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n@keyframes nav-last-link-load {\n  0% {\n    transform: translateX(1000%);\n  }\n  90% {\n    transform: translateX(-50%);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n.hero {\n  display: grid;\n  place-items: center;\n  grid-template-columns: repeat(1, 1fr);\n  margin: 0 auto;\n  width: 100%;\n  overflow: hidden;\n  background-color: var(--color-light);\n}\n@media only screen and (min-width: 1000px) and (min-height: 0px) {\n  .hero {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n.hero img {\n  max-width: 100%;\n  max-height: 40vh;\n  object-fit: cover;\n  box-shadow: 0px 0px 0px 0.1rem var(--color-dark-transparent);\n}\n@media only screen and (min-width: 1000px) and (min-height: 0ox) {\n  .hero img {\n    max-height: none;\n  }\n}\n.hero img:nth-child(1),\n.hero img:nth-child(3) {\n  display: none;\n}\n@media only screen and (min-width: 1000px) and (min-height: 0px) {\n  .hero img:nth-child(1),\n.hero img:nth-child(3) {\n    display: inline;\n  }\n}\n@media only screen and (min-width: 1000px) and (min-height: 0px) {\n  .hero img:nth-child(1) {\n    grid-column: 1/2;\n  }\n}\n@media only screen and (min-width: 1000px) and (min-height: 0px) {\n  .hero img:nth-child(3) {\n    grid-column: 3/4;\n  }\n}\n.hero img:nth-child(2),\n.hero h1 {\n  grid-row: 1/2;\n  grid-column: 1/2;\n}\n@media only screen and (min-width: 1000px) and (min-height: 0px) {\n  .hero img:nth-child(2),\n.hero h1 {\n    grid-row: 1/2;\n    grid-column: 2/3;\n  }\n}\n.hero img:nth-child(2) {\n  width: 100vw;\n  max-width: 100vw;\n}\n@media only screen and (min-width: 1000px) and (min-height: 0px) {\n  .hero img:nth-child(2) {\n    width: auto;\n    max-width: 100%;\n  }\n}\n.hero h1 {\n  padding: 1rem;\n  background-color: var(--color-dark-transparent);\n  color: var(--color-primary);\n  animation: logo-load 300ms ease-in var(--article-load-delay);\n  animation-fill-mode: forwards;\n  transform: translateX(-20px);\n  opacity: 0;\n}\n@media only screen and (min-width: 700px) and (min-height: 0px) {\n  .hero h1 {\n    font-size: 2rem;\n  }\n}\n\n@keyframes logo-load {\n  0% {\n    transform: translateX(-20px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n.action {\n  padding-block: 1rem;\n  border-bottom: 1px solid var(--color-dark);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  gap: 1rem;\n  background-color: var(--color-light);\n}\n@media only screen and (min-width: 360px) and (min-height: 0px) {\n  .action {\n    flex-direction: row;\n  }\n}\n.action__button {\n  border: 1px solid var(--color-dark);\n  padding: 1rem 2rem;\n  border-radius: 50vmax;\n  background-color: var(--color-dark);\n  color: var(--color-primary);\n  font-weight: bold;\n  transition: all 0.25s ease;\n}\n.action__button:hover, .action__button:focus-visible {\n  opacity: 0.8;\n}\n\n.options {\n  height: 0;\n  background-color: var(--color-light);\n  text-align: center;\n  color: var(--color-dark);\n  transform: scaleY(0);\n  transition: all 0.5s ease;\n  transform-origin: top;\n}\n.options__show {\n  padding-block: 0.5rem;\n  height: 15rem;\n  transform: scaleY(1);\n}\n.options h3 {\n  font-size: 1.5rem;\n  font-weight: bold;\n  padding-block: 0.5rem;\n}\n.options #search {\n  border: 1px solid var(--color-dark);\n  padding: 0.5rem;\n  font-size: 1.25rem;\n}\n.options__form {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n.options__form__grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  justify-content: center;\n  align-items: left;\n  gap: 0 2rem;\n}\n.options__form__column {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n}\n.options__form__column h4 {\n  font-weight: bold;\n  padding-bottom: 0.5rem;\n}\n.options button {\n  margin-top: 1rem;\n  padding: 1rem 1.5rem;\n  border-radius: 50vmax;\n  background-color: var(--color-dark);\n  color: var(--color-primary);\n  font-weight: bold;\n  transition: all 0.25s ease;\n}\n.options button:hover, .options button:focus-visible {\n  opacity: 0.8;\n}\n\nmain {\n  background-color: var(--color-light);\n  border-block: 1px solid var(--color-dark);\n  padding-block: 2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n}\nmain h2 {\n  font-weight: bold;\n  font-size: 1.5rem;\n}\nmain .albums {\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  gap: 2rem;\n}\n@media only screen and (min-width: 600px) and (min-height: 0px) {\n  main .albums {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 4rem;\n  }\n}\n@media only screen and (min-width: 900px) and (min-height: 0px) {\n  main .albums {\n    grid-template-columns: repeat(3, 1fr);\n    gap: 6rem;\n  }\n}\n@media only screen and (min-width: 1200px) and (min-height: 0px) {\n  main .albums {\n    grid-template-columns: repeat(4, 1fr);\n    gap: 8rem;\n  }\n}\nmain .albums__item {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n}\nmain .albums__item__hide--search {\n  display: none;\n}\nmain .albums__item__hide--filter {\n  display: none;\n}\nmain .albums__item img {\n  border-radius: 1rem;\n  outline: 1px solid var(--color-dark);\n}\nmain .albums__item h3 {\n  font-weight: bold;\n}\nmain .albums__item button {\n  padding: 1rem;\n  border-radius: 50vmax;\n  background-color: var(--color-dark);\n  color: var(--color-primary);\n  font-weight: bold;\n  cursor: pointer;\n  transition: all 0.25s ease;\n}\nmain .albums__item button:hover, main .albums__item button:focus-visible {\n  opacity: 0.8;\n}\n\n.about {\n  display: grid;\n  place-items: center;\n  gap: 1rem;\n  grid-template-columns: repeat(1, 1fr);\n  margin: 1rem auto;\n  max-width: 80vw;\n}\n@media only screen and (min-width: 1000px) and (min-height: 0px) {\n  .about {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.about__item {\n  padding: 2rem;\n  width: fit-content;\n  border-radius: 100vmax;\n  border: 0.2rem solid var(--color-dark);\n  text-align: center;\n  text-decoration: none;\n  animation: about-item-load 300ms ease-in;\n  animation-fill-mode: forwards;\n  transform: translateX(-50px);\n  opacity: 0;\n  cursor: pointer;\n  color: var(--color-dark);\n  font-size: 1.5rem;\n  font-weight: bold;\n  transition: all 0.5s ease;\n}\n@media only screen and (min-width: 1000px) and (min-height: 0px) {\n  .about__item {\n    padding: 4rem;\n  }\n}\n.about__item:hover, .about__item:focus-visible {\n  background-color: var(--color-dark);\n  color: var(--color-primary);\n}\n.about__text {\n  margin: 0 auto;\n  text-align: center;\n  padding-block: 3rem;\n  font-size: 2rem;\n  animation: about-undertext-load 300ms ease-in;\n  animation-fill-mode: forwards;\n  transform: translateY(20px);\n  opacity: 0;\n}\n.about__text a {\n  background-color: var(--color-dark);\n  border-radius: 100vmax;\n  padding: 0.5rem 1rem;\n  color: var(--color-primary);\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.5s ease;\n  animation: store-button 800ms ease-in;\n  animation-iteration-count: infinite;\n  animation-direction: alternate-reverse;\n}\n.about__text a:hover, .about__text a:focus-visible {\n  animation-play-state: paused;\n  color: var(--color-light);\n}\n\n@keyframes store-button {\n  0% {\n    opacity: 0.75;\n  }\n  40% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes about-item-load {\n  0% {\n    transform: translateX(-50px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n@keyframes about-undertext-load {\n  0% {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n.info {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem;\n  background-color: var(--color-dark);\n  color: var(--color-light);\n}\n.info__item {\n  padding: 0.25rem;\n  text-align: center;\n  letter-spacing: 1.1px;\n}\n.info__item--social {\n  font-size: 2rem;\n  padding-inline: 1rem;\n}\n.info__item span {\n  font-style: italic;\n}\n.info h2 {\n  font-size: 1.5rem;\n}\n.info a {\n  text-decoration: none;\n  color: var(--color-primary);\n  cursor: pointer;\n  transition: all 0.5s ease;\n}\n.info a:hover, .info a:focus-visible {\n  color: var(--color-light);\n}\n.info ::selection {\n  background-color: var(--color-light-transparent);\n  color: var(--color-dark-transparent);\n}\n\n.cart {\n  background-color: var(--color-light);\n  max-width: 80rem;\n  margin: 0 auto;\n  box-shadow: 50vw 0rem 0 0 var(--color-light), -50vw 0rem 0 0 var(--color-light);\n}\n.cart h2 {\n  padding-top: 1rem;\n  font-size: 2rem;\n  text-align: center;\n}\n.cart__row {\n  display: grid;\n  place-items: center;\n  grid-template-columns: repeat(4, 1fr);\n  padding-block: 0.5rem;\n  border-bottom: 1px solid var(--color-dark);\n}\n.cart__row h3 {\n  font-size: 1.2;\n  font-weight: bold;\n}\n.cart__row--item {\n  text-align: center;\n}\n.cart__row--quantity {\n  height: 2rem;\n  width: 3rem;\n  border-radius: 0.75rem;\n  border: 0.15rem solid var(--color-dark);\n  background-color: var(--color-light);\n  color: #333;\n  text-align: center;\n  font-size: 1.2em;\n  caret-color: var(--color-dark);\n}\n.cart__row--remove {\n  padding: 0.5rem;\n  border-radius: 50vmax;\n  background-color: var(--color-dark);\n  font-weight: bold;\n  color: var(--color-primary);\n  cursor: pointer;\n  transition: all 0.25s ease;\n}\n@media only screen and (min-width: 600px) and (min-height: 0px) {\n  .cart__row--remove {\n    padding: 1rem;\n  }\n}\n.cart__row--remove:hover, .cart__row--remove:focus-visible {\n  opacity: 0.8;\n}\n.cart__total {\n  padding: 1rem 2rem;\n  text-align: right;\n  word-spacing: 1rem;\n  font-weight: bold;\n  letter-spacing: 0.1rem;\n}\n.cart__total span {\n  font-weight: normal;\n}\n.cart__purchase {\n  display: grid;\n  place-items: center;\n}\n.cart__purchase__button {\n  margin-bottom: 0.75rem;\n  padding: 0.65rem;\n  border-radius: 50vmax;\n  background-color: var(--color-dark);\n  color: var(--color-primary);\n  font-weight: bold;\n  font-size: 1.2rem;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.25s ease;\n}\n@media only screen and (min-width: 600px) and (min-height: 0px) {\n  .cart__purchase__button {\n    padding: 1.25rem;\n  }\n}\n.cart__purchase__button:hover, .cart__purchase__button:focus-visible {\n  opacity: 0.8;\n}\n\n.hide-page {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./src/styles/components/_root.scss","webpack://./src/styles/style.scss","webpack://./src/styles/components/_header.scss","webpack://./src/styles/abstracts/_mixins.scss","webpack://./src/styles/components/_hero.scss","webpack://./src/styles/components/_action.scss","webpack://./src/styles/components/_main.scss","webpack://./src/styles/components/_about.scss","webpack://./src/styles/components/_footer.scss","webpack://./src/styles/components/_cart.scss"],"names":[],"mappings":"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","sourcesContent":["@use \"../abstracts\" as abs;\r\n\r\n:root {\r\n\tfont-family: \"Montserrat\", sans-serif;\r\n\r\n\t--color-dark: hsl(0, 0%, 25%);\r\n\t--color-dark-transparent: hsla(0, 0%, 25%, 0.9);\r\n\t--color-light: hsl(0, 0%, 95%);\r\n\t--color-light-transparent: hsla(0, 0%, 95%, 0.9);\r\n\t--color-primary: hsl(175, 100%, 50%);\r\n\r\n\t--nav-load-time: 300ms;\r\n\t--nav-link-load-time: 500ms;\r\n\t--article-load-delay: calc(var(--nav-load-time) + var(--nav-link-load-time) + 200ms);\r\n}\r\n\r\nbody {\r\n\tbackground-color: var(--color-light);\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n\tbox-sizing: border-box;\r\n\r\n\tborder: 0;\r\n\toutline: 0;\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\r\n\tvertical-align: baseline;\r\n\r\n\tfont-weight: inherit;\r\n\tfont-size: inherit;\r\n\tfont-size: 100%;\r\n\r\n\tscroll-behavior: smooth;\r\n\tcursor: default;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n\twidth: 0.75rem;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n\tbackground: var(--color-light);\r\n\tborder-inline: 0.05rem solid var(--color-dark);\r\n\tborder-block: 0.15rem solid var(--color-dark);\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n\tbackground: var(--color-dark-transparent);\r\n\tborder-radius: 50vmax;\r\n\r\n\t&:hover {\r\n\t\tbackground: var(--color-dark);\r\n\t}\r\n}\r\n\r\n::selection {\r\n\tbackground-color: var(--color-dark-transparent);\r\n\r\n\tcolor: var(--color-light-transparent);\r\n}\r\n","@use \"components/root\";\r\n@use \"components/header\";\r\n@use \"components/hero\";\r\n@use \"components/action\";\r\n@use \"components/main\";\r\n@use \"components/about\";\r\n@use \"components/footer\";\r\n@use \"components/cart\";\r\n\r\n.hide-page {\r\n\tdisplay: none;\r\n}\r\n","@use \"../abstracts\" as abs;\r\n\r\n.navbar {\r\n\tposition: sticky;\r\n\ttop: 0;\r\n\tz-index: 9999;\r\n\r\n\tpadding-block: 0.25rem;\r\n\tborder-bottom: 1px solid var(--color-primary);\r\n\theight: fit-content;\r\n\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: space-evenly;\r\n\talign-items: center;\r\n\r\n\tbackground-color: var(--color-dark);\r\n\tbox-shadow: 0px 0px 0px 0.1rem var(--color-dark);\r\n\toverflow: hidden;\r\n\r\n\tanimation: nav-load var(--nav-load-time) ease-in;\r\n\r\n\t&__item {\r\n\t\tposition: relative;\r\n\t\tpadding: 0.5rem 1rem;\r\n\r\n\t\ttext-decoration: none;\r\n\t\tcolor: var(--color-primary);\r\n\r\n\t\tcursor: pointer;\r\n\r\n\t\ttransition: all 0.5s ease;\r\n\r\n\t\t&:hover,\r\n\t\t&:focus-visible {\r\n\t\t\topacity: 0.5;\r\n\r\n\t\t\ttransform: scale(1.1);\r\n\t\t}\r\n\r\n\t\t@include abs.mq(600px, 0px) {\r\n\t\t\tfont-size: 1.2rem;\r\n\t\t}\r\n\r\n\t\t@include abs.mq(1200px, 0px) {\r\n\t\t\tfont-size: 1.5rem;\r\n\t\t}\r\n\r\n\t\tanimation-name: nav-link-load;\r\n\t\tanimation-duration: var(--nav-link-load-time);\r\n\t\tanimation-timing-function: ease-in;\r\n\t\tanimation-delay: var(--nav-load-time);\r\n\t\tanimation-fill-mode: forwards;\r\n\t\ttransform: scale(0);\r\n\r\n\t\t&:first-child {\r\n\t\t\tanimation-name: nav-first-link-load;\r\n\t\t\ttransform: translateX(-1000%);\r\n\t\t}\r\n\r\n\t\t&:last-child {\r\n\t\t\tanimation-name: nav-last-link-load;\r\n\t\t\ttransform: translateX(1000%);\r\n\t\t}\r\n\r\n\t\t&--notification {\r\n\t\t\tposition: absolute;\r\n\t\t\tright: -0.5rem;\r\n\t\t\ttop: 0.1rem;\r\n\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: center;\r\n\r\n\t\t\twidth: 1.25rem;\r\n\t\t\theight: 1.25rem;\r\n\r\n\t\t\tborder-radius: 50%;\r\n\r\n\t\t\t@include abs.mq(1000px, 0px) {\r\n\t\t\t\twidth: 1.5rem;\r\n\t\t\t\theight: 1.5rem;\r\n\t\t\t}\r\n\r\n\t\t\tbackground-color: var(--color-primary);\r\n\r\n\t\t\tcolor: var(--color-dark);\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.notification--hiden {\r\n\tdisplay: none;\r\n}\r\n\r\n@keyframes nav-load {\r\n\t0% {\r\n\t\ttransform: translateY(-100%);\r\n\t}\r\n\r\n\t100% {\r\n\t\ttransform: translateY(0);\r\n\t}\r\n}\r\n\r\n@keyframes nav-link-load {\r\n\t0% {\r\n\t\ttransform: scale(0);\r\n\t}\r\n\r\n\t90% {\r\n\t\ttransform: scale(1.1);\r\n\t}\r\n\r\n\t100% {\r\n\t\ttransform: scale(1);\r\n\t}\r\n}\r\n\r\n@keyframes nav-first-link-load {\r\n\t0% {\r\n\t\ttransform: translateX(-1000%);\r\n\t}\r\n\r\n\t90% {\r\n\t\ttransform: translateX(50%);\r\n\t}\r\n\r\n\t100% {\r\n\t\ttransform: translateX(0);\r\n\t}\r\n}\r\n\r\n@keyframes nav-last-link-load {\r\n\t0% {\r\n\t\ttransform: translateX(1000%);\r\n\t}\r\n\r\n\t90% {\r\n\t\ttransform: translateX(-50%);\r\n\t}\r\n\r\n\t100% {\r\n\t\ttransform: translateX(0);\r\n\t}\r\n}\r\n","@mixin mq($width, $height) {\r\n\t@media only screen and (min-width: $width) and (min-height: $height) {\r\n\t\t@content;\r\n\t}\r\n}\r\n","@use \"../abstracts\" as abs;\r\n\r\n.hero {\r\n\tdisplay: grid;\r\n\tplace-items: center;\r\n\tgrid-template-columns: repeat(1, 1fr);\r\n\r\n\t@include abs.mq(1000px, 0px) {\r\n\t\tgrid-template-columns: repeat(3, 1fr);\r\n\t}\r\n\r\n\tmargin: 0 auto;\r\n\twidth: 100%;\r\n\r\n\toverflow: hidden;\r\n\r\n\tbackground-color: var(--color-light);\r\n\r\n\timg {\r\n\t\tmax-width: 100%;\r\n\t\tmax-height: 40vh;\r\n\t\tobject-fit: cover;\r\n\r\n\t\t@include abs.mq(1000px, 0ox) {\r\n\t\t\tmax-height: none;\r\n\t\t}\r\n\r\n\t\tbox-shadow: 0px 0px 0px 0.1rem var(--color-dark-transparent);\r\n\t}\r\n\r\n\timg:nth-child(1),\r\n\timg:nth-child(3) {\r\n\t\tdisplay: none;\r\n\r\n\t\t@include abs.mq(1000px, 0px) {\r\n\t\t\tdisplay: inline;\r\n\t\t}\r\n\t}\r\n\r\n\timg:nth-child(1) {\r\n\t\t@include abs.mq(1000px, 0px) {\r\n\t\t\tgrid-column: 1/2;\r\n\t\t}\r\n\t}\r\n\r\n\timg:nth-child(3) {\r\n\t\t@include abs.mq(1000px, 0px) {\r\n\t\t\tgrid-column: 3/4;\r\n\t\t}\r\n\t}\r\n\r\n\timg:nth-child(2),\r\n\th1 {\r\n\t\tgrid-row: 1/2;\r\n\t\tgrid-column: 1/2;\r\n\r\n\t\t@include abs.mq(1000px, 0px) {\r\n\t\t\tgrid-row: 1/2;\r\n\t\t\tgrid-column: 2/3;\r\n\t\t}\r\n\t}\r\n\r\n\timg:nth-child(2) {\r\n\t\twidth: 100vw;\r\n\t\tmax-width: 100vw;\r\n\r\n\t\t@include abs.mq(1000px, 0px) {\r\n\t\t\twidth: auto;\r\n\t\t\tmax-width: 100%;\r\n\t\t}\r\n\t}\r\n\r\n\th1 {\r\n\t\tpadding: 1rem;\r\n\r\n\t\tbackground-color: var(--color-dark-transparent);\r\n\r\n\t\tcolor: var(--color-primary);\r\n\r\n\t\t@include abs.mq(700px, 0px) {\r\n\t\t\tfont-size: 2rem;\r\n\t\t}\r\n\r\n\t\tanimation: logo-load 300ms ease-in var(--article-load-delay);\r\n\t\tanimation-fill-mode: forwards;\r\n\t\ttransform: translateX(-20px);\r\n\t\topacity: 0;\r\n\t}\r\n}\r\n\r\n@keyframes logo-load {\r\n\t0% {\r\n\t\ttransform: translateX(-20px);\r\n\t\topacity: 0;\r\n\t}\r\n\r\n\t100% {\r\n\t\ttransform: translateX(0px);\r\n\t\topacity: 1;\r\n\t}\r\n}\r\n","@use \"../abstracts\" as abs;\r\n\r\n.action {\r\n\tpadding-block: 1rem;\r\n\tborder-bottom: 1px solid var(--color-dark);\r\n\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-evenly;\r\n\talign-items: center;\r\n\tgap: 1rem;\r\n\r\n\tbackground-color: var(--color-light);\r\n\r\n\t@include abs.mq(360px, 0px) {\r\n\t\tflex-direction: row;\r\n\t}\r\n\r\n\t&__button {\r\n\t\tborder: 1px solid var(--color-dark);\r\n\t\tpadding: 1rem 2rem;\r\n\t\tborder-radius: 50vmax;\r\n\r\n\t\tbackground-color: var(--color-dark);\r\n\r\n\t\tcolor: var(--color-primary);\r\n\t\tfont-weight: bold;\r\n\r\n\t\ttransition: all 0.25s ease;\r\n\r\n\t\t&:hover,\r\n\t\t&:focus-visible {\r\n\t\t\topacity: 0.8;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.options {\r\n\theight: 0;\r\n\r\n\tbackground-color: var(--color-light);\r\n\r\n\ttext-align: center;\r\n\tcolor: var(--color-dark);\r\n\r\n\ttransform: scaleY(0);\r\n\ttransition: all 0.5s ease;\r\n\ttransform-origin: top;\r\n\r\n\t&__show {\r\n\t\tpadding-block: 0.5rem;\r\n\t\theight: 15rem;\r\n\r\n\t\ttransform: scaleY(1);\r\n\t}\r\n\r\n\th3 {\r\n\t\tfont-size: 1.5rem;\r\n\t\tfont-weight: bold;\r\n\t\tpadding-block: 0.5rem;\r\n\t}\r\n\r\n\t#search {\r\n\t\tborder: 1px solid var(--color-dark);\r\n\t\tpadding: 0.5rem;\r\n\r\n\t\tfont-size: 1.25rem;\r\n\t}\r\n\r\n\t&__form {\r\n\t\tdisplay: grid;\r\n\t\tgrid-template-columns: repeat(3, 1fr);\r\n\r\n\t\t&__grid {\r\n\t\t\tdisplay: grid;\r\n\t\t\tgrid-template-columns: repeat(2, 1fr);\r\n\t\t\tjustify-content: center;\r\n\t\t\talign-items: left;\r\n\t\t\tgap: 0 2rem;\r\n\t\t}\r\n\r\n\t\t&__column {\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column;\r\n\t\t\tjustify-content: center;\r\n\t\t\talign-items: center;\r\n\t\t\tgap: 0.5rem;\r\n\r\n\t\t\th4 {\r\n\t\t\t\tfont-weight: bold;\r\n\t\t\t\tpadding-bottom: 0.5rem;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\tbutton {\r\n\t\tmargin-top: 1rem;\r\n\t\tpadding: 1rem 1.5rem;\r\n\t\tborder-radius: 50vmax;\r\n\r\n\t\tbackground-color: var(--color-dark);\r\n\r\n\t\tcolor: var(--color-primary);\r\n\t\tfont-weight: bold;\r\n\r\n\t\ttransition: all 0.25s ease;\r\n\r\n\t\t&:hover,\r\n\t\t&:focus-visible {\r\n\t\t\topacity: 0.8;\r\n\t\t}\r\n\t}\r\n}\r\n","@use \"../abstracts\" as abs;\r\n\r\nmain {\r\n\tbackground-color: var(--color-light);\r\n\tborder-block: 1px solid var(--color-dark);\r\n\tpadding-block: 2rem;\r\n\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\r\n\tgap: 2rem;\r\n\r\n\th2 {\r\n\t\tfont-weight: bold;\r\n\t\tfont-size: 1.5rem;\r\n\t}\r\n\r\n\t.albums {\r\n\t\tdisplay: grid;\r\n\t\tgrid-template-columns: repeat(1, 1fr);\r\n\t\tgap: 2rem;\r\n\r\n\t\t@include abs.mq(600px, 0px) {\r\n\t\t\tgrid-template-columns: repeat(2, 1fr);\r\n\t\t\tgap: 4rem;\r\n\t\t}\r\n\r\n\t\t@include abs.mq(900px, 0px) {\r\n\t\t\tgrid-template-columns: repeat(3, 1fr);\r\n\t\t\tgap: 6rem;\r\n\t\t}\r\n\r\n\t\t@include abs.mq(1200px, 0px) {\r\n\t\t\tgrid-template-columns: repeat(4, 1fr);\r\n\t\t\tgap: 8rem;\r\n\t\t}\r\n\r\n\t\t&__item {\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column;\r\n\t\t\tjustify-content: center;\r\n\t\t\talign-items: center;\r\n\t\t\tgap: 0.5rem;\r\n\r\n\t\t\t&__hide {\r\n\t\t\t\t&--search {\r\n\t\t\t\t\tdisplay: none;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t&--filter {\r\n\t\t\t\t\tdisplay: none;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\timg {\r\n\t\t\t\tborder-radius: 1rem;\r\n\t\t\t\toutline: 1px solid var(--color-dark);\r\n\t\t\t}\r\n\r\n\t\t\th3 {\r\n\t\t\t\tfont-weight: bold;\r\n\t\t\t}\r\n\r\n\t\t\tbutton {\r\n\t\t\t\tpadding: 1rem;\r\n\t\t\t\tborder-radius: 50vmax;\r\n\r\n\t\t\t\tbackground-color: var(--color-dark);\r\n\r\n\t\t\t\tcolor: var(--color-primary);\r\n\t\t\t\tfont-weight: bold;\r\n\r\n\t\t\t\tcursor: pointer;\r\n\r\n\t\t\t\ttransition: all 0.25s ease;\r\n\r\n\t\t\t\t&:hover,\r\n\t\t\t\t&:focus-visible {\r\n\t\t\t\t\topacity: 0.8;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n","@use \"../abstracts\" as abs;\r\n\r\n.about {\r\n\tdisplay: grid;\r\n\tplace-items: center;\r\n\tgap: 1rem;\r\n\tgrid-template-columns: repeat(1, 1fr);\r\n\t@include abs.mq(1000px, 0px) {\r\n\t\tgrid-template-columns: repeat(2, 1fr);\r\n\t}\r\n\r\n\tmargin: 1rem auto;\r\n\tmax-width: 80vw;\r\n\r\n\t&__item {\r\n\t\tpadding: 2rem;\r\n\t\t@include abs.mq(1000px, 0px) {\r\n\t\t\tpadding: 4rem;\r\n\t\t}\r\n\t\twidth: fit-content;\r\n\t\tborder-radius: 100vmax;\r\n\t\tborder: 0.2rem solid var(--color-dark);\r\n\r\n\t\ttext-align: center;\r\n\t\ttext-decoration: none;\r\n\r\n\t\tanimation: about-item-load 300ms ease-in;\r\n\t\tanimation-fill-mode: forwards;\r\n\t\ttransform: translateX(-50px);\r\n\t\topacity: 0;\r\n\r\n\t\tcursor: pointer;\r\n\r\n\t\tcolor: var(--color-dark);\r\n\t\tfont-size: 1.5rem;\r\n\t\tfont-weight: bold;\r\n\r\n\t\ttransition: all 0.5s ease;\r\n\r\n\t\t&:hover,\r\n\t\t&:focus-visible {\r\n\t\t\tbackground-color: var(--color-dark);\r\n\r\n\t\t\tcolor: var(--color-primary);\r\n\t\t}\r\n\t}\r\n\r\n\t&__text {\r\n\t\tmargin: 0 auto;\r\n\t\ttext-align: center;\r\n\r\n\t\tpadding-block: 3rem;\r\n\t\tfont-size: 2rem;\r\n\r\n\t\tanimation: about-undertext-load 300ms ease-in;\r\n\t\tanimation-fill-mode: forwards;\r\n\t\ttransform: translateY(20px);\r\n\t\topacity: 0;\r\n\r\n\t\ta {\r\n\t\t\tbackground-color: var(--color-dark);\r\n\t\t\tborder-radius: 100vmax;\r\n\t\t\tpadding: 0.5rem 1rem;\r\n\r\n\t\t\tcolor: var(--color-primary);\r\n\t\t\ttext-decoration: none;\r\n\r\n\t\t\tcursor: pointer;\r\n\r\n\t\t\ttransition: all 0.5s ease;\r\n\r\n\t\t\tanimation: store-button 800ms ease-in;\r\n\r\n\t\t\tanimation-iteration-count: infinite;\r\n\t\t\tanimation-direction: alternate-reverse;\r\n\r\n\t\t\t&:hover,\r\n\t\t\t&:focus-visible {\r\n\t\t\t\tanimation-play-state: paused;\r\n\t\t\t\tcolor: var(--color-light);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n@keyframes store-button {\r\n\t0% {\r\n\t\topacity: 0.75;\r\n\t}\r\n\r\n\t40% {\r\n\t\topacity: 1;\r\n\t}\r\n\r\n\t100% {\r\n\t\topacity: 1;\r\n\t}\r\n}\r\n\r\n@keyframes about-item-load {\r\n\t0% {\r\n\t\ttransform: translateX(-50px);\r\n\t\topacity: 0;\r\n\t}\r\n\r\n\t100% {\r\n\t\ttransform: translateX(0px);\r\n\t\topacity: 1;\r\n\t}\r\n}\r\n\r\n@keyframes about-undertext-load {\r\n\t0% {\r\n\t\ttransform: translateY(20px);\r\n\t\topacity: 0;\r\n\t}\r\n\r\n\t100% {\r\n\t\ttransform: translateY(0px);\r\n\t\topacity: 1;\r\n\t}\r\n}\r\n","@use \"../abstracts\" as abs;\r\n\r\n.info {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tgap: 1rem;\r\n\r\n\tpadding: 1rem;\r\n\r\n\tbackground-color: var(--color-dark);\r\n\r\n\tcolor: var(--color-light);\r\n\r\n\t&__item {\r\n\t\tpadding: 0.25rem;\r\n\t\ttext-align: center;\r\n\t\tletter-spacing: 1.1px;\r\n\r\n\t\t&--social {\r\n\t\t\tfont-size: 2rem;\r\n\t\t\tpadding-inline: 1rem;\r\n\t\t}\r\n\r\n\t\tspan {\r\n\t\t\tfont-style: italic;\r\n\t\t}\r\n\t}\r\n\r\n\th2 {\r\n\t\tfont-size: 1.5rem;\r\n\t}\r\n\r\n\ta {\r\n\t\ttext-decoration: none;\r\n\t\tcolor: var(--color-primary);\r\n\r\n\t\tcursor: pointer;\r\n\r\n\t\ttransition: all 0.5s ease;\r\n\r\n\t\t&:hover,\r\n\t\t&:focus-visible {\r\n\t\t\tcolor: var(--color-light);\r\n\t\t}\r\n\t}\r\n\r\n\t::selection {\r\n\t\tbackground-color: var(--color-light-transparent);\r\n\r\n\t\tcolor: var(--color-dark-transparent);\r\n\t}\r\n}\r\n","@use \"../abstracts\" as abs;\r\n\r\n.cart {\r\n    background-color: var(--color-light);\r\n    max-width: 80rem;\r\n    margin: 0 auto;\r\n\r\n    box-shadow: 50vw 0rem 0 0 var(--color-light), -50vw 0rem 0 0 var(--color-light);\r\n\r\n    h2 {\r\n        padding-top: 1rem;\r\n        font-size: 2rem;\r\n        text-align: center;\r\n    }\r\n\r\n    &__row {\r\n        display: grid;\r\n        place-items: center;\r\n        grid-template-columns: repeat(4, 1fr);\r\n\r\n        padding-block: 0.5rem;\r\n        border-bottom: 1px solid var(--color-dark);\r\n\r\n        h3 {\r\n            font-size: 1.2;\r\n            font-weight: bold;\r\n        }\r\n\r\n        &--item {\r\n            text-align: center;\r\n        }\r\n\r\n        &--quantity {\r\n            height: 2rem;\r\n            width: 3rem;\r\n            border-radius: 0.75rem;\r\n            border: 0.15rem solid var(--color-dark);\r\n\r\n            background-color: var(--color-light);\r\n\r\n            color: #333;\r\n            text-align: center;\r\n            font-size: 1.2em;\r\n            caret-color: var(--color-dark);\r\n        }\r\n\r\n        &--remove {\r\n            padding: 0.5rem;\r\n\r\n            @include abs.mq(600px, 0px) {\r\n                padding: 1rem;\r\n            }\r\n\r\n            border-radius: 50vmax;\r\n\r\n            background-color: var(--color-dark);\r\n\r\n            font-weight: bold;\r\n            color: var(--color-primary);\r\n\r\n            cursor: pointer;\r\n\r\n            transition: all 0.25s ease;\r\n\r\n            &:hover,\r\n            &:focus-visible {\r\n                opacity: 0.8;\r\n            }\r\n        }\r\n    }\r\n\r\n    &__total {\r\n        padding: 1rem 2rem;\r\n\r\n        text-align: right;\r\n        word-spacing: 1rem;\r\n        font-weight: bold;\r\n        letter-spacing: 0.1rem;\r\n\r\n        span {\r\n            font-weight: normal;\r\n        }\r\n    }\r\n\r\n    &__purchase {\r\n        display: grid;\r\n        place-items: center;\r\n\r\n        &__button {\r\n            margin-bottom: 0.75rem;\r\n            padding: 0.65rem;\r\n\r\n            @include abs.mq(600px, 0px) {\r\n                padding: 1.25rem;\r\n            }\r\n\r\n            border-radius: 50vmax;\r\n\r\n            background-color: var(--color-dark);\r\n\r\n            color: var(--color-primary);\r\n            font-weight: bold;\r\n            font-size: 1.2rem;\r\n            text-align: center;\r\n\r\n            cursor: pointer;\r\n\r\n            transition: all 0.25s ease;\r\n\r\n            &:hover,\r\n            &:focus-visible {\r\n                opacity: 0.8;\r\n            }\r\n        }\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/albums/Black_Sabbath/Master_of_Reality.jpg":
/*!***************************************************************!*\
  !*** ./src/assets/albums/Black_Sabbath/Master_of_Reality.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Master_of_Reality.jpg";

/***/ }),

/***/ "./src/assets/albums/Black_Sabbath/Paranoid.jpg":
/*!******************************************************!*\
  !*** ./src/assets/albums/Black_Sabbath/Paranoid.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Paranoid.jpg";

/***/ }),

/***/ "./src/assets/albums/Black_Sabbath/Vol_4.jpg":
/*!***************************************************!*\
  !*** ./src/assets/albums/Black_Sabbath/Vol_4.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Vol_4.jpg";

/***/ }),

/***/ "./src/assets/albums/Deep_Purple/In_Rock.jpg":
/*!***************************************************!*\
  !*** ./src/assets/albums/Deep_Purple/In_Rock.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "In_Rock.jpg";

/***/ }),

/***/ "./src/assets/albums/Led_Zeppelin/Mothership.jpg":
/*!*******************************************************!*\
  !*** ./src/assets/albums/Led_Zeppelin/Mothership.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Mothership.jpg";

/***/ }),

/***/ "./src/assets/albums/Pink_Floyd/Animals.jpg":
/*!**************************************************!*\
  !*** ./src/assets/albums/Pink_Floyd/Animals.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Animals.jpg";

/***/ }),

/***/ "./src/assets/albums/Pink_Floyd/Dark_Side_of_the_Moon.jpg":
/*!****************************************************************!*\
  !*** ./src/assets/albums/Pink_Floyd/Dark_Side_of_the_Moon.jpg ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Dark_Side_of_the_Moon.jpg";

/***/ }),

/***/ "./src/assets/albums/Pink_Floyd/Wish_You_Were_Here.jpg":
/*!*************************************************************!*\
  !*** ./src/assets/albums/Pink_Floyd/Wish_You_Were_Here.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Wish_You_Were_Here.jpg";

/***/ }),

/***/ "./src/assets/albums/The_Doors/LA_Woman.jpg":
/*!**************************************************!*\
  !*** ./src/assets/albums/The_Doors/LA_Woman.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "LA_Woman.jpg";

/***/ }),

/***/ "./src/assets/albums/The_Doors/Morrison_Hotel.jpg":
/*!********************************************************!*\
  !*** ./src/assets/albums/The_Doors/Morrison_Hotel.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Morrison_Hotel.jpg";

/***/ }),

/***/ "./src/assets/albums/The_Doors/The_Doors.jpg":
/*!***************************************************!*\
  !*** ./src/assets/albums/The_Doors/The_Doors.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "The_Doors.jpg";

/***/ }),

/***/ "./src/assets/albums/The_Doors/Waiting_for_the_Sun.jpg":
/*!*************************************************************!*\
  !*** ./src/assets/albums/The_Doors/Waiting_for_the_Sun.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Waiting_for_the_Sun.jpg";

/***/ }),

/***/ "./src/assets/main/favicon.png":
/*!*************************************!*\
  !*** ./src/assets/main/favicon.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "favicon.png";

/***/ }),

/***/ "./src/assets/main/store1.png":
/*!************************************!*\
  !*** ./src/assets/main/store1.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "store1.png";

/***/ }),

/***/ "./src/assets/main/store2.png":
/*!************************************!*\
  !*** ./src/assets/main/store2.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "store2.png";

/***/ }),

/***/ "./src/assets/main/store3.jpg":
/*!************************************!*\
  !*** ./src/assets/main/store3.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "store3.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_images_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images.js */ "./src/assets/images.js");
/* harmony import */ var _scripts_main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/main.js */ "./src/scripts/main.js");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");



})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map