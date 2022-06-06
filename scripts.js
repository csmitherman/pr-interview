var close = document.querySelector("#close-modal");

close.addEventListener("click", function () {
    console.log("testing");
    var modal = document.querySelector("#modal");
    modal.classList.remove("visible");
});

var username = document.querySelector("#username");
var password = document.querySelector("#password");

// Change aria-labelledby to aria-label
username.setAttribute("aria-label", "username-label");
password.setAttribute("aria-label", "password-label");

var forgotPassword = document.querySelector("#forgot-password");

forgotPassword.setAttribute("role", "button");

var footerMenu = document.querySelector("#footer-menu");
var menuItems = document.querySelectorAll("#footer-menu li");

footerMenu.setAttribute("role", "menubar");

menuItems.forEach(function (item) {
    item.setAttribute("role", "menuitem")
});