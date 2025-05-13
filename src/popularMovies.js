import { moviesParent } from "./domElements.js";
import { fetchData } from "./fetchAndSearch.js";
import noImage from './assets/no-image.jpg';

export async function popularMovies() {
    console.log("Fetching popular movies...");
    const { results } = await fetchData("movie/popular");
    console.log("Fetched Movies:", results);
    results.forEach(result => {

        const card = document.createElement("div");
        card.classList.add("card");

        const cardLink = document.createElement("a");
        cardLink.href = "movie-details.html?id=" + result.id;

        const cardImage = document.createElement("img");
        cardImage.classList.add("card-img-top");
        cardImage.alt = "Movie title";

        if (result.poster_path) {
            cardImage.src = "https://image.tmdb.org/t/p/w500" + result.poster_path;
        }
        else {
            cardImage.src = noImage;
        }

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const cardBodyH5 = document.createElement("h5");
        cardBodyH5.classList.add("card-title");
        cardBodyH5.textContent = result.title;

        cardBody.append(cardBodyH5);

        const cardBodyP = document.createElement("p");
        cardBodyP.classList.add("card-text");

        const cardBodySmall = document.createElement("small");
        cardBodySmall.classList.add("text-muted");
        cardBodySmall.textContent = result.release_date;


        cardBodyP.append(cardBodySmall);

        cardBody.append(cardBodyP);

        cardLink.append(cardImage);


        card.append(cardLink);
        card.append(cardBody);

        moviesParent.append(card);


    });

}