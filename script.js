const API_KEY = "2997132c-f7f2-4aed-ab3c-e405edb264b4";
const current_month_releases =
  "https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2024&month=MARCH";
const top_films =
  "https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_MOVIES&page=1";
const current_Month =
  "https://kinopoiskapiunofficial.tech/api/v2.1/films/releases?year=2024&month=MARCH&page=1";
const expected =
  "https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2024&month=APRIL";

async function GetData(url) {
  const response = await fetch(url, {
    headers: {
      "content-type": "application/json",
      "X-API-KEY": API_KEY,
    },
  });
  const responseData = await response.json();
  console.log(responseData);
  show(responseData);
}

function show(data) {
  const movies = document.getElementById("movies");

  data.items.forEach((movie) => {
    const movieel = document.createElement("div");

    movieel.innerHTML = `
    <div class="film_wrapper">
      <div id="show" class="content">
        <div class="img_rating">
            <img
              src="${movie.posterUrlPreview}"
              alt="${movie.nameRu}"/>
        </div>
        <div class="about_film">
            <h5 class="about_film_name">${movie.nameRu}</h5>
            <p class="about_film_genre">${movie.genres.map(
              (genre) => ` ${genre.genre}`
            )}</p>
        </div>
      </div>
    </div>`;

    movies.appendChild(movieel);
  });
}

async function GetData_releases(url) {
  const response = await fetch(url, {
    headers: {
      "content-type": "application/json",
      "X-API-KEY": API_KEY,
    },
  });
  const responseData = await response.json();
  console.log(responseData);
  show_releases(responseData);
}

function show_releases(data) {
  const movies = document.getElementById("movies");

  data.releases.forEach((movie) => {
    const movieel = document.createElement("div");

    movieel.innerHTML = `
    <div class="film_wrapper">
      <div id="show" class="content">
        <div class="img_rating">
            <img
              src="${movie.posterUrlPreview}"
              alt="${movie.nameRu}"/>
        </div>
        <div class="about_film">
            <h5 class="about_film_name">${movie.nameRu}</h5>
            <p class="about_film_genre">${movie.genres.map(
              (genre) => ` ${genre.genre}`
            )}</p>
        </div>
      </div>
    </div>`;

    movies.appendChild(movieel);
  });
}

const premier = document.getElementById("premier");
const best_films = document.getElementById("best_films");
const top_expected = document.getElementById("top_expected");
const e_releases = document.getElementById("e_releases");
premier.addEventListener("click", () => {
  document.getElementById("movies").innerHTML = "";
  GetData(current_month_releases);
});
best_films.addEventListener("click", () => {
  document.getElementById("movies").innerHTML = "";
  GetData(top_films);
});
e_releases.addEventListener("click", () => {
  document.getElementById("movies").innerHTML = "";
  GetData_releases(current_Month);
});
top_expected.addEventListener("click", () => {
  document.getElementById("movies").innerHTML = "";
  GetData(expected);
});
