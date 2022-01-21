const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=51ce1ae4c31f95d8ef09f1a50a37c94e";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280/";
getData(API_URL);
async function getData(api) {
  const data = await fetch(api);
  const response = await data.json();
  console.log(response.results);
}
