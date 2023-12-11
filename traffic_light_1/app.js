function changeTrafficLight(){
    trafficLight = document.getElementById("traffic-light")
    if(document.getElementById("traffic-light").src = "trafficLightRed.png"){
        document.getElementById("traffic-light").src = "trafficLightGreen.png";
    } 
    else if(document.getElementById("traffic-light").src = "trafficLightGreen.png"){
        document.getElementById("traffic-light").src = "trafficLightYellow.png";
    } 
    else {
        document.getElementById("traffic-light").src = "trafficLightRed.png";
    }
}