API_KEY = "2997132c-f7f2-4aed-ab3c-e405edb264b4";
API_Url_current_month =
  "https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2024&month=MARCH";

async function CurMonth(url) {
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
              alt="${movie.nameRu}"
            />
          <span class="content_rating">8.7</span>
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
premier.addEventListener("click", () => {
  CurMonth(API_Url_current_month);
});
