//Selectores
let palabras = ["ALURA", "ORACLE", "ONE", "JAVASCRIPT", "HTML", "CSS"];
let tablero = document.getElementById("forca").getContext("2d");

let palabraSecreta = "";
let palabraAdivinada = "";
let letras = [];
let errores = 8;
var step = 0;
const draws = [
    'horca',
    'cabeza',
    'cuerpo',
    'brazoDerecho',
    'brazoIzquierdo',
    'piernaDerecha',
    'piernaIzquierda',
    'pieDerecho',
    'pieIzquierdo',
    'finishHim',
]

//Iniciar juego
function iniciarJuego() {
    tablero = document.getElementById("forca").getContext("2d");
    document.getElementById("div-desaparece").style.display = "none";
    document.getElementById("div-aparece-ahorcado").style.display = "flex";

    palabraSecreta = "";
    palabraAdivinada = "";
    letras = [];
    errores = 8;
    step = 0;

    escojerPalabraSecreta();
    dibujarCanvas();
    dibujarLinea();

    document.onkeydown = (e) => {
        let letra = e.key.toUpperCase();

        if (comprobarletra(letra) && palabraSecreta.includes(letra)) {
            for (let i = 0; i < palabraSecreta.length; i++) {
                if (palabraSecreta[i] === letra) {
                    escribirLetraCorrecta(i);
                }
            }
        } else {
            adicionarLetraIncorrecta();
            escribirLetraIncorrecta(letra, errores);
        }
    }
}

function escojerPalabraSecreta() {
    let palabra = palabras[Math.floor(Math.random() * palabras.length)]
    palabraSecreta = palabra;
    for(var l =0; l <palabraSecreta.length; l++ ){
        palabraAdivinada = palabraAdivinada + " ";
    }
    console.log(palabraSecreta);
    console.log(palabraAdivinada);
}

function comprobarletra(key) {
    let estado = false;
    if (key >= 65 && letras.indexOf(key) || key >= 90 && letras.indexOf(key)) {
        letras.push(key);
        console.log(key);
        return estado;
    } else {
        estado = true;
        console.log(key);
        return estado;
    }

}

function adicionarLetraIncorrecta() {
    errores -= 1;
    console.log(errores);

    dibujarPerson(draws[step++])
}

