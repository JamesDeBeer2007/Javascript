let blokje = document.getElementById('blokje'); // maakt blokje, blokje
let locatie = 0; // de locatie van het blokje
let border = window.innerWidth; // geeft een variale de nut om gelijk te zijn aan je windown width
let start = 0 // is de start lijn waar je begint en terug naar komt als je de muur hit

setInterval(() => { // laat code elkex aantal tijd runnen
    locatie += 10; // hoever die gaat elke x aantal tijd
  if (locatie > border) { // als locatie verder gaat dan scherm groot is
    locatie = start; // als locatie>border, dan word de locatie naar start gebracht
  } // close voor if  tag
  blokje.style.left = locatie + 'px'; // linkt css blokje aan locatie, + px = dat je in pixels berekend
}, 100); // de x aatal tijd

let kleuren = []; //function voor kelurtjes, met kleuren hier onder
  kleuren.push("red");
  kleuren.push("blue");
  kleuren.push("purple");
  kleuren.push("yellow");
  kleuren.push("green");

blokje.addEventListener("click", rgb); // laat als blokje word geckicked dan doet die de function rgb

function rgb (){
  let randomArray = Math.floor(Math.random() * kleuren.length) // kiets random dign van array
  let randomKleur = kleuren[randomArray]; // laat random ding kleur worden
  blokje.style.backgroundColor = randomKleur; // laat random kleur de background voor blokje worden
}