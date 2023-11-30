let blokje = document.getElementById('blokje'); // maak blokje

let positionX = 0;
let positionY = 0;

let sped = 50; // speed van blokje

function updatePosition() {
  blokje.style.transform = `translate(${positionX}px, ${positionY}px)`;
} // maakt function die de x en y in px verandrter

document.addEventListener('keydown', (event) => { // zegt dat je keys moet drukken
  switch(event.key) { 
    case 'ArrowUp':
    case 'w':
        positionY -= sped;
        break;
    case 'ArrowLeft':
    case 'a':
        positionX -= sped;
        break;
    case 'ArrowDown':
    case 's':
        positionY += sped;
        break;
    case 'ArrowRight':
    case 'd':
        positionX += sped;
        break;
  }
  
  updatePosition(); // draait die functional
});

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

