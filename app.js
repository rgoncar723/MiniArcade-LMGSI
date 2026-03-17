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
let numeroSecreto;
const numeroIntentos = 0;
const numerosIntroducidos = [];
const numeroIntroducido = document.querySelector('#inputNumero');
const btnComprobar = document.querySelector('.btnComprobarNumero');
const btnReinicar = document.querySelector('.btnReiniciarNumero');
const mensajeNumero = document.querySelector('.mensajeNumero');
const mensaje = document.querySelector('#mensaje');

function inicializarJuego(){
    numeroSecreto = Math.ceil(Math.randor()*100); //Genera un numero aleatorio entre 1 y 100
    numeroIntentos = 0;
    numerosIntroducidos = [];
}
function verificarNumero(){
    if(numeroIntroducido < 0 || numeroIntroducido > 100){ //Comprueba que el número introducido no sea mayor de 100 pero tampoco menor que 0. 
        alert('EL numero no puede ser menor que 0 ni mayor de 100');
       return;
    }
    if(numerosIntroducidos.includes(numeroIntroducido)){ //Comprueba si el numero que ha introducido el usuario, no ha sido introducido anteriormente.
        alert('Ya has introducido este numero, prueba con otro');
        return;
    }
    numeroIntentos++;
    numerosIntroducidos.push(numeroIntroducido);
    if(numeroIntroducido == numeroSecreto){
        mensaje.innerHTML = `Has Adivinado el numero ${numeroSecreto}, en ${numeroIntentos} intentos`
    } else {
        const diferencia = Math.abs(numeroIntroducido - numeroSecreto);
        const pista = numeroSecreto > numeroIntroducido ? "MAYOR" : "MENOR";
        if(diferencia > 20 ){
            mensaje.innerHTML = "frio....frio....";
        } else if (diferencia >= 10){
            mensaje.innerHTML = "estas caliente....caliente";
        } else {
            mensaje.innerHTML = "Te has quemado";
        }
    }
}
function mostrarMenasje(mensaje){
    mensaje.textContent = "";
}
btnComprobar.addEventListener("click", verificarNumero);
btnReiniciar.addEventListener("click", inicializarJuego);


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