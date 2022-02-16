import "./style.css";

var burgerButton = document.getElementById("bb");
var burger = document.getElementById("burger");

burgerButton.addEventListener("click", function () {
  burger.classList.toggle("-translate-y-72");
  burger.classList.toggle("translate-y-10");
});
