const additionalList = document.querySelector(".search-vacancies__list-additional");
const listOpen = document.querySelector(".list-open");
const listClose = document.querySelector(".list-close");

const toggleModal = () => {
  additionalList.classList.toggle("is-hidden");
  listOpen.classList.toggle("is-hidden");
};

listOpen.addEventListener("click", toggleModal);
listClose.addEventListener("click", toggleModal);
