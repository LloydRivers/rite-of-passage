let count = 0;
let slide  = document.querySelectorAll(".slide");
// slide[count].style.transition = "all 2s";
let length = slide.length;
function carousel(){
    for(let i = 0; i < length; i++) {
    slide[i].style.display = "none"
  
}
slide[count].style.display = 'block'

count++
    
    if(count >= length){
       count = 0;
    }
}
setInterval(carousel, 2000)


// CAMEL CASE
let myFavouriteColor
// CAMEL CASE
