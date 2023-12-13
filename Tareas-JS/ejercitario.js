/* Variables y tipo de datos*/
// Crea una variable numero y asígnale un valor de tipo number.
var numero = 5;

//Crea una variable texto y asígnale un valor de tipo string.
var texto = "Hola, mundo!";

//Crea una variable verdadero y asígnale un valor de tipo boolean que represente una afirmación verdadera.
var verdadero = true;

// Crea una variable falso y asígnale un valor de tipo boolean que represente una afirmación falsa.
var falso = false;

// Crea una variable nulo y asígnale un valor de tipo null.
var nulo = null;

// Crea una variable indefinido y asígnale un valor de tipo undefined.
var indefinido = undefined;

// Crea una variable arreglo y asígnale un arreglo con varios valores de diferentes tipos de datos.
var vector = [21, "Lugo", true];

// Imprime en la consola el valor de la variable número y el tipo de dato que almacena.
console.log(numero, typeof numero);

// Imprime en la consola el valor de la variable texto y el tipo de dato que almacena.
console.log(texto, typeof texto);

// Imprime en la consola el valor de la variable verdadero y el tipo de dato que almacena.
console.log(verdadero, typeof verdadero);

// Imprime en la consola el valor de la variable falso y el tipo de dato que almacena.
console.log(falso, typeof falso);

// Imprime en la consola el valor de la variable nulo y el tipo de dato que almacena.
console.log(nulo, typeof nulo);

// Imprime en la consola el valor de la variable indefinido y el tipo de dato que almacena.
console.log(indefinido, typeof indefinido);

// Imprime en la consola el valor de la variable arreglo y el tipo de dato que almacena.
console.log(vector, typeof vector);

/*Decisiones en javascript (if,if else, switch)*/
// Escribe un programa que tome un número como entrada y muestre un mensaje en la consola indicando si es mayor, menor o igual a 10.
var num1 = prompt("Ingresa un número (1):");
if (num1 > 10) {
    console.log("Es mayor a 10.");
} else if (num1 < 10) {
    console.log("Es menor a 10.");
} else {
    console.log("Es igual a 10.");
}

// Escribe un programa que solicite al usuario que ingrese un número y verifique si es par o impar.
var num2 = prompt("Ingresa un número (2):");
if (num2 % 2 === 0) {
    console.log("Es par");
} else {
    console.log("Es impar");
}

// Escribe un programa que solicite al usuario que ingrese una letra y verifique si es una vocal o una consonante.
var letra = prompt("Ingresa una letra:").toLowerCase();
if ("aeiou".includes(letra)) {
    console.log("Es una vocal");
} else {
    console.log("Es una consonante");
}

// Escribe un programa que solicite al usuario que ingrese una edad y verifique si es mayor o menor de edad.
var edad = prompt("Ingresa tu edad:");
if (edad >= 18) {
    console.log("Eres mayor");
} else {
    console.log("Eres menor");
}

// Escribe un programa que solicite al usuario que ingrese un número del 1 al 7 y muestre un mensaje en la consola indicando el día de la semana correspondiente.
var dia = prompt("Ingresa un número del 1 al 7:");
switch (parseInt(dia)) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Lunes");
        break;
    case 3:
        console.log("Martes");
        break;
    case 4:
        console.log("Miércoles");
        break;
    case 5:
        console.log("Jueves");
        break;
    case 6:
        console.log("Viernes");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Número inválido");
}

//Funciones
//Escribe una función que tome dos números como argumentos y devuelva su suma.
function sumarNumeros(a, b) {
    return a + b;
}

// Escribe una función que tome un número como argumento y devuelva true si es par o false si es impar.
function esPar(numero) {
    if (numero % 2 === 0) {
        result = true;
    } else {
        result = false;
    }
    return result;
}

// Escribe una función que tome un array de números como argumento y devuelva la suma de sus elementos.
function sumaArray(numeros) {
    let total = 0;
    for (let i = 0; i < numeros.length; i++) {
        total += numeros[i];
    }
    return total;
}

// Escribe una función que tome un array de strings como argumento y devuelva la longitud del string más largo.
function longitudMaxima(strings) {
    let mayor = strings[0].length;
    for (let i = 0; i < strings.length; i++) {
        aux = strings[i].length
        if (aux > mayor){
            mayor = aux
        }
    }
    return aux;
}

// Escribe una función que tome un objeto como argumento y devuelva un array con los valores de todas sus propiedades.
function valoresPropiedades(objeto) {
    return Object.values(objeto);
}

