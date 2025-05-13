import { searchResults } from "./search.js";
import { searchAPIData } from "./fetchAndSearch.js";
import globalPath from "./app.js";

export function pagination() {

    const div = document.createElement("div");
    div.classList.add("pagination");
    div.innerHTML = `<button class="btn btn-primary" id="prev">Prev</button>
          <button class="btn btn-primary" id="next">Next</button>
          <div class="page-counter">Page ${globalPath.search.page} of ${globalPath.search.totalPages}</div>`

    document.querySelector("#pagination").appendChild(div);

    if(globalPath.search.page===1){
        document.querySelector("#prev").disabled=true;
    }

    if(globalPath.search.page===globalPath.search.totalPages){
        document.querySelector("#next").disabled=true;
    }

    document.querySelector("#next").addEventListener("click", async ()=> {

        globalPath.search.page++;
        const {results, total_pages} = await searchAPIData();
        searchResults(results);

    });

    document.querySelector("#prev").addEventListener("click", async ()=> {

        globalPath.search.page--;
        const {results, total_pages} = await searchAPIData();
        searchResults(results);

    });

}