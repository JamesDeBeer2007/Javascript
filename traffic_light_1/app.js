function changeTrafficLight(){
    trafficLight = document.getElementById("traffic-light")
    if(document.getElementById("traffic-light").src.match("trafficLightRed.png")){
        document.getElementById("traffic-light").src = "trafficLightGreen.png";
    } 
    else if(document.getElementById("traffic-light").src.match("trafficLightGreen.png")){
        document.getElementById("traffic-light").src = "trafficLightYellow.png";
    } 
    else {
        document.getElementById("traffic-light").src = "trafficLightRed.png";
    }
}