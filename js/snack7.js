// SNACK: Creiamo un array di oggetti contenente 3 squadre di calcio 
//con proprietà "nome", "città" "punti";
// Stampiamo le squadre in pagina, all'interno di una tabella HTML

// definisco teams 3 oggetti squadra
let teams=[
    {
    name:"Sampdoria",
    city:"Genova",
    point: 4,
    },
    {
        name:"Hellas",
        city:"Verona",
        point: 3,
    },
    {
        name:"Torino",
        city:"Torino",
        point: 6,
    },
];
var items="";
//var html element
var tableContent=document.querySelector("#ranking tbody");

//sort decrescente 
teams.sort(function(a,b){
    return b.point - a.point;
});

//concateno la stringa items con i valori
for(var i=0; i<teams.length;i++){
 items+="<tr>";
 items+="<td>"+ teams[i].name +"</td>";
 items+="<td>"+ teams[i].city +"</td>";
 items+="<td>"+ teams[i].point +"</td>";
 items+="</tr>";

}
//scrivo su html element
tableContent.innerHTML=items;