/**
 * global vs local
 * var to declare local variables
 */

scope = "global";               

function checkscope2() {
    
    scope = "local";            //La variable scope ha cambiado!!
    myscope = "local";          //Declara una valriable con valor "local"

    return [scope, myscope]; //Devuelve dos valores
}

console.log(checkscope2());  // Devuelve el valor de la función checkscope2

console.log(scope);             //Devuelve el valor de scope que es local
console.log(myscope);           // Devuelve el valor de myscope que es local
