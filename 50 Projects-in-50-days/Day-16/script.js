var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// let ancestor = document.querySelectorAll(".card-heart-img:nth-child(1)");
let ancestor = document.getElementsByClassName("card-heart-img");
// console.log(ancestor);
for (let i = 0; i < ancestor.length; i++) {
  ancestor[i].addEventListener("click", function () {
    ancestor[i].classList.toggle("heart-red");
  });
}

let hidden = document.querySelector(".hidden");
let burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
  hidden.classList.toggle("show");
});
