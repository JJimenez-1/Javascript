/**
 * Variables declaradas por let tienen por alcance el bloque
 * en el que se han definido, así mismo, como en cualquier bloque interno. 
 * De esta manera, let trabaja muy parecido a var. 
 * La más notable diferencia es que el alcance de una variable var es la función contenedora.
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/let
 */


function varTest() {

    var x = 31;

    if (true) {
        var x = 71;             // Las dos dan la misma variable al ser un este un var!!!
        console.log(x);         // 71 
    }

    console.log(x);             // 71
}


function letTest() {

  var x = 31;
  
  if (true) {
      let x = 71;               // Solo sera 71 cuando este dentro del bucle if y no cuando salga, al set un let!
      console.log(x);           // 71
    }
    
    console.log(x);             // 31
}


function hoistingTest() {

    console.log(w);                  // Esta variable todavia no se ha defenido!!!
    // console.log(z);               // Todavia se ha declarado la x, pero es un let!
    // console.log(y);               // Todavia no se ha definido la variable y!!  
    console.log(x);                  // Todavia se ha declarado la x, pero no se le ha dado todavia, un valor!!
    // console.log(u);               // Variable declarado

    var x = 31;
    let y = 91;
    u = 1;                        
    
    if (true) {
        let x = 71;               
        console.log(x);           // 71 Hemos sobrescrito el valor de x a 71
        console.log(y);           // 91 Devuelve el valor del let, porque se ha declarado antes del bucle if
        let z = 101;               
        var w = 1001;             
    }
      
    console.log(x);               // 31 Devuelve el valor global de toda la función, no del let dentro del if!
    // console.log(z);             // No puede devolver 101, porque el valor z es un let, y no es global!
    console.log(w);               // 1001 Como hemos declarado una variable GLOBAL dentro del if, este queda guardado
  }


varTest();

letTest();

hoistingTest();

console.log(u);      // variable global declarada en una funcion sin var => NO hoisting