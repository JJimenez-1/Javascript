/**
 * global vs local
 */

var scope = "global";           // Variable global declarada fuera de la funcion

function checkscope() {
    var scope = "local";        // Variable global declarada dentro de la función
    return scope;
}

console.log(checkscope());      // Mas importante una variable global de una función que una que no esta.