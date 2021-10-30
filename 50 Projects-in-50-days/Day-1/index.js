const images = document.querySelectorAll(".bg-image");

images.forEach(image=>{
    image.addEventListener("click", function(){
        removeClass();
        image.classList.add('active')

    })
})


function removeClass(){
    images.forEach(image=>{
        image.classList.remove('active');
    })
}