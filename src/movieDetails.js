import { movieDetailsParent } from "./domElements.js";
import { bgImage } from "./bgImage.js";
import { fetchData } from "./fetchAndSearch.js";
import noImage from "./assets/no-image.jpg";

console.log("I work!");

export async function movieDetails() {

    const movieID = window.location.search.split("=")[1];
    
    const movie = await fetchData("movie/" + movieID);

    bgImage("movie", movie.backdrop_path);

    const detailsTop = document.createElement("div");
    detailsTop.classList.add("details-top");


    movieDetailsParent.append(detailsTop);

    const imgDiv = document.createElement("div");

    const movieImg = document.createElement("img");
    movieImg.alt = "Movie Title";
    movieImg.classList.add("card-img-top");

    if (movie.poster_path) {
        movieImg.src = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    }
    else {
        movieImg.src = noImage;
    }

    imgDiv.append(movieImg);
    detailsTop.append(imgDiv);

    const textDiv = document.createElement("div");
    const h2Title = document.createElement("h2");
    h2Title.textContent = movie.title;

    textDiv.append(h2Title);

    const iconP = document.createElement("p");

    const icon = document.createElement("i");
    icon.classList.add("fas", "fa-star", "text-primary");
    icon.textContent = movie.vote_average;
    iconP.append(icon);
    textDiv.append(iconP);

    const pMuted = document.createElement("p");
    pMuted.classList.add("text-muted");
    pMuted.textContent = movie.release_date;
    textDiv.append(pMuted);

    const desc = document.createElement("p");
    desc.textContent = movie.overview;
    textDiv.append(desc);

    const h5 = document.createElement("h5");
    h5.textContent = "Genres:";
    textDiv.append(h5);

    const genreList = document.createElement("ul");
    genreList.classList.add("list-group");


    for (let i = 0; i < movie.genres.length; i++) {
        const li = document.createElement("li");
        li.textContent = movie.genres[i].name;
        genreList.append(li);
    }

    textDiv.append(genreList);

    const link = document.createElement("a");
    link.href = "#";
    link.target = "_blank";
    link.classList.add("btn");
    link.textContent = "Visit movie homepage";
    textDiv.append(link);
    detailsTop.append(textDiv);
    movieDetailsParent.append(detailsTop);

    const detailsBottom = document.createElement("div");
    detailsBottom.classList.add("details-bottom");

    const h2 = document.createElement("h2");
    h2.textContent = "Movie info: ";
    detailsBottom.append(h2);

    const infoList = document.createElement("ul");
    const spanLabels = ["Budget: ", "Revenue: ", "Runtime: ", "Status: "];
    const liLabels = ["$1,000,000", "$2,000,000", "90 minutes", "Released"];

    for (let i = 0; i < spanLabels.length; i++) {
        const infoLi = document.createElement("li");
        const liSpan = document.createElement("span");
        liSpan.classList.add("text-secondary");
        liSpan.textContent = spanLabels[i];

        infoLi.append(liSpan);
        infoLi.append(liLabels[i]);
        infoList.append(infoLi);
    }
    detailsBottom.append(infoList);

    const h4 = document.createElement("h4");
    h4.textContent = "Production Companies";
    detailsBottom.append(h4);

    const companyList = document.createElement("div");
    companyList.classList.add("list-group");

    for (let i = 0; i < movie.production_companies.length; i++) {
        companyList.append("\n " + movie.production_companies[i].name + ", ");
    }
    detailsBottom.append(companyList);

    movieDetailsParent.append(detailsBottom);

}