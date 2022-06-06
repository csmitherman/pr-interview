var close = document.querySelector("#close-modal");
var modal = document.querySelector("#modal");

close.addEventListener("click", function () {
    console.log("testing");
    modal.classList.remove("visible");
});

var username = document.querySelector("#username");
var password = document.querySelector("#password");

// Change aria-labelledby to aria-label
username.setAttribute("aria-label", "username-label");
password.setAttribute("aria-label", "password-label");

username.setAttribute("aria-required", true);
username.setAttribute("role", "combobox");

var forgotPassword = document.querySelector("#forgot-password");

forgotPassword.setAttribute("role", "button");
forgotPassword.setAttribute("tabindex", "0");

var footerMenu = document.querySelector("#footer-menu");
var menuItems = document.querySelectorAll("#footer-menu li");

footerMenu.setAttribute("role", "menubar");

menuItems.forEach(function (item) {
    item.setAttribute("role", "menuitem")
});

// add more context to page title
var title = document.querySelector("h1");
title.setAttribute("alt", "To sign in please enter a valid username and password.")

modal.setAttribute("role", "modal");