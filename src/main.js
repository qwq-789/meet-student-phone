import "./style.css";

var burgerButton = document.getElementById("bb");
var burger = document.getElementById("burger");
burgerButton.addEventListener("click", function () {
  burger.classList.toggle("-translate-y-72");
  burger.classList.toggle("translate-y-10");
  burger.classList.toggle("fixed");
});

var letter = document.getElementById("letter");
var jumpout = document.getElementById("jumpout");
letter.addEventListener("click", function () {
  jumpout.classList.toggle("hidden");
});
jumpout.addEventListener("click", function () {
  jumpout.classList.toggle("hidden");
});
