// chiedere al cliente la sua età e quanti km intende percorrere attraverso un form 
// il prezzo del biglietto è definito in base ai km (0.2762 € al km)
// va applicato uno sconto del 17.5% per i minorenni
// va applicato uno sconto del 33.3% per gli over 65.




const distance = document.getElementById("distance");
const age = document.getElementById("age");
const button = document.querySelector("button .btn btn-primary");


button.addEventListener("click", function (){
    console.log(distance.value);
    console.log(age.value);
})