import readlinesync = require("readline-sync");

const numeros: Set<number> = new Set<number>();


for(let contador = 0; contador < 11; contador++) { 
     numeros.add(readlinesync.questionFloat("Digite um numero: "));
}
    
console.table(numeros);  

