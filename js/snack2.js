/**
 * 
 * SNACK 2: Chiedi un numero all'utente,
 *  se è pari stampa il numero,se è dispari 
 * stampa il numero successivo.
 * 
 */

// ** 1: inizializzo le variabili
var n = 0;
var result = document.getElementById("result-2");

// ** 2: creo un ciclo do while per controllare che 
// **  il il numero sia positivo e non venga inserito
// **  NaN /empty string /undefined;
do {
    n = parseInt(prompt("inserisci un numero: ", "3"));
    //** 3: test  numero pari e inserimento in html
    if (n % 2 == 0) {
        result.innerText = "il numero " + n + " è pari";
    } else {
        result.innerText = "il numero " + n + " è dispari quindi scrivo il suo successivo: " + (n + 1);
    }
} while (!n && n < 0);