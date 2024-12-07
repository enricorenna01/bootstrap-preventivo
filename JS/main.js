/*DICHIARAZIONE VARIABILI*/
const workingHours = 10;
const price = {
   backend: 20.50,
   frontend: 15.30,
   analysis: 33.60
};
const promotionalCode = [
    "YHDNU32",
    "JANJC63",
    "PWKCN25",
    "SJDPO96",
    "POCIE24",
];

/*PRELEVO DAL DOM IL TIPO DI LAVORO*/
const myForm = document.getElementById("form");


/*PRELEVO DAL DOM IL TAG H2*/
const result = document.getElementById("priceResult");


/*EVENTO CAUSATO AL PREMERE DEL PULSANTE*/
myForm.addEventListener("submit", function (event) {
    event.preventDefault();

    /*VERIFICA CHE IL CAMPO TIPO DI LAVORO SIA STATO SELEZIONATO*/
    /*CALCOLO DEL PREZZO*/
    let job = document.getElementById("inputSelect").value;
    let jobPrice;
    console.log(job);
    if (job === "1") {
        jobPrice = price.backend;
    
    } else if (job === "2") {
        jobPrice = price.frontend;
    
    } else if (job === "3") {
        jobPrice = price.analysis;
    
    } else if (job === "Seleziona il tipo di Lavoro") {
        result.innerHTML = "Per favore, seleziona un tipo di lavoro.";
        return;
    };
    console.log(jobPrice);
    let finalPrice = jobPrice * workingHours
    console.log(finalPrice);

    

    /*VERIFICA DEL CORRETTO INSERIMENTO DEL CODICE PROMOZIONALE*/
    /*PRELEVO DAL DOM IL CODICE PROMOZIONALE*/
    const myCode = document.getElementById("myPromotionalCode").value.trim().toUpperCase();
    console.log(myCode)
    let rightPromotionalCode = false;
    for (let i = 0; i < promotionalCode.length; i++) {
        if (myCode === promotionalCode[i]) {
            rightPromotionalCode = true;
            break;
        };
    };    

    console.log(rightPromotionalCode);
    
    /*SALVO UNA VARIABILE DISCOUNT CHE DETERMINA LO SCONTO*/
    const discount = 25;

    /*SALVO UNA VARIABILE DISCOUNTED PRICE CHE DETERMINA IL PREZZO SCONTATO*/
    let discountedPrice = finalPrice;

    /*CALCOLO SCONTO*/
    if (rightPromotionalCode) {
        discountedPrice = finalPrice - ((finalPrice * discount) / 100);
        console.log(discountedPrice);
        result.innerHTML = `Codice sconto valido, prezzo finale: ${discountedPrice.toFixed(2)} €`;
    } else if (myCode !== "") {
        result.innerHTML = `Codice sconto non valido, prezzo finale: ${finalPrice.toFixed(2)} €`;
    } else {
        result.innerHTML = `Prezzo finale: €${finalPrice.toFixed(2)}`;
    }
    
});
