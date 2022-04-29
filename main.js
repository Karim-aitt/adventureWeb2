// -----------------------------------------CONTADORES

let countSit = 1;   //situacion

let countFuerza = 5;    //statFuerza
let statFuerza = document.getElementById("statFuerza");

let countCarisma = 5;   //statCarisma
let statCarisma = document.getElementById("statCarisma");

let playerCoins = 0;      //coins
let coins = document.getElementById("coins");
// -------------------------VIDA
let vidaUser = 100;
let vidaEnemigo = 100;
// -------------------------DAÑO
let dañoUser = 10 + countFuerza;
let dañoEnemigo = 10;

let enemigoFacil = 2;
let enemigoMedio = 5;
let enemigoDificil = 10;

// -----------------------------------------TRAMAS
let situacionInicial = document.getElementById("situacionInicial");
let situacionDos = document.getElementById("situacionDos");
let situacionTres = document.getElementById("situacionTres");
let situacionCuatro = document.getElementById("situacionCuatro");
let situacionCinco = document.getElementById("situacionCinco");

let sitCuatroCarismaExito = document.getElementById("sitCuatroCarismaExito");
let sitCuatroCarismaFallo = document.getElementById("sitCuatroCarismaFallo");

let situacionSeisTaberna = document.getElementById("situacionSeisTaberna");
let situacionSeisTabernaDos = document.getElementById("situacionSeisTabernaDos");
let situacionSeisTienda = document.getElementById("situacionSeisTienda");

// -----------------------------------------SELECTORES

//Cajas de texto
let capitulo = document.getElementById("capitulo");
let explicacion = document.getElementById("explicacion");
let pregunta = document.getElementById("divPregunta");

// charla
let labelTalk1 = document.getElementById("labelTalk1");
let labelTalk2 = document.getElementById("labelTalk2");
let labelTalk3 = document.getElementById("labelTalk3");
let labelTalk4 = document.getElementById("labelTalk4")
// -----------------------------------------

//Displays
let charlaDisplay = document.getElementById("divCharlaDisplay");
let charla2Display = document.getElementById("divCharla2Display");
let resolverDisplay = document.getElementById("divResolverDisplay");
let combateDisplay = document.getElementById("divCombateDisplay");
let buttonInicioDisplay = document.getElementById("divButtonInicio");
let preguntaDisplay = document.getElementById("divPregunta");
let vidaDisplay = document.getElementById("divVidaDisplay");
let continuarDisplay = document.getElementById("divButtonContinuar");
let tiendaDisplay = document.getElementById("divOpcionesTienda");
let SalirTiendaDisplay = document.getElementById("divButtonSalirTienda");

//Barras de Vida
let barraVidaUser = document.getElementById("barraVidaUser");
let barraVidaEnemigo = document.getElementById("barraVidaEnemigo");

//OBJETOSAVENTURA
let inventario = document.getElementById("divInventario");

// -----------------------------------------

// --------------- BOTONES
//combate
let buttonFight = document.getElementById("buttonFight");
let buttonShield = document.getElementById("buttonShield");
//input
let inputResolver = document.getElementById("inputResolver");
//charla
let buttonTalk1 = document.getElementById("buttonTalk1");
let buttonTalk2 = document.getElementById("buttonTalk2");
let buttonTalk3 = document.getElementById("buttonTalk3");
let buttonTalk4 = document.getElementById("buttonTalk4");
//MODAL
let buttonModalExito = document.getElementById("buttonModalExito");
let buttonSeguirModalExito = document.getElementById("buttonSeguirModalExito");
let buttonModalMasFuerza = document.getElementById("buttonModalMasFuerza");
let buttonModalMasCarisma = document.getElementById("buttonModalMasCarisma");

//Solo en inicio
let buttonFuerza = document.getElementById("buttonFuerza");
let buttonCarisma = document.getElementById("buttonCarisma");
let buttonInicio = document.getElementById("buttonInicio");

//continuar
let buttonContinuar = document.getElementById("buttonContinuar");

//TIENDA
let buttonPocion = document.getElementById("buttonPocion");
let buttonEspadaGrande = document.getElementById("buttonEspadaGrande");
let buttonMochila = document.getElementById("buttonMochila");
let buttonCuerda = document.getElementById("buttonCuerda");
let buttonSalirTienda = document.getElementById("buttonSalirTienda");

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

// -----------------------------------------

// INICIO del Juego
//situacionInicial countSit 1
buttonInicio.addEventListener("click", function(){
    if(countSit == 1){
        countSit++
    }

    if(puntos == 0){
        
        capitulo.innerHTML = "Capitulo 1: El regreso";
        explicacion.style="display: none !important;"
        buttonInicioDisplay.style="display: none !important"

        pregunta.style="display: inherit"
        situacionInicial.style="display: inherit";
        charlaDisplay.style="display: flex";

        labelTalk1.innerHTML = "<strong><em>Grito</em>: ¿Quién anda ahí?</strong>";
        labelTalk2.innerHTML = "<strong>¡Sal para que te vea!</strong>"
        
    }

    console.log(countSit)
})

