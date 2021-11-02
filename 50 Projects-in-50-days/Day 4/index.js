const text = document.getElementById("text");
let circle = document.querySelector(".circle");

circle.addEventListener("click", function(){
    if (text.style.width == "50px") {
        text.style.transition = "all 1s"
        text.style.width = "300px"    
    } else {
        text.style.transition = "all 1s"
        text.style.width = "50px"    

    }
})
