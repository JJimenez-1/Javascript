/**
 * global vs local
 * function scope and hoisting
 */

var scope = "global";

function f() {

    var scope;          // La variable global se declara la primera de la función
    console.log(scope); // La función existe pero no tiene un valor todavia 
    scope = "local";    // Le añadimos el valor scope
    console.log(scope); // Se muestra local
}

f();

console.log(scope); // Muestra el valor de scope, de fuera cuando termine la función