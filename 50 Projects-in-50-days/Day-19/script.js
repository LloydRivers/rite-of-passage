let hidden = document.querySelector(".hidden");
let burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
  hidden.classList.toggle("show");
});
