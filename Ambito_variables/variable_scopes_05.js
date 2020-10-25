/**
 * global vs local
 * function scope and hoisting
 */

var scope = "global";

function f() {

    console.log(scope);             // Como la variable scope, la hemos declarado de la función, pero no le hemos aplicado un valor todavia, sale undefined
    var scope = "local";            // Inicilizamos la variable con un valor!!
    console.log(scope);             // Sale local
}

f();

console.log(scope);                 // Ahora, al acabar la función el valor de scope, es global