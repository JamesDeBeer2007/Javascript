let budget = 100;

let product = prompt("Hoeveel kost het product dat je wilt kopen?");

product = parseFloat(product);

if (!isNaN(product)) {
    if (budget >= product) {
        document.write('<span style="color: green;">U heeft genoeg geld!</span>');
    } else {
        document.write('<span style="color: red;">Helaas, te weinig geld</span>');
    }
} else {
    document.write('<span style="color: red;">Ongeldige invoer. Voer een geldig bedrag in.</span>');
}

