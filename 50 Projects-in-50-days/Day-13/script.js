let logoString = "hebe.";
let index = 0,
  index2 = 4;
let totalLength = 5;

function printText() {
  let logo = document.getElementById("logo");
  let count = logoString.length;
  if (index < count) {
    logo.innerHTML += logoString.charAt(index);
    index++;
  } else if (index2 >= 0) {
    let str = logo.innerText;
    str = str.substring(0, str.length - 1);
    logo.innerText = str;
    index2--;
  } else {
    index = 0;
    index2 = 4;
  }

  setTimeout(printText, 500);
}
printText();

let show = document.getElementById("show");
let navHide = document.getElementById("nav-hidden-1");
show.addEventListener("mouseenter", function () {
  console.log("Mouse Enter Called");
  document.getElementById("nav-hidden-1").style.display = "block";
});
show.addEventListener("mouseleave", function () {
  console.log("Mouse Leave Called");
  document.getElementById("nav-hidden-1").style.display = "none";
});

let rewards = document.getElementById("rewards");
let rewardsContainer = document.querySelector(".rewards-container");
let closeModal = document.getElementById("close-modal");

rewards.addEventListener("click", function () {
  rewardsContainer.style.display = "block";
});
closeModal.addEventListener("click", function () {
  rewardsContainer.style.display = "none";
});

let btns = document.querySelectorAll(".card-btn");
btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    console.log(btn.style.border);
    if (!btn.style.border) btn.style.border = "1px solid black";
    else btn.style.border = "";
  });
});

// SIDE NAV
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// SIDE NAV
