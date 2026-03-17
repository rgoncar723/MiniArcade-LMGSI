// -------------------------------------
// Gestión de pestañas (NO MODIFICAR)
// -------------------------------------

const tabButtons = document.querySelectorAll(".tab-button");
const panels = document.querySelectorAll(".panel");

for (const button of tabButtons) {
    button.addEventListener("click", function () {
        const targetId = button.dataset.tab;

        for (const tabButton of tabButtons) {
            tabButton.classList.remove("active");
        }

        for (const panel of panels) {
            panel.classList.remove("active");
        }

        button.classList.add("active");
        document.getElementById(targetId).classList.add("active");
    });
}

// -------------------------------------
// 1. Adivina el número
// -------------------------------------

// TODO: Variables del juego
let numeroSecreto = 0;
let numeroIntentos = 0;
let numerosIntroducidos = [];

const numeroIntroducido = document.querySelector('#inputNumero');
const btnComprobar = document.querySelector('#btnComprobarNumero');
const btnReiniciar = document.querySelector('#btnReiniciarNumero');
const intentos = document.querySelector('#intentosNumero'); 
const mensaje = document.querySelector('#mensajeNumero');

function inicializarJuego(){
    numeroSecreto = Math.ceil(Math.random()*100); //Genera un numero aleatorio entre 1 y 100
    numeroIntentos = 0;
    numerosIntroducidos = [];

    mensaje.innerHTML = "";
    intentos.textContent = "0";
    numeroIntroducido.value = "";
    console.log("Número secreto: " + numeroSecreto);
}
function verificarNumero(){
    const valorInput = parseInt(numeroIntroducido.value);
    if (isNaN(valorInput)) {
        alert('Por favor, introduce un número válido');
        return;
    }

    if(valorInput < 0 || valorInput > 100){ //Comprueba que el número introducido no sea mayor de 100 pero tampoco menor que 0. 
        alert('EL numero no puede ser menor que 0 ni mayor de 100');
       return;
    }
    if(numerosIntroducidos.includes(valorInput)){ //Comprueba si el numero que ha introducido el usuario, no ha sido introducido anteriormente.
        alert('Ya has introducido este numero, prueba con otro');
        return;
    }
    numeroIntentos++;
    numerosIntroducidos.push(valorInput);
    intentos.textContent = numeroIntentos;

    if(valorInput === numeroSecreto){
        mensaje.innerHTML = `Has Adivinado el numero ${numeroSecreto}, en ${numeroIntentos} intentos`
    } else {
        const diferencia = Math.abs( numeroSecreto - numeroIntroducido);
        let pista = numeroSecreto > numeroIntroducido ? "MAYOR" : "MENOR";
        let temperatura = "";
        if(diferencia > 20 ){
            temperatura =  "frio....frio....";
        } else if (diferencia >= 10){
            temperatura = "estas caliente....caliente";
        } else {
            temperatura = "Te has quemado";
        }
       mensaje.innerHTML = `El numero es ${pista} y la temperatura es ${temperatura}`;
       mensaje.innerHTML = ``;
    }
    
}

btnComprobar.addEventListener("click", verificarNumero);
btnReiniciar.addEventListener("click", inicializarJuego);

inicializarJuego();


// TODO: Funciones del juego

// TODO: Eventos del juego


// -------------------------------------
// 2. Siete y medio
// -------------------------------------

// TODO: Variables del juego

// TODO: Funciones del juego

// TODO: Eventos del juego


// -------------------------------------
// 3. Piedra, papel o tijera
// -------------------------------------

// TODO: Variables del juego

// TODO: Funciones del juego

// TODO: Eventos del juego