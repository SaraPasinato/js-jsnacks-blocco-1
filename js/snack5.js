/* SNACK: /
1. Creare un oggetto palla che abbia le seguenti proprietà.
  Nome = palla
  Peso = 10
2. stampare la palla in pagina*
3. Attraverso un prompt dare la possibilità all’utente di modificare il peso
della palla., poi stampare la palla con il peso modificato
BONUS: stampare la palla tramite una funzione */


//?:Inizializzo palla 
let palla = {
    nome: "palla",
    peso: 10,
}
// inizializzo  html element
var result = document.getElementById("result-5");

//scrive l'oggetto prima della modifica
writeObjectItem(palla, result);

setObjectItem(palla, "peso");

//scrive l'oggetto dopo la modifica
writeObjectItem(palla, result);

/** Stampa un oggetto obj
 * 
 * @param {*} obj  oggetto da stampare
 * @param {*} element  elemento in cui stamparlo
 */
function writeObjectItem(obj, element) {
    let content = "";
    for (let key in obj) {
        content += key + ": " + obj[key] + " ";
    }
    element.innerText = content+" kg\n";
}

/** modifica la proprietà di obj con propName
 * 
 * @param {*} obj  oggetto
 * @param {string} propName 
 */
function setObjectItem(obj, propName) {
    let user="";
    //validation for number
    do{
        user = parseInt(prompt("inserire il " + propName + ":"));
    }while(!user  || user<1 || isNaN(user))
   
    obj[propName] = user;
}