import readlinesync = require("readline-sync");

let numero1 : number;
let numero2 : number;

// Escopo do programa
numero1 = readlinesync.questionFloat("Digite o primeiro numero: ");
numero2 = readlinesync.questionFloat("Digite o segundo numero: ");

console.log(`Soma: ${numero1} + ${numero2} = ${somar(numero1,numero2)}`);
console.log(`Subtração: ${numero1} - ${numero2} = ${subtrair(numero1,numero2)}`);
console.log(`Multiplicação: ${numero1} * ${numero2} = ${multiplicar(numero1,numero2)}`);
console.log(`Divisão: ${numero1} / ${numero2} = ${dividir(numero1,numero2)}`);

autor();


// Escopo da função
function somar (numero1 : number , numero2 : number) : number {
    return numero1 + numero2;
}

function subtrair (numero1 : number , numero2 : number) : number {
    return numero1 - numero2;
}

function multiplicar (numero1 : number , numero2 : number) : number {
    return numero1 * numero2;
}

function dividir (numero1 : number , numero2 : number) : number | null {
    let divisao =  numero1 / numero2;
    return (divisao != Infinity ? divisao : null)
}

function autor (): void {
    console.log("\nFeito por Gabrielli")
}