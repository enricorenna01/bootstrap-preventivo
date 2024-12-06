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


/*EVENTO CAUSATO AL PREMERE DEL PULSANTE*/
myForm.addEventListener("submit", function (event) {
    event.preventDefault();

    /*CALCOLO DEL PREZZO*/
    let job = document.getElementById("inputSelect").value;
    let jobPrice;
    console.log(job);
    if (job === "1") {
        jobPrice = price.backend;
    
    } else if (job === "2") {
        jobPrice = price.frontend;
    
    } else {
        jobPrice = price.analysis;
    
    };
    console.log(jobPrice);
    let finalPrice = jobPrice * workingHours
    console.log(finalPrice);





});
