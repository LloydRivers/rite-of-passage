const button = document.getElementById("button")
const hex = [0,1,2,3,4,5,6,7,8,9, 'a', "b", "c", "d", "e", "f"];
const para = document.getElementById("hexCode")

button.addEventListener("click", function() {
    let start = "#";
    for (let i = 0; i <6; i++) {
        start += hex[random()]
    }
    document.body.style.backgroundColor = start
    para.innerText = start
    
})

function random(){
    let number = Math.floor(Math.random() * hex.length)
    return number
}

