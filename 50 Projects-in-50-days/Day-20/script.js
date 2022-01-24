let slideBtn = document.querySelector(".slide-forward");
let slideBtnBack = document.querySelector(".slide-back");
const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=51ce1ae4c31f95d8ef09f1a50a37c94e";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280/";
getData(API_URL);
async function getData(api) {
  const data = await fetch(api);
  const response = await data.json();
  let arr1 = response.results.slice(0, 1);
  let random =
    response.results[Math.floor(Math.random() * response.results.length)];
  render(arr1[0]);

  slideBtn.addEventListener("click", function () {
    render(random);
    slideBtnBack.style.display = "inline-block";
    slideBtn.style.display = "none";
  });
  slideBtnBack.addEventListener("click", function () {
    render(arr1[0]);
    slideBtnBack.style.display = "none";
    slideBtn.style.display = "inline-block";
  });
}

function render(arr1) {
  let heroCard = document.getElementById("hero-card");

  let imagePath = arr1.poster_path;
  heroCard.style.backgroundImage = `url(${IMG_PATH + imagePath})`;
  heroCard.innerHTML = `
  
            <h2 class="t-a-c txt-white">${arr1.original_title}</h2>
            <div class="hero-card-lower-txt txt-white">
              <p>
                "${arr1.overview}"
                <span>Released ${arr1.release_date}</span>
              </p>
              <div class="hero-card-lower-btns">
                <button>Watch now</button>
                <button>+</button>
              </div>
            </div>
  
  
  `;
}
