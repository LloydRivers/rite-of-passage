let clock = document.getElementById("clock");
clock.style.color = "#56D2F9"

let date = new Date;
let hours = date.getHours();
console.log(hours);
let mins = date.getMinutes();
let secs = date.getSeconds();
let para = document.createElement("p");
para.innerText = `${hours} : ${mins} : ${secs}`;

clock.appendChild(para);