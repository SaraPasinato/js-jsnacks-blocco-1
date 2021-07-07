/**
 * !SNACK 1 :
 *  Il software deve chiedere per 5 volte 
 * all’utente di inserire un numero.
 * Il programma stampa la somma di tutti i numeri inseriti.
 * Esegui questo programma in due versioni, con il for e con il while.
 */

//? 1: FOR
// **  a. inizializzare le variabili */
var max = 5;
var sum = 0;
var result = document.getElementById("result");
var n = 0;
var counter = 0; //iteratore per while

// **  b. chiedere all'utente di inserire 5 numeri */
/**
 * !sol: FOR
for (var i = 0; i < max; i++) {
    //se n è NaN resetto n
    n = parseInt(prompt("inserisci il " + (i + 1) + " numero: ", "3"));
    if (isNaN(n)) {
        n = 0;
    }
    console.log(n);
    // **  c. sommare i numeri inseriti 
    sum += n;
}
*/
//? 2: WHILE
while (counter < max) {
    n = parseInt(prompt("inserisci il " + (counter + 1) + " numero: ", "3"));
    if (isNaN(n)) {
        n = 0;
    }
    console.log(n);
    // **  c. sommare i numeri inseriti 
    sum += n;
    counter++;
}

// **  d. stampare la somma in output */
result.innerText = "La somma è: " + sum;
