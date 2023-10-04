function calculate(){
    let num1 = Math.floor(Math.random() * 100);
    let num2 = Math.floor(Math.random() * 100);
    let result = num1 + num2;
    console.log(result);
}

function multiplyByFive(){
    let multFive = Math.floor(Math.random() * 100) * 5;
    console.log(multFive);
}

function secondsToMinutes(){
    let num3 = Math.floor(Math.random() *100) / 60;
    console.log(num3);
}

calculate();
multiplyByFive();
secondsToMinutes();