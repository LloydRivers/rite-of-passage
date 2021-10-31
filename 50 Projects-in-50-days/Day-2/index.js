const previous = document.getElementById("previous");
const next = document.getElementById("next");
let containers = document.querySelectorAll(".number");
let actives = document.querySelectorAll('.active')
let count = 0;
let w = 0
let crossbar = document.querySelector(".crossBarActive")
previous.disabled = true


next.addEventListener("click", function(e){
        count++
        w+=50
    containers[count].classList.add('active');
    crossbar.style.width = w + '%';
    console.log(count)
    update(count)
})

console.log(containers)
previous.addEventListener("click", function(){
    containers[count].classList.remove('active')
    console.log(count)
    count--
    w-=50
    crossbar.style.width = w + '%';
    if(count < 0) {
        count = 0
    }
    update(count)
})

function update(count) {
    if(count === 0) {
        previous.disabled = true
    }
    if(count > 0) {
        previous.disabled = false
        next.disabled = false
    }
    if(count === (containers.length -1 )) {
        next.disabled = true
    }
}