const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const reset = document.getElementById("reset")
const score = document.getElementById("score");
let count = 0;
add.addEventListener("click", increase);
subtract.addEventListener("click", decrease);
reset.addEventListener("click", function(){
    count = 0
    score.textContent = count
})

function increase(){
   count ++
   score.textContent = count
}
function decrease(){
    count --
    score.textContent = count
}