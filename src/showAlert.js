export function showAlert(message, className) {

    const alert = document.createElement("div");
    alert.classList.add("alert", className);
    alert.appendChild(document.createTextNode(message));
    document.querySelector("#alert").appendChild(alert);
    setTimeout(() => {

        alert.remove();

    }, 3000);

}