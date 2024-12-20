/* PRIMERA PARTE
1. Crear el HTML 
2. Seleccionar los elementos en el HTML con los que se vaya a interactuar: select, boton y p
3. Escuchar evento sobre el boton jugar 
    Recoger la opción seleccionada en select
    Generar un numero aleatorio del 1 al 9: 
        <= 3 piedra
        >= 7 papel
        else tijera
    Comparar el movimiento de la jugadora
    Mensaje en p: 
        mismo resultado: Empate
        gana jugadora: Has ganado
        gana comptadora: Has perdido    
*/

'use strict';

const select = document.querySelector (".js-select");
const btn = document.querySelector (".js-btn");
const result = document.querySelector (".js-result");
let userScore = document.querySelector (".js-userScore");
let compuScore = document.querySelector (".js-compuScore");

// empieza el contador de las variables a 0
let userScore1 = 0;
let compuScore1 = 0;


// Generar numero aleatorio

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    }

// Comprobar el resultado dque da la computadora
function resultCompu (){
    const numRandom = getRandomNumber (9);
        if (numRandom <= 3){
            return "piedra"
        } else if (numRandom >= 7){
            return "papel"
        } else {
            return "tijera"
        }
}


// Funcion con todo lo que tiene que pasar en el boton
function handleClick (event) {
    event.preventDefault ();
    
    // Los dos resultados
    const userMove = select.value;
    const compuMove = resultCompu();
 
    
    // Lo que pasa
        // gana usuario
    if (userMove === compuMove){
        result.innerHTML = "Empate";

        //gana usuario
    }else if (
        (userMove === "piedra" && compuMove === "tijera") || (userMove === "papel" && compuMove === "piedra") || (userMove === "tijera" && compuMove === "papel")){
        result.innerHTML = "Has ganado";
        userScore1++;
        // pierde usuario
    } else {
        result.innerHTML = "Has perdido"
        compuScore1++;
    }

    compuScore.innerHTML = `Computadora: ${compuScore1}`;
    userScore.innerHTML= `Jugador: ${userScore1}`;
}





// Escuchamos el boton "jugar" btn
btn.addEventListener ("click", handleClick)