//SITUACION 2
// situacionDos countSit 2 => 3
        
buttonTalk1.addEventListener("click", function(){
    if(countSit == 2){
        countSit++
    }

    if(countSit == 2 || countSit == 3){

        situacionInicial.style="display: none !important;";
        situacionDos.style="display: inherit";
        pregunta.innerHTML = "<h3><strong>¡Defiendete!</strong></h3";

        //BOTONES
        charlaDisplay.style="display: none !important;";
        vidaDisplay.style="display: flex";
        combateDisplay.style="display: flex";

    }

})

buttonTalk2.addEventListener("click", function(){
    if(countSit == 2){
        countSit++
    }

    if(countSit == 2 || countSit == 3){

        situacionInicial.style="display: none !important;";
        situacionDos.style="display: inherit";
        pregunta.innerHTML = "<h3><strong>¡Defiendete!</strong></h3";

        //BOTONES
        charlaDisplay.style="display: none !important;";
        vidaDisplay.style="display: flex";
        combateDisplay.style="display: flex";

    }

})

//SITUACION 2 COMBATE
//situacionDos countSit 3
function quitaVidas(){
    let x;
    if(vidaEnemigo > 10){
        x = vidaEnemigo -= dañoUser;
    }
    return x
}
function quitaVidasEnemy(){
    let x;
    if(vidaEnemigo > 10){
        x = vidaUser -= dañoEnemigo;
    }
    return x;
}

function protection(){

    let x;
    if(vidaEnemigo >= 10){
        x = dañoUser - dañoEnemigo
        if(x < 0){
            return vidaUser -= Math.abs(x)
        }   
    }
    return vidaUser
}

function protectionEnemy(){
    let x;
    if(vidaEnemigo >= 10){
        x = dañoEnemigo - dañoUser;
        if(x < 0){
            return vidaEnemigo -= Math.abs(x)
        }
    }
    return vidaEnemigo
}

buttonFight.addEventListener("click", function(){
    let random = Math.floor(Math.random()* (2 - 1 + 1))+1;
    let array = ["prueba", quitaVidas(), protectionEnemy()]

    if(vidaEnemigo >= 10){
        barraVidaEnemigo.style=`width: ${array[random]}%`;
        barraVidaUser.style=`width: ${quitaVidasEnemy()}%`;
            if(vidaEnemigo <= 10){
                barraVidaEnemigo.style="width: 0%"
            }
            if(vidaUser <= 10){
                barraVidaUser.style="width: 0%"
            }
    }
    if(vidaEnemigo <= 10){
        barraVidaEnemigo.style="width: 0%"
    }
    if(vidaUser <= 10){
        barraVidaUser.style="width: 0%"
    }
    if(vidaEnemigo == 0 || vidaEnemigo <= 10){

        vidaDisplay.style="display: none !important"
        situacionDos.style="display: none !important"
        preguntaDisplay.style="display: none !important"
        buttonModalExito.style="display: flex";
    
    }
      
console.log(vidaEnemigo)
console.log(vidaUser)
    
})

buttonShield.addEventListener("click", function(){
    if(vidaEnemigo >= 10){
        barraVidaUser.style=`width: ${protection()}%`
        barraVidaEnemigo.style=`width: ${protectionEnemy()}%`
            if(vidaUser <= 10){
                barraVidaUser.style="width: 0%"
            }
            if(vidaEnemigo <= 10){
                barraVidaEnemigo.style="width: 0%"
            }
    }
    if(vidaEnemigo <= 10){
        barraVidaEnemigo.style="width: 0%"
    }
    if(vidaUser <= 10){
        barraVidaUser.style="width: 0%"
    }
    if(vidaEnemigo == 0 || vidaEnemigo <= 10){

        vidaDisplay.style="display: none !important"
        situacionDos.style="display: none !important"
        preguntaDisplay.style="display: none !important"
        buttonModalExito.style="display: flex";
    
    }
})
buttonModalExito.addEventListener("click", function(){
    vidaEnemigo = 100;
    barraVidaEnemigo.style="width: 100%"
    console.log(vidaEnemigo);
})

// MODAL EXITO
let puntosModalExito = 1;

buttonModalMasFuerza.addEventListener("click", function(){
    if(puntosModalExito > 0){
        countFuerza++
        playerCoins++
        statFuerza.innerHTML = countFuerza
        coins.innerHTML = playerCoins
    }
    puntosModalExito--

    if(puntosModalExito == 0){
        buttonModalMasFuerza.style="display: none !important;"
        buttonModalMasCarisma.style="display: none !important;"
    }
})

