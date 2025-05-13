import { showSpinner, hideSpinner } from "./spinner.js";
import globalPath from "./app.js";

export async function fetchData(endpoint) {

    const apiKey = globalPath.api.apiKey;
    console.log('API Key:', apiKey);

    showSpinner();

    try {

        const response = await fetch("https://api.themoviedb.org/3/" + endpoint + "?api_key=" + apiKey + "&langauge=en-US");
        const data = await response.json();

        hideSpinner();

        return data;

    } catch (error) {
        console.error('Error fetching data:', error);
    }

}


export async function searchAPIData() {

    const apiKey = globalPath.api.apiKey;

    showSpinner();

    const response = await fetch("https://api.themoviedb.org/3/search/" + globalPath.search.type + "?api_key=" + apiKey + "&langauge=en-US&query=" + globalPath.search.term + "&page=" + globalPath.search.page);
    const data = await response.json();
    console.log("Fetched data:", data);

    hideSpinner();

    return data;

}