const palabras = ['MANZANA', 'BANANA', 'SANDIA', 'NARANJA', 'UVA', 'TOMATE', 'KIWI', 'MANGO'];
let palabra = selectRandomWord(palabras);
let intentos = 6;
let grid;

function selectRandomWord(wordList) {
    return wordList[Math.floor(Math.random() * wordList.length)];
}

console.log(palabra);

window.addEventListener('load', init);

function init() {
    console.log('Esto se ejecuta solo cuando se carga la pagina web');
    grid = document.getElementById("grid");
}

const button = document.getElementById("guess-button");

button.addEventListener("click", intentar);

function intentar() {
    const INTENTO = leerIntento();
    console.log(INTENTO);
    const row = document.createElement('div');
    row.className = 'row';

    if (INTENTO === palabra) {
        for (let i in palabra) {
            const span = document.createElement('span');
            span.className = 'letter';
            span.innerHTML = palabra[i];
            span.style.backgroundColor = '#79b851';
            row.appendChild(span);
        }
        grid.appendChild(row);  // Agrega la fila al contenedor (grid)
        terminar("<h1>GANASTE!😀</h1>");
        return;
    }

    for (let i in palabra) {
        const span = document.createElement('span');
        span.className = 'letter';

        if (INTENTO[i] === palabra[i]) {
            span.innerHTML = INTENTO[i];
            span.style.backgroundColor = '#79b851';
        } else if (palabra.includes(INTENTO[i])) {
            span.innerHTML = INTENTO[i];
            span.style.backgroundColor = '#f3c237';
        } else {
            const letraIntento = INTENTO[i] ?? '-';
            console.log(letraIntento, "GRIS");
            span.innerHTML = letraIntento;
            span.style.backgroundColor = 'grey';
        }
        row.appendChild(span);
    }

    intentos--;

    if (intentos === 0) {
        terminar("<h1>PERDISTE!😖</h1>");
    }

    grid.appendChild(row);  // Agrega la fila al contenedor (grid)
}

function leerIntento() {
    let intento = document.getElementById("guess-input").value;
    return intento.toUpperCase();
}

function terminar(mensaje) {
    const input = document.getElementById("guess-input");
    const boton = document.getElementById("guess-button");
    input.disabled = true;
    boton.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}
