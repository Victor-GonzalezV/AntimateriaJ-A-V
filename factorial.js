const colors = require("colors");

const { Estadistica } = require("./clases/estadistica");
const { Calculadora } = require("./clases/calculadora");

const estadistica = new Estadistica();
const calculadora = new Calculadora();

console.log(`El factorial de 5 es: ${estadistica.factorial(5)}`.blue);
console.log(`El factorial de -1 es: ${estadistica.factorial(-1)}`.blue);
console.log(
	`La resta del factorial de 5 menos el factorial de 4 es: ${calculadora.resta(
		estadistica.factorial(5),
		estadistica.factorial(4)
	)}`.blue
);
