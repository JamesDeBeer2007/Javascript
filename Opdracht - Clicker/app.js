const getalElement = document.getElementById("getalDisplay");
const knop = document.getElementById("Button");

let getal = 0;

knop.addEventListener("click", function() {
    getal++;

    if (getal === 10) {
        getal = 0;
    }

    getalElement.textContent = getal;
});