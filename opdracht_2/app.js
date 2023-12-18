let output = document.getElementById("paragraaf")
let inputV = document.getElementById("input")

let shop = [];

function add_product(){

    shop.push(input.value)
    output.innerText = "Shop:" + shop.join(", ")
    
    console.log(shop)

}
