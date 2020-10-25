/**
 * global vs local
 * function scope and hoisting
 */

function test(o) {
    
    var i = 0;                          // Declaramos la variable i global en la función test
    
    if (typeof o == "object") {

        var j = 0;                      // Definida también en toda la función test
    
        for(var k=0; k < 10; k++) {     //K es definida dentro de la función
            console.log(k);             // print numbers 0 through 9
        }
    
        console.log(k);                 // Hemos definido antes, por lo tanto, k debe ser 10
    }
    
    console.log(j);                     // j is defined, but may not be initialized
}

o = {};
test(o); //Devuelve 0 porque en la array no hay ningun valor