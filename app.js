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




// TODO: Funciones del juego

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

    if(valorInput < 0 || valorInput > 100){ //Comprueba que el número introducido no sea mayor de 100 pero tampoco menor que 0. 
        alert('EL numero no puede ser menor que 0 ni mayor de 100');
        numeroIntroducido.value = 0;
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
        mensaje.innerHTML = `¡Has adivinado el numero ${numeroSecreto}, en ${numeroIntentos} intentos!`
    } else {
        const diferencia = Math.abs(valorInput - numeroSecreto); //Calcula diferencia absoluta del numero introducido con el numero secreto
        const pista = numeroSecreto > valorInput ? "MAYOR" : "MENOR"; //Le ofrece una pista al usuario dependiendo de si el numero introducido es mayor o menor que el numero secreto.
        let temperatura = "";
        if(diferencia > 20 ){
            temperatura =  "frío....frío....";
        } else if (diferencia >= 10){
            temperatura = "Caliente!....caliente!";
        } else {
            temperatura = "¡Te has quemado!";
        }
        mensaje.innerHTML = ``;
       mensaje.innerHTML = `El numero es ${pista} y la temperatura es ${temperatura} y has utilizado los siguientes numeros ${numerosIntroducidos}`;

       
    }
    
}

// TODO: Eventos del juego
btnComprobar.addEventListener("click", verificarNumero);
btnReiniciar.addEventListener("click", inicializarJuego);

inicializarJuego();

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
const btnPiedra = document.querySelector('#btnPiedra');
const btnPapel = document.querySelector('#btnPapel');
const btnTijera = document.querySelector('#btnTijera');
const btnReiniciarPPT = document.querySelector('#btnReiniciarPPT');
const mensajePPT = document.querySelector('#mensajePPT');
const totalPPT = document.querySelector('#totalPPT');
const ganadasPPT = document.querySelector('#ganadasPPT');
const perdidasPPT = document.querySelector('#perdidasPPT');
const empatadasPPT = document.querySelector('#empatadasPPT');
const eleccionJugador = document.querySelector('#eleccionJugador');
const eleccionMaquina = document.querySelector('#eleccionMaquina');
let paritda = cargarPartida();

//LocalStorage
const CLAVE_STORAGE = "historial_PPT";

// TODO: Funciones del juego
function cargarPartida() {
    const raw = localStorage.getItem(CLAVE_STORAGE);
    
    if(raw === null) {
        return []
    }; 

    try {
        const datos = JSON.parse(raw);
        return Array.isArray(datos) ? datos : [];
    } catch (e) {
        console.error("Error al parsear la partida:", e);
        return [];
    }
}
function jugar(eleccionJugador){
    const opciones = ["Piedta","Papel","Tijera"];
    const eleccionMaquina = opciones[Math.floor(Math.random() * 3)]; //Puede escoger dentro del array O Piedra, o Papel, O Tijera
    if (eleccionJugador === eleccionMaquina) {
        resultado = "empatado";
    }else if ((eleccionJugador === "Piedra" && eleccionMaquina === "Tijera") || (eleccionJugador === "Papel" && eleccionMaquina === "Piedra") || (eleccionJugador === "Tijera" && eleccionMaquina === "Papel")
    ){ resultado = "ganado"; 

    } else {
        resultado = "perdido"
    }
     eleccionJugador.textContent = eleccionJugador;
     eleccionMaquina.textContent = eleccionMaquina;
     mensajePPT.textContent = `¡Has ${resultado.toLowerCase()}!`;

    localStorage.setItem(CLAVE_STORAGE, JSON.stringify(partida));

    }

// TODO: Eventos del juego

partida = cargarPartida();

jugar(eleccionJugador);


btnPiedra.addEventListener("click", jugar);
btnPapel.addEventListener("click",jugar);
btnTijera.addEventListener("click",jugar);
btnReiniciarPPT.addEventListener("click",cargarPartida);