import { Queue } from "../interface/Queue";
import * as readlinesync from "readline-sync";

const fila = new Queue<string>();

let opcao;

do {
    console.log("\n Opções: ");
    console.log("\n 1 - Adicionar Cliente na Fila ");
    console.log("\n 2 - Listar todos os Clientes ");
    console.log("\n 3 - Retirar Clientes da Fila ");
    console.log("\n 0 - Sair ");
    console.log("\n ******************************************** ");
    
    opcao = parseInt(readlinesync.question("Entre com a opcao desejada: "));

    switch(opcao) {
        case 1:
            const cliente = readlinesync.question("Digite o nome do Cliente: ");
            fila.enqueue(cliente);
            console.log("Cliente adicionado!");
            break;
        case 2:
            if (fila.isEmpty()) {
                console.log("A fila está vazia!");
            } else {
                console.log("Fila dos Clientes:");
                fila.printQueue();
            }
            break;
        case 3:
            if (fila.isEmpty()) {
                console.log("A fila está vazia!");
            } else {
                const removido = fila.dequeue();
                console.log("Remover elemento: " + removido);
                fila.printQueue();
            }
            break;
        case 0:
            console.log("Saindo...");
            break;
        default:
            console.log("Opção inválida, tente novamente.");
    }
} while (opcao !== 0);

 

