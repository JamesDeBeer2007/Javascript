let car = document.getElementById('car'); // maakt blokje, blokje
let locatie = 660; // de locatie van het blokje
let drive;

function start(){
    move();
    drive = setTimeout(start,100)
    // drive = setTimeout(move,100)
}
function again(){
    locatie = 660;
    car.style.top = locatie + 'px'; 
}
function stop(){
    clearTimeout(drive);
}

function move(){
    locatie -= 5; // hoever die gaat elke x aantal tijd
    car.style.top = locatie + 'px'; // linkt css blokje aan locatie, + px = dat je in pixels berekend
}
