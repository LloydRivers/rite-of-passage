let contents = document.querySelectorAll(".content");
count = 0;
window.onscroll = move;


function move(){
    contents.forEach((content,index)=>{
        console.log(content)
        content.style.transform = `translateX(${Math.max(100, window.pageYOffset)}px)`
    })
}





// console.log(content.getBoundingClientRect(),window.scrollY) 