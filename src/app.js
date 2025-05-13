import "./css/style.css";
import "./css/spinner.css";
import { links } from "./domElements.js";
import { displaySlider } from "./swiper.js";
import { movieDetails } from "./movieDetails.js";
import { popularMovies } from "./popularMovies.js";
import { popularShows } from "./popularShows.js";
import { search } from "./search.js";
import { showDetails } from "./showDetails.js";

console.log('API_KEY in Production:', process.env.API_KEY);

function getNormalizedPath() {
    const path = window.location.pathname;
    const segments = path.split('/').filter(Boolean);
    const lastSegment = segments[segments.length - 1];
    return '/' + lastSegment;
}

const globalPath = {

    currentPage: getNormalizedPath(),
    search: {
        term: "",
        type: "",
        page: 1,
        totalPages: 1,
        totalResults: 0,
    },
    api: {
        apiKey: process.env.API_KEY,
    }

};

export default globalPath;


// Active Links //




function activeLink() {

    links.forEach(link => {
        if (link.getAttribute("href") === globalPath.currentPage) {
            link.classList.add("active")
        }
    });

}


// Initialize App Script//
console.log('Current path:', window.location.pathname);

function appInit() {
    console.log("Current Page:", globalPath.currentPage);
    switch (globalPath.currentPage) {
        case "/":
        case "/index.html":

            popularMovies();
            displaySlider();

            break;
        case "/movie-details.html":
            console.log('Calling movieDetails function...');
            movieDetails()

            break;
        case "/search.html":

            search();

            break;
        case "/shows.html":

            popularShows();

            break;
        case "/tv-details.html":

            showDetails();

            break;

    }

    activeLink();

}

window.addEventListener("DOMContentLoaded", () => {

    appInit();

});