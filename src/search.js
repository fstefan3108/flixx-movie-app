import { pagination } from "./pagination.js";
import { showAlert } from "./showAlert.js";
import { searchAPIData } from "./fetchAndSearch.js";
import globalPath from "./app.js";
import noImage from './assets/no-image.jpg';

export function searchResults(results) {

    document.querySelector("#search-results").innerHTML="";
    document.querySelector("#search-results-heading").innerHTML="";
    document.querySelector("#pagination").innerHTML="";

    results.forEach(result => {


        const card = document.createElement("div");
        card.classList.add("card");

        const cardLink = document.createElement("a");
        cardLink.href = globalPath.search.type + "-details.html?id=" + result.id;

        const cardImage = document.createElement("img");
        cardImage.classList.add("card-img-top");
        cardImage.alt = globalPath.search.type === "movie" ? result.title : result.name;

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
        cardBodyH5.textContent = globalPath.search.type === "movie" ? result.title : result.name;

        cardBody.append(cardBodyH5);

        const cardBodyP = document.createElement("p");
        cardBodyP.classList.add("card-text");

        const cardBodySmall = document.createElement("small");
        cardBodySmall.classList.add("text-muted");
        cardBodySmall.textContent = globalPath.search.type === "movie" ? result.release_date : result.first_air_date;


        cardBodyP.append(cardBodySmall);

        cardBody.append(cardBodyP);

        cardLink.append(cardImage);


        card.append(cardLink);
        card.append(cardBody);


        document.querySelector("#search-results-heading").innerHTML =
            `<h2>${results.length} of ${globalPath.search.totalResults} Results for ${globalPath.search.term}</h2>`;
        document.querySelector("#search-results").append(card);


    });

    pagination();


}


export async function search() {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    globalPath.search.type = urlParams.get("type");
    globalPath.search.term = urlParams.get("search-term");

    if (globalPath.search.term !== "" && globalPath.search.term !== null) {

        const { results, total_pages, page, total_results } = await searchAPIData();

        globalPath.search.page = page;
        globalPath.search.totalPages = total_pages;
        globalPath.search.totalResults = total_results;

        if (results.length === 0) {
            showAlert("No movie found");
            return
        }

        searchResults(results);
        document.querySelector("#search-term").value = "";

    }
    else {
        showAlert("enter search term");
    }

}