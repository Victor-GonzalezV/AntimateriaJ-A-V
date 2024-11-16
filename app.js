/*
Coloca un mensaje de bienvenida al usuario en amarillo
*/
/* 
    colocar los errores de las funciones en rojo
*/
const colors = require("colors");
const { Estadistica } = require("./clases/estadistica");
const { Calculadora } = require("./clases/calculadora");

const estadistica = new Estadistica();
const calculadora = new Calculadora();

console.log(colors.yellow("Bienvenido al sistema"));

/* 
    colocar las salidas del sistemas en azul
*/

//SALIDAS SOLICITADAS
/*
    1. Calcule el factorial de 5
    2. Calcule la combinatoria de 6C2
    3. Calcule la permutacion de 8P1
    4. Calcule el factorial de -1
    5. Calcule la resta del factorial de 5! - el factorial de 4!
*/

console.log(`El factorial de 5 es: ${estadistica.factorial(5)}`.blue);
console.log(
	`La combinatoria de 6C2 es: ${estadistica.combinatoria(6, 2)}`.blue
);
console.log(`La permutacion de 8P1 es: ${estadistica.permutacion(8, 1)}`.blue);
console.log(`El factorial de -1 es: ${estadistica.factorial(-1)}`.blue);
console.log(
	`La resta del factorial de 5 menos el factorial de 4 es: ${calculadora.resta(
		estadistica.factorial(5),
		estadistica.factorial(4)
	)}`.blue
);

/*
Coloca un mensaje de despedida al usuario en rojo
*/
console.log(colors.red("Hasta la vista baby"));
