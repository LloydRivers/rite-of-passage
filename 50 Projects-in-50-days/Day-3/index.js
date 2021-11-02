let burger = document.querySelector(".burgerContainer");
let container = document.querySelector(".container");
let menu = document.querySelector(".menu");
let cross = document.querySelector(".cross");


burger.addEventListener("click", function(){
    menu.style.transition = "all 1s";
    menu.style.transform = "rotate(-90deg)"
    container.style.transition = "all 1s";
    container.style.transform = "rotate(-20deg)"
})
cross.addEventListener("click", function(){
    menu.style.transition = "all 1s";
    menu.style.transform = "none"
    container.style.transition = "all 1s";
    container.style.transform = "none"
})