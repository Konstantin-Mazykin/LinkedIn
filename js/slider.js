const sliderItems = document.querySelectorAll(".share-slider .share__slider-line .share__card");
const sliderLine = document.querySelector(".share__slider-line");
const buttonNext = document.querySelector(".button-next");
const buttonPrev = document.querySelector(".button-prev");

let count = 0;
let positionX = null;

let width = document.querySelector(".share-slider").offsetWidth;
buttonPrev.style.display = "none";

function init() {
  width = document.querySelector(".share-slider").offsetWidth;
  rollSlidder();
}

function rollSlidder() {
  sliderLine.style.transform = "translate(-" + count * width + "px)";
}

function rollSlidderNext() {
  if (count == sliderItems.length - 1) return;
  count++;
  rollSlidder();
  if (count == sliderItems.length - 1) {
    buttonNext.style.display = "none";
    return;
  }
  buttonPrev.style.display = "flex";
}

function rollSlidderPrev() {
  count--;
  rollSlidder();
  if (count == 0) {
    buttonPrev.style.display = "none";
    return;
  }
  buttonNext.style.display = "flex";
}

function handleTouchStart(event) {
  positionX = event.touches[0].clientX;
}

function handleTouchMove(event) {
  if (!positionX) return;
  let offset = event.touches[0].clientX;
  if (Math.abs(positionX - offset) < 50) return;

  if (offset < positionX) {
    rollSlidderNext();
  } else {
    rollSlidderPrev();
  }
  positionX = null;
}

window.addEventListener("resize", init);

buttonNext.addEventListener("click", rollSlidderNext);
buttonPrev.addEventListener("click", rollSlidderPrev);

sliderLine.addEventListener("touchstart", handleTouchStart);
sliderLine.addEventListener("touchmove", handleTouchMove);
