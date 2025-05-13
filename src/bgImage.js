export function bgImage(type, bgPath) {

    const overlay = document.createElement("div");
    overlay.style.backgroundImage = `url("https://image.tmdb.org/t/p/original/${bgPath}")`;
    overlay.style.backgroundSize = "cover";
    overlay.style.backgroundPosition = "center";
    overlay.style.backgroundRepeat = "no-repeat";
    overlay.style.height = "100vh";
    overlay.style.width = "100vw";
    overlay.style.position = "absolute";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.zIndex = "-1";
    overlay.style.opacity = "0.1";

    if (type === "movie") {
        document.querySelector("#movie-details").appendChild(overlay);
    }
    else {
        document.querySelector("#show-details").appendChild(overlay);
    }

}