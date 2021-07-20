/* Invece di modificare il peso con un prompt, p
roviamo a farlo con un input. 
Avremo bisogno di un bottone... */

//define palla1 obj
let palla1 = {
    nome: "palla",
    peso: 10,
}
// vars html element
var result = document.getElementById("result-6");
const number = document.getElementById("number");
const insert = document.getElementById("btn-insert");

//write obj

//Event onclick 
insert.addEventListener("click",function(){
 //set value of obj
 setObjectItem(palla1, "peso",number);
 //write obj
 writeObjectItem(palla1, result);
});

/** Stampa un oggetto obj
 * 
 * @param {*} obj  oggetto da stampare
 * @param {HTMLElement} element  elemento in cui stamparlo
 */
function writeObjectItem(obj, element) {
    let content = "";
    for (let key in obj) {
        content += key + ": " + obj[key] + " ";
    }
    element.innerText = content+ "kg \n";
}
/** modifica il valore di palla
 * 
 * @param {*} obj  da stampare
 * @param {*} propName  nome proprietà
 * @param {*} valueInput  nuovo valore 
 * 
 */
function setObjectItem(obj, propName,valueInput) {
    var newProp= valueInput.value;
    if(!newProp || isNaN(newProp)|| newProp<1 ){
        alert("il peso inserito non è valido");
        return;
    }
    obj[propName] = parseInt(newProp);
}