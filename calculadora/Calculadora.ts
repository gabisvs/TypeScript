import readlinesync = require("readline-sync");

let numero1: number ;
let numero2: number;

numero1 = readlinesync.questionFloat("Digite o 1 numero: ")
numero2 = readlinesync.questionFloat("Digite o 2 numero: ")

console.log(`Soma: ${numero1} + ${numero2} = ${numero1 + numero2}`);
console.log(`Subtração: ${numero1} - ${numero2} = ${numero1 - numero2}`);
console.log(`Multiplicação: ${numero1} * ${numero2} = ${numero1 * numero2}`);
console.log(`Divisão: ${numero1} / ${numero2} = ${numero1 / numero2}`);