import "./style.css";

//選單
var burgerButton = document.getElementById("bb");
var burger = document.getElementById("burger");
burgerButton.addEventListener("click", function () {
  burger.classList.toggle("-translate-y-72");
  burger.classList.toggle("translate-y-10");
  burger.classList.toggle("fixed");
});

//信件燈箱
var letter = document.getElementById("letter");
var jumpout = document.getElementById("jumpout");
letter.addEventListener("click", function () {
  jumpout.classList.toggle("hidden");
});
jumpout.addEventListener("click", function () {
  jumpout.classList.toggle("hidden");
});

//箭頭燈箱+旋轉特效
var arrow1 = document.getElementById("arrow-1");
var club1 = document.getElementById("club-1");
var arrow2 = document.getElementById("arrow-2");
var club2 = document.getElementById("club-2");
var arrow3 = document.getElementById("arrow-3");
var club3 = document.getElementById("club-3");
arrow1.addEventListener("click", function () {
  if (club1.style.display == "none") {
    club1.style.display = "block";
    club2.style.display = "none";
    club3.style.display = "none";
    arrow2.style.transform = "rotate(0deg)";
    arrow3.style.transform = "rotate(0deg)";
    arrow1.style.transform = "rotate(180deg)";
  } else {
    club1.style.display = "none";
    club2.style.display = "none";
    club3.style.display = "none";
    arrow1.style.transform = "rotate(0deg)";
    arrow2.style.transform = "rotate(0deg)";
    arrow3.style.transform = "rotate(0deg)";
  }
});
arrow2.addEventListener("click", function () {
  if (club2.style.display == "none") {
    club2.style.display = "block";
    club1.style.display = "none";
    club3.style.display = "none";
    arrow1.style.transform = "rotate(0deg)";
    arrow3.style.transform = "rotate(0deg)";
    arrow2.style.transform = "rotate(180deg)";
  } else {
    club1.style.display = "none";
    club2.style.display = "none";
    club3.style.display = "none";
    arrow1.style.transform = "rotate(0deg)";
    arrow2.style.transform = "rotate(0deg)";
    arrow3.style.transform = "rotate(0deg)";
  }
});
arrow3.addEventListener("click", function () {
  if (club3.style.display == "none") {
    club3.style.display = "block";
    club1.style.display = "none";
    club2.style.display = "none";
    arrow1.style.transform = "rotate(0deg)";
    arrow2.style.transform = "rotate(0deg)";
    arrow3.style.transform = "rotate(180deg)";
  } else {
    club1.style.display = "none";
    club2.style.display = "none";
    club3.style.display = "none";
    arrow1.style.transform = "rotate(0deg)";
    arrow2.style.transform = "rotate(0deg)";
    arrow3.style.transform = "rotate(0deg)";
  }
});
