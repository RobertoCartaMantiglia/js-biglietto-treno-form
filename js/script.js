// chiedere al cliente la sua età e quanti km intende percorrere attraverso un form 
// il prezzo del biglietto è definito in base ai km (0.2762 € al km)
// va applicato uno sconto del 17.5% per i minorenni
// va applicato uno sconto del 33.3% per gli over 65.




const distance = document.getElementById ("distance");

const age = document.getElementById ("age");

const button = document.getElementById ("bottone");


button.addEventListener("click", function (){
    console.log(distance.value);
    console.log(age.value);

    let price = parseInt(distance.value) * 0.2762;
    let discountPriceOver = price * 0.667;
    let discountPriceJunior = price * 0.825;


    if (age < 18) {
        document.getElementById ("final-price").innerHTML = discountPriceJunior.toFixed(2) + "&euro;";
    } else if (age > 65) {
        document.getElementById ("final-price").innerHTML = discountPriceOver.toFixed(2) + "&euro;";
    }
    else {
        document.getElementById ("final-price").innerHTML = price + "&euro;";
    }
})