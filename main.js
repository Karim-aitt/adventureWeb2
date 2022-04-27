// -----------------------------------------CONTADORES

let countSituacion = 0;   //situacion

let countFuerza = 5;    //statFuerza
let statFuerza = document.getElementById("statFuerza");

let countCarisma = 5;   //statCarisma
let statCarisma = document.getElementById("statCarisma");

let countCoin = 0;      //coins

// -----------------------------------------TRAMAS
let combate1 = "texto"
let combate2 = "texto"

let acertijo1 = "texto?"
let acertijo2 = "texto?"

let dialog1 = "texto"
let dialog2 = "texto"


// -----------------------------------------SELECTORES

//Cajas de texto
let capitulo = document.getElementById("capitulo");
let situacion = document.getElementById("situacion");
let pregunta = document.getElementById("pregunta");

//Displays
let charlaDisplay = document.getElementById("divCharlaDisplay");
let resolverDisplay = document.getElementById("divResolverDisplay");
let combateDisplay = document.getElementById("divCombatDisplay");

//Botones
let buttonFight = document.getElementById("buttonFight");
let buttonShield = document.getElementById("buttonShield");
let inputResolver = document.getElementById("inputResolver");

//Solo en inicio
let buttonFuerza = document.getElementById("buttonFuerza");
let buttonCarisma = document.getElementById("buttonCarisma");

// -----------------------------------------

//Asignacion de puntos iniciales

let puntos = 3;

buttonFuerza.addEventListener("click", function() {
    if(puntos > 0){
        countFuerza++
        statFuerza.innerHTML = countFuerza
    }
    puntos--

    if(puntos == 0){
        buttonFuerza.style="display: none !important;"
        buttonCarisma.style="display: none !important;"
    }
})

buttonCarisma.addEventListener("click", function(){
    if(puntos > 0){
        countCarisma++
        statCarisma.innerHTML = countCarisma
    }
    puntos--
    if(puntos == 0){
        buttonFuerza.style="display: none !important;"
        buttonCarisma.style="display: none !important;"
    }
})


// if(puntos == 0){
//     buttonCarisma.style="display: none !important;"
//     buttonFuerza.style="display: none !important;"
// }

// let puntos = 0;

// function sumaPuntosInicio(){
    
//     buttonFuerza.addEventListener("click", function() {
//         if(puntos > 0){
//             countFuerza++
//             statFuerza.innerHTML = countFuerza
//         }
//         puntos--
//     })
    
//     buttonCarisma.addEventListener("click", function(){
//         if(puntos > 0){
//             countCarisma++
//             statCarisma.innerHTML = countCarisma
//         }
//         puntos--
//     })
    
//     if(puntos == 0){
//         buttonFuerza.style="display: none !important;"
//         buttonCarisma.style="display: none !important;"
//     }
// }

// buttonCarisma.addEventListener("click", sumaPuntosInicio())
// -----------------------------------------

