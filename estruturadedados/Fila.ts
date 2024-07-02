import { Queue } from "../interface/Queue";

const fila = new Queue<number>();
 
for (let i = 1; i <= 10; i++) {
    fila.enqueue(i);             
}
console.log("\nExibir todos elementos da fila: ");
fila.printQueue();
 
console.log("\nRemover elemento: " + fila.dequeue());
fila.printQueue();
 
console.log("\nExibir o primeiro elemento da fila: " + fila.peek());
 
console.log("\nChecar se o elemento 1 existe na fila? " + fila.contains(1));
 
fila.clear();
 
console.log("\nA fila está vazia? " + fila.isEmpty());
