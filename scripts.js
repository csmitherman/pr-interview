var close = document.querySelector("#close-modal");

close.addEventListener("click", function () {
    var modal = document.querySelector("#modal");
    modal.classList.remove("visible");
});

var forgotPassword = document.querySelector("#forgot-password");

forgotPassword.addEventListener("click", function () {
    var modal = document.querySelector("#modal");
    modal.classList.add("visible");
});