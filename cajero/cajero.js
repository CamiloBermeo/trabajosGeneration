const prompt = require("prompt-sync")();
let nombre = prompt("¿Cuál es tu nombre? ");
console.log("Bienvenido, " + nombre + "!");
let acceso = true;
let resultado;
while (acceso == true) {
    console.log("Elige un numero para la operacion:");
    console.log("1. Suma");
    console.log("2. Resta:");
    console.log("3. Multiplicación:");
    console.log("4. Division:");
    console.log("5. SALIR:");

    let operacion = parseInt(prompt("¿Que operación desea hacer?"));
    console.log(operacion);
    if (operacion > 5 || operacion < 0) {
        console.log("operacion no valida");
    } else {
            let num1 = Number(prompt("Escribe el primer número"));
            let num2 = Number(prompt("Escribe el segundo número"));
        

        if (operacion == 1) {
            resultado = num1 + num2;
            console.log("El resultado de su operación es: ", resultado);
        }
        if (operacion == 2) {
            resultado = num1 - num2;
            console.log("El resultado de su operación es: ", resultado);
        }
        if (operacion == 3) {
            resultado = num1 * num2;
            console.log("El resultado de su operación es: ", resultado);
        }
        if (operacion == 4) {
            resultado = num1 / num2;
            console.log("El resultado de su operación es: ", resultado);
        } if (operacion == 5) {
            acceso = false;
        }
    }

}