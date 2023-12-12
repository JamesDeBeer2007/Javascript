let trafficLight = document.getElementById("traffic-light").scr;

let working;
let outOfOrder;

function red(){
    document.getElementById("traffic-light").src = "img/trafficLightRed.png";
}
function green(){
    document.getElementById("traffic-light").src = "img/trafficLightGreen.png";  
}
function yellow(){
    document.getElementById("traffic-light").src = "img/trafficLightYellow.png";
}
function shutOff(){
    document.getElementById("traffic-light").src = "img/shutOff.png";
}

function turnOn(){
    clearTimeout(outOfOrder);
    red();
    working = setTimeout(green, 4000);
    working = setTimeout(yellow, 8000);
    working = setTimeout(turnOn, 10000);
}
function blink(){
    clearTimeout(working);
    yellow();
    outOfOrder = setTimeout(shutOff, 500);
    outOfOrder = setTimeout(blink, 1000);
}
function turnOff(){
    shutOff();
    clearTimeout(working);
    clearTimeout(outOfOrder);
}
