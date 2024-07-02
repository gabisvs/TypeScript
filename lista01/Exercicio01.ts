import readlinesync = require("readline-sync");

const numeros: Array<number> = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

const resposta = readlinesync.questionInt("\nDigite um numero:", {limitMessage: "\nDigite um numero valido"});

if (numeros.includes(resposta)) {
    console.log("\nO numero " + resposta + " está localizado na posição: " + numeros.indexOf(resposta));
} else {
    console.log("\nO numero não foi encontrado!");
}