const sliderItems = document.querySelectorAll(".share-slider .share__slider-line .share__card");
const sliderLine = document.querySelector(".share__slider-line");
const buttonNext = document.querySelector(".button-next");
const buttonPrev = document.querySelector(".button-prev");
let count = 0;

let width = document.querySelector(".share-slider").offsetWidth;
buttonPrev.style.display = "none";

function init() {
  width = document.querySelector(".share-slider").offsetWidth;
}

function rollSlidderNext() {
  count++;
  sliderLine.style.transform = "translate(-" + count * width + "px)";
  if (count == sliderItems.length - 1) {
    buttonNext.style.display = "none";
    return;
  }
  buttonNext.style.display = "flex";
  buttonPrev.style.display = "flex";
}
function rollSlidderPrev() {
  count--;
  sliderLine.style.transform = "translate(-" + count * width + "px)";
  if (count == 0) {
    buttonPrev.style.display = "none";
    return;
  }
  buttonNext.style.display = "flex";
  buttonPrev.style.display = "flex";
}

window.addEventListener("resize", init);

buttonNext.addEventListener("click", rollSlidderNext);
buttonPrev.addEventListener("click", rollSlidderPrev);
