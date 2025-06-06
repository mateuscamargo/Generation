import leia from "readline-sync";
import { Queue } from "./filaQueue";

const fila = new Queue<string>();
let op: number, nome: string;

do {
    console.log("***********************************************************\n");
    console.log("\t1 - Adicionar Cliente na Fila\n");
    console.log("\t2 - Listar todos os Clientes\n");
    console.log("\t3 - Retirar Cliente da Fila\n");
    console.log("\t0 - Sair\n");
    console.log("***********************************************************\n");
    op = leia.questionInt("\nEntre com a opção desejada: ");

    switch(op) {
        case 1:
            console.clear();
            fila.enqueue(leia.question("Digite o nome: "));
            console.clear();
            console.log("Cliente Adicionado!");
            break;

        case 2:
            console.clear();
            if(fila.isEmpty() === true) {
                console.log("A fila está vazia!");
            } else {
                fila.printQueue();
            }
            break;
        
        case 3:
            console.clear();
            if(fila.isEmpty() === false) {
                fila.dequeue();
                console.clear();
                console.log("Cliente Removido!");
            } else {
                console.log("A fila está vazia!");
            }
            break;
        
        case 0:
            op = 0;
            console.log("Programa Finalizado!");
            break;

        default:
            console.log("Opção invalida!");
            break;
    }
} while(op != 0)