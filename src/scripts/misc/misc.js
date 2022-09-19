//COPYRIGHT DATE

const copyrightDate = document.querySelector("[data-copyright-date]");

copyrightDate.innerHTML = "&copy;" + new Date().getFullYear() + ".";
