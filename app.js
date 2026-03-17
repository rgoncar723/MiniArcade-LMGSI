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
const numeroIntroducido = document.querySelector('.inputNumero');

function inicializarJuego(){
    numeroSecreto = Math.ceil(Math.randor()*100); //Genera un numero aleatorio entre 1 y 100
    numeroIntentos = 0;
    numerosIntroducidos = [];
}


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