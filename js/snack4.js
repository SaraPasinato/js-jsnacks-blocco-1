/**
 * SNACK 4: Crea due array che hanno un 
 * numero di elementi diversi.Aggiungi elementi
 *  casuali all’array che ha meno elementi,fino a quando 
 * ne avrà tanti quanti l’altro.
 * 
 */
// ** 1: inizializzo gli arr1 e arr2 negli array dedicati
var arr1 = [1, 6, 7, 3, 18, 45, 70];
var arr2 = [1, 2, 5, 7, 9];
var listArr1 = "la lista A ha questi numeri: ";
var listArr2 = "La lista B ha questi numeri: ";
var result = document.getElementById("result");

// ** 2: controllo fino a quando ne avrà tanti quanti l'altro

do {
    var rand = Math.floor(Math.random() * 30);
    // controllo le lunghezze per capire a chi assegnare il numero random
    if (arr1.length < arr2.length) {
        arr1.push(rand);
    } else {
        arr2.push(rand);
    }
} while (arr1.length !== arr2.length);

console.table(arr1);
console.table(arr2);

//costruisco l'output e poi inserisco l'output in html
for (var i = 0, j = 0; i < arr1.length && j < arr2.length; i++, j++) {
    listArr1 += arr1[i] + " ";
    listArr2 += arr2[j] + " ";
}
listArr2 += "\n";
listArr1 += "\n";

result.innerText = listArr1 + listArr2;