buttonModalMasCarisma.addEventListener("click", function(){
    if(puntosModalExito > 0){
        countCarisma++
        playerCoins++
        statCarisma.innerHTML = countCarisma
        coins.innerHTML = playerCoins
    }
    puntosModalExito--

    if(puntosModalExito == 0){
        buttonModalMasFuerza.style="display: none !important;"
        buttonModalMasCarisma.style="display: none !important;"
    }
})

// ---------------------------------- FIN MODAL EXITO 

buttonSeguirModalExito.addEventListener("click", function(){
    
        if(countSit == 3){
            countSit++
        }
            pregunta.innerHTML="<h3><strong>¿Cúal es la contraseña?</strong></h3"
            pregunta.style="display: inherit";
            situacionTres.style="display: inherit";
            charlaDisplay.style="display: flex";
            combateDisplay.style="display: none";
            buttonModalExito.style="display: none"

            labelTalk1.innerHTML = "<strong>Soy de aquí de toda la vida ¿No me reconoces?</strong>";
            labelTalk2.innerHTML = "<strong>La contraseña es... </strong>"
            
        
        console.log(countSit)
    
})

buttonTalk2.addEventListener("click", function(){
    if(countSit == 4){
        situacionCuatro.style="display: inherit";
        situacionTres.style="display: none";
        charlaDisplay.style="display: none";

        pregunta.innerHTML="<h4>Puede devorar todas las cosas: plantas, bestias, flores y aves. Roe el hierro y muerde acero, mata reyes, arruina ciudades y puede derribar las altas montañas. ¿Qué es?</h4"
        resolverDisplay.style="display: flex";

    }
})


buttonTalk1.addEventListener("click", function(){

    if(countSit == 4){

        //SI PASA CARISMA
        if(countCarisma >= 7){
            situacionTres.style="display: none";
            charlaDisplay.style="display: none";
            sitCuatroCarismaExito.style="display: inherit";
            pregunta.style="display: none";

            continuarDisplay.style="display: inherit";
            

        //SI NO PASA CARISMA    
        } else {
            sitCuatroCarismaFallo.style="display: inherit";
            situacionTres.style="display: none";
            charlaDisplay.style="display: none";

            pregunta.innerHTML="<h4>Puede devorar todas las cosas: plantas, bestias, flores y aves. Roe el hierro y muerde acero, mata reyes, arruina ciudades y puede derribar las altas montañas. ¿Qué es?</h4"
            resolverDisplay.style="display: flex";

        }
        

    }
})
// ---------------------------------------------- ACERTIJO TRAMA 4
let inputRespuesta = "el tiempo"
let inputValue = "";

function getValueInput(){
    inputValue = document.getElementById("inputResolver").value;
    inputValue = inputValue.toLowerCase();
}

inputButton.addEventListener("click", function(){
    getValueInput();
    if(inputValue === inputRespuesta){

        
        sitCuatroCarismaFallo.style="display: none";
        situacionCuatro.style="display: none";

        situacionCinco.style="display: inherit";
        preguntaDisplay.style="display: inherit";
        pregunta.innerHTML="<h3>¿A donde te dirijes?</h3>";

        charlaDisplay.style="display: flex";
        resolverDisplay.style="display: none !important"; 

        labelTalk1.innerHTML="<strong>A la taberna INPUT</strong>"
        labelTalk2.innerHTML="<strong>A la tienda INPUT</strong>"
        countSit++
        console.log(countSit)

    } else {
        inputResolver.placeholder="No es correcto, otra oportunidad"
        inputResolver.value=""
        inputButton.classList.add("bg-danger");
        console.log("nop")

        //meter condicion de perdida (3 oportunidades)
    }

})

// BOTON CONTINUAR DE SI PASA CARISMA
buttonContinuar.addEventListener("click", function(){

    sitCuatroCarismaExito.style="display: none";
    continuarDisplay.style="display: none";

    situacionCinco.style="display: inherit";
    preguntaDisplay.style="display: inherit";
    pregunta.innerHTML="<h3>¿A donde te dirijes?</h3>"

    charlaDisplay.style="display: flex"
    labelTalk1.innerHTML="<strong>A la taberna CONT</strong>"
    labelTalk2.innerHTML="<strong>A la tienda CONT</strong>"
    countSit++  // -------------------------------------COUNTSIT 4 -> 5
    console.log(countSit + "" + "Si pasa carisma");
})


