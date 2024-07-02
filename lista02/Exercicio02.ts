import { Stack } from "../interface/Stack";
import * as readlinesync from "readline-sync";

const pilha = new Stack<string>();

let opcao; 

do {
    console.log("\n Opções: ");
    console.log("\n 1 - Adicionar Livro na pilha ");
    console.log("\n 2 - Listar todos os Livros ");
    console.log("\n 3 - Retirar Livros da Pilha ");
    console.log("\n 0 - Sair ");
    console.log("\n ******************************************** ");
    
    opcao = parseInt(readlinesync.question("Entre com a opcao desejada: "));

    switch(opcao) {
        case 1:
            const livro = readlinesync.question("Digite o nome do Livro: ");
            pilha.push(livro);
            console.log("Livro adicionado!");
            break;
        case 2:
            if (pilha.isEmpty()) {
                console.log("A Pilha está vazia!");
            } else {
                console.log("Pilha dos Livros:");
                pilha.printStack();
            }
            break;
        case 3:
            if (pilha.isEmpty()) {
                console.log("A Pilha está vazia!");
            } else {
                const removido = pilha.pop();
                console.log("Remover elemento: " + removido);
                pilha.printStack();
            }
            break;
        case 0:
            console.log("Saindo...");
            break;
        default:
            console.log("Opção inválida, tente novamente.");
    }
} while (opcao !== 0);