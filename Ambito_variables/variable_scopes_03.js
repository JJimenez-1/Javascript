/**
 * global vs local
 * nested scopes
 */

var scope = "global scope";             // Variable global

function checkscope() {
    
    var scope = "local scope";          // Variable global en la función!!
    
    function nested() {                 // Variable global en la función
        
        var scope = "nested scope";     // Variable local en la función nested
        return scope;                   // Devuelve el valor scope
    }

    return nested();
}

console.log(checkscope());              // Devuelve el valor de la función checkscope
console.log(scope);                     // Devuelve el valor de la variable global