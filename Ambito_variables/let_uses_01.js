/**
 * Ejemplos de uso de Let:
 * - Reemplazar var en bucles for
 * - Definicion de variables en un bloque:
 *   block vs lexical scope
 */

function oddsums(n) {

    let total = 0, result = []; 
    
    for(let x = 1; x <= n; x++) {
        let odd = 2*x-1;
        total += odd;
        result.push(total);
    }

    // console.log(x);              // No existe la variable x, fuera del bucle for
    // console.log(odd);            // No existe la variable odd fuera del bucle for
    // console.log(total);          // Devuelve el valor, porque se ha declarado dentro 
    
    return result;                  
}

console.log(oddsums(5));            // Returns [1,4,9,16,25]
