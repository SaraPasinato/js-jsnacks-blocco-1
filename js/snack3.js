/**
 * 
 * SNACK 3: Generatore di “nomi cognomi” casuali: prendendo 
 * una lista di nomi e una lista di cognomi, Gatsby vuole 
 * generare una falsa lista di 3 invitati.
 * 
 */
// ** 1: inizializzo nomi e cognomi negli array dedicati
var arrName = ["Mammolo", "Pisolo", "Eolo", "Dotto", "Brontolo", "Cucciolo", "Gongolo"];
var arrSurname = ["Bianchi", "Rossi", "Verdi", "Neri"];
var invitedName = [];
var counter=0;
var randName;
var randSurname;
var msg = "";
var result = document.getElementById('result-3');

// ** 2: controllo che siano meno di 3 gli invitati

while (invitedName.length < 3) {
    // ** 3: numeri casuali per l'indice del vettore

    randName = Math.floor(Math.random() * arrName.length);
    randSurname = Math.floor(Math.random() * arrSurname.length);


    // ** 4: compondo il nome per poterlo memorizzare in invitedName
    var fullName = arrName[randName] + " " + arrSurname[randSurname];
   
    // ** 5: testo per output
    msg += fullName + "\n";
    
    // ** 6: inserico fullName in coda al vettore 
    invitedName.push(fullName);
   
}

// ** 7: inset output in tag html

result.innerText = msg;

console.table(invitedName);