// BUTTON TALK1 DE SITUACION CINCO (A LA TIENDA)
buttonTalk2.addEventListener("click", function(){
    if(countSit == 5){

        situacionCinco.style="display: none !important"
        situacionSeisTienda.style="display: inherit !important"
        preguntaDisplay.style="display: inherit"
        pregunta.innerHTML="<h3>¿Qué necesitas joven?</h3>"

        charlaDisplay.style="display: none !important"
        tiendaDisplay.style="display: flex !important"

        document.getElementById("labelPrecioPocionVida").innerHTML=`<strong>Pocion de vida</strong> [<i class="fa-solid fa-coins text-warning"></i> <strong>1</strong>]`
        document.getElementById("labelPrecioEspadaGrande").innerHTML=`<strong>Espada grande</strong> [<i class="fa-solid fa-coins text-warning"></i> <strong>3</strong>]`
        document.getElementById("labelPrecioMochila").innerHTML=`<strong>Mochila</strong> [<i class="fa-solid fa-coins text-warning"></i> <strong>5</strong>]`
        document.getElementById("labelPrecioCuerda").innerHTML=`<strong>Cuerda</strong> [<i class="fa-solid fa-coins text-warning"></i> <strong>2</strong>]`
    }

})

// ------------ SISTEMA TIENDA ----------
//Inventario jugador:
let pocionDeVida = 0;
let espadaGrande = 0;
let mochila = 0;
let cuerda = 0;

//tienda
let precioPocion = 1;
let precioEspadaGrande = 3;
let precioMochila = 5;
let precioCuerda = 2;

buttonPocion.addEventListener("click", function(){
    if(playerCoins >= precioPocion){
        playerCoins = playerCoins - precioPocion;
        coins.innerHTML = playerCoins
        inventario.style="display: inherit";
        pocionDeVida++

    } else {
        buttonPocion.classList.remove("btn-warning");
        buttonPocion.classList.add("btn-danger");
        buttonPocion.innerHTML="No tienes dinero";
    }
})

buttonEspadaGrande.addEventListener("click", function(){
    if(playerCoins >= precioEspadaGrande){
        playerCoins = playerCoins - precioEspadaGrande;
        coins.innerHTML = playerCoins
        espadaGrande++
        //meter objeto

    } else {
        buttonEspadaGrande.classList.remove("btn-warning");
        buttonEspadaGrande.classList.add("btn-danger");
        buttonEspadaGrande.innerHTML="No tienes dinero";
    }
})

buttonMochila.addEventListener("click", function(){
    if(playerCoins >= precioMochila){
        playerCoins = playerCoins - precioMochila;
        coins.innerHTML = playerCoins
        inventario.style="display: inherit";

    } else {
        buttonMochila.classList.remove("btn-warning");
        buttonMochila.classList.add("btn-danger");
        buttonMochila.innerHTML="No tienes dinero";
    }
})

buttonCuerda.addEventListener("click", function(){
    if(playerCoins >= precioCuerda){
        playerCoins = playerCoins - precioCuerda;
        coins.innerHTML = playerCoins
        inventario.style="display: inherit";

    } else {
        buttonCuerda.classList.remove("btn-warning");
        buttonCuerda.classList.add("btn-danger");
        buttonCuerda.innerHTML="No tienes dinero";
    }
})
// ------------------------------------------------- SALIR TIENDA
buttonSalirTienda.addEventListener("click", function(){
    if(countSit == 5){
    situacionSeisTienda.style="display: none !important"
    tiendaDisplay.style="display: none !important"

    situacionCinco.style="display: inherit";
    preguntaDisplay.style="display: inherit";
    pregunta.innerHTML="<h3>¿A donde te dirijes?</h3>"

    charlaDisplay.style="display: flex"
    labelTalk1.innerHTML="<strong>A la taberna CONT</strong>"
    labelTalk2.innerHTML="<strong>A la tienda CONT</strong>"
    
    }
})

// BUTTON TALK1 DE SITUACION CINCO (A LA TABERNA)

buttonTalk1.addEventListener("click", function(){
    if(countSit == 5){
        situacionCinco.style="display: none !important"
        pregunta.innerHTML="<h3>¿Qué haces?</h3>"
        labelTalk3.innerHTML="<strong>Te acercas a tu amigo</strong>"
        labelTalk4.innerHTML="<strong>Te vas</strong>"
    
        situacionSeisTaberna.style="display: inherit";
        charlaDisplay.style="display: none !important";
        charla2Display.style="display: flex";
        console.log(countSit + "antes")
        countSit++
        console.log(countSit + "despues")
        }

})
// HAY QUE SUSTITUIR buttonTalk1 \| por buttonTalk3 

buttonTalk3.addEventListener("click", function(){
    
    if(countSit == 6){
        situacionSeisTabernaDos.style="display: inherit"
        pregunta.innerHTML="<h3>¿Puedes ayudarme a recuperarla? Te pagaré bien</h3>"

        situacionSeisTaberna.style="display: none !important"

        labelTalk3.innerHTML="<strong>Tranquilo, yo me encargo</strong>"
        labelTalk4.innerHTML="<strong>No, no es mi asunto</strong>"
    }

})