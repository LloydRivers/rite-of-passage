const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=51ce1ae4c31f95d8ef09f1a50a37c94e";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280/";
getData(API_URL);
async function getData(api) {
  const data = await fetch(api);
  const response = await data.json();
  render(response);
}

function render(response) {
  let heroCard = document.getElementById("hero-card");

  let arr1 = response.results.slice(0, 1);
  console.log(arr1);
  let imagePath = arr1[0].poster_path;
  heroCard.style.backgroundImage = `url(${IMG_PATH + imagePath})`;
}
