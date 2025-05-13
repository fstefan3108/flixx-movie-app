import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { swiperWrap } from './domElements.js';
import { fetchData } from './fetchAndSearch.js';

export function initSwiper() {

    const swiper = new Swiper(".swiper", {
        slidesPerView: 1, spaceBetween: 30, freeMode: true, loop: true, autoplay: { delay: 4000, disableOnInteraction: false },
        breakpoints: {
            500: {
                slidesPerView: 2
            },
            700: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 4
            },
        }

    });

}


export async function displaySlider() {

    const { results } = await fetchData("movie/now_playing");

    results.forEach(result => {
        const movie = document.createElement("div");
        movie.classList.add("swiper-slide");

        const link = document.createElement("a");
        link.href = "movie-details.html?id=" + result.id;

        const img = document.createElement("img");
        img.alt = "movie title";
        if (result.poster_path) {
            img.src = "https://image.tmdb.org/t/p/w500" + result.poster_path;
        }
        else {
            img.src = "/images/no-image.jpg";
        }

        link.append(img);
        movie.append(link);

        const h4 = document.createElement("h4");
        h4.classList.add("swiper-rating");

        const icon = document.createElement("i");
        icon.classList.add("fas", "fa-star", "text-secondary");

        h4.append(icon);
        h4.append(result.vote_average);

        movie.append(h4);
        swiperWrap.append(movie);
        initSwiper();


    });

}

