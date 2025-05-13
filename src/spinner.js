import "./css/spinner.css";

export function showSpinner() {
    const spinner = document.querySelector(".spinner");
    spinner.classList.add("show");
}

export function hideSpinner() {
    const spinner = document.querySelector(".spinner");
    spinner.classList.remove("show");
}