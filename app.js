
/*
Coloca un mensaje de bienvenida al usuario en amarillo
*/
/* 
    colocar los errores de las funciones en rojo
*/


const colors = require('colors'); 


console.log(colors.yellow('Bienvenido al sistema'));

let numero = 6;
const factorial = (numero) => {
  if (numero > 0) {
    return factorial(numero - 1) * numero;

  } else if (numero == 0) {
    return 1;
  } else {
    console.log(colors.red("No esta definido el factorial de números negativos"));
    return NaN;


  }
};
/* 
    colocar las salidas del sistemas en azul
*/
console.log(`El factorial de `, `${numero}`, ` es: `, `${factorial(6)}`.blue);
//SALIDAS SOLICITADAS
/*
    1. Calcule el factorial de 5
*/
let numerito = 5;
const factorialo = (numerito) => {
  if (numerito > 0) {
    return factorialo(numerito - 1) * numerito;

  } else if (numerito == 0) {
    return 1;
  } else {
    console.log(colors.red("No esta definido el factorial de números negativos"));
    return NaN;


  }
};
console.log(`El factorial de `, `${numerito}`, ` es: `, `${factorialo(5)}`.blue);


/*
    2. Calcule la combinatoria de 6C2
*/
/*
 combinatoria = (n, r) => {
    const numerador = this.factorial(n);
    const denominador = this.factorial(r) * this.factorial(n - r);
    if (denominador === 0) {
      console.log("No es posible calcular la combinatoria");
      return;
    }
    if (r > n || n < 0 || r < 0) {
      console.log(
        "No es posible calcular la combinatoria: Parametros incorrectos"
      );
      return;
    }
    return numerador / denominador;
  };
  let resultado = combinatoria(5,2);
  console.log(resultado);


  */
 // console.log(`la combinatoria de 6C2 es: `, `${factorial(5)}`.blue);








/*
    3. Calcule la permutacion de 8P1
    4. Calcule el factorial de -1





/*
*/





let numerit= -1;
const factorialu = (numerit) => {
  if (numerit > 0) {
    return factorialu(numerit - 1) * numerit;

  } else if (numerit == 0) {
    return 1;
  } else {
    console.log(colors.red("No esta definido el factorial de números negativos"));
    return NaN;


  }
};
console.log(`El factorial de `, `${numerit}`, ` es: `, `${factorialu(-1)}`.blue);



















































/*

    5. Calcule la resta del factorial de 5! - el factorial de 4!
*/

/*
Coloca un mensaje de despedida al usuario en rojo
*/
console.log(colors.red('Hasta la vista baby'));
/*
const { Estadistica } = require("./clases/estadistica");

const estadistica = new Estadistica();
console.log("El factorial del numero es: ",estadistica.factorial(4));
*/