// Prueba de funciones
console.log(sumarNumeros(10, 5));
console.log(esPar(4));
console.log(sumaArray([10, 1, 5, 4]));
console.log(longitudMaxima(["Carlos", "Lugo", "Zacarias"]));
console.log(valoresPropiedades({ a: 1, b: "dos", c: true }));


//Vectores
//Escribe una función que tome un array de números como argumento y devuelva el número más grande.
function numeroMasGrande(numeros) {
    let mayor = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
    }

    return mayor;
}
//Escribe una función que tome un array de números como argumento y devuelva un array con los números ordenados de menor a mayor.
function ordenarNumeros(numeros) {
    arrayOrdenado = numeros.slice().sort((a, b) => a - b);
    return arrayOrdenado
}
//Escribe una función que tome dos arrays como argumentos y devuelva un array que contenga los elementos comunes entre ambos.
function elementosComunes(arr1, arr2) {
    var resultado = []
    for (let i = 0; i < arr1.length; i++) {
        var aux = arr1[i];
        if (arr2.includes(aux)) {
            resultado.push(aux);
        }
    }
    return resultado;
}
//Escribe una función que tome un array de strings como argumento y devuelva un nuevo array que contenga los strings convertidos a mayúsculas.
function stringsMayusculas(strings) {
    for (let i = 0; i < strings.length; i++) {
     strings[i] = strings[i].toUpperCase();
    }
    return strings
}
//Escribe una función que tome un array de números como argumento y devuelva un nuevo array que contenga la suma acumulativa de sus elementos.
function sumaAcumulativa(numeros) {
    var resultado = [];
    var suma = 0;
    for (var i = 0; i < numeros.length; i++) {
        suma += numeros[i];
        resultado.push(suma);
    }
    return resultado;
}
//Pruebas de Vectores
const vector1 = [5, 2, 9, 1, 7];
const vector2 = [2, 4, 5, 6, 9];
const vector3 = ["carlos", "javascript", "clases"];12
console.log(numeroMasGrande(vector1));
console.log(ordenarNumeros(vector1));
console.log(elementosComunes(vector1, vector2));
console.log(stringsMayusculas(vector3));
console.log(sumaAcumulativa(vector2));

//Bucles
//Escribe un bucle for que imprima en la consola los números del 1 al 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//Escribe un bucle while que imprima en la consola los números del 1 al 5.
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

//Crea un vector con los números del 1 al 5. Escribe un bucle for que imprima en la consola cada uno de los elementos del vector.
const vector4 = [1, 2, 3, 4, 5];
for (let i = 0; i < vector4.length; i++) {
    console.log(vector4[i]);
}

//Crea una función que reciba un número n y devuelva la suma de todos los números del 1 al n. Utiliza un bucle for para calcular la suma y muestra el resultado en la consola.
function sumaHastaN(n) {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i;
    }
    return suma;
}

//Crea una función que reciba un vector y devuelva la suma de todos sus elementos. Utiliza un bucle while para calcular la suma y muestra el resultado en la consola.
function sumaVector(vector) {
    let suma = 0;
    let i = 0;
    while (i < vector.length) {
        suma += vector[i];
        i++;
    }

    return suma;
}
//Prueba bucles
const vector5 = [1, 2, 3, 4];
console.log(sumaHastaN(5));
console.log(sumaVector(vector5));

//DOM y eventos
//Crea un archivo HTML con un botón y un div vacío. Usa JavaScript para agregar un mensaje al div cuando se hace clic en el botón.
var div = document.getElementById('div');
var boton = document.getElementById('boton');
boton.addEventListener('click', function () {
    div.textContent = '¡Clic en el botón!';
});

//Crea una función que cambie el color de fondo de un elemento HTML a rojo cuando el mouse se mueve sobre él. Agrega esta función como un listener de evento para el div del ejercicio anterior.
div.addEventListener('mouseover', function () {
    div.style.backgroundColor = 'red';
});

//Crea una función que cambie el tamaño de fuente de un elemento HTML cuando se presiona una tecla en el teclado. Agrega esta función como un listener de evento para el div del ejercicio anterior.
div.addEventListener('keydown', function (event) {
    div.style.fontSize = '2em';
});

//Crea una función que cambie el contenido de un elemento HTML cuando se hace doble clic sobre él. Agrega esta función como un listener de evento para el div del ejercicio anterior.
div.addEventListener('dblclick', function () {
    div.textContent = '¡Doble clic!';
});


//Crea una función que cambie la imagen de fondo de un elemento HTML cuando se carga la página. Agrega esta función como un listener de evento para el body del documento.
window.addEventListener('load', init);

function init() {
    console.log('Esto se ejecuta solo cuando se carga la pagina web');
    document.body.style.backgroundImage = 'url("test.png")';
}