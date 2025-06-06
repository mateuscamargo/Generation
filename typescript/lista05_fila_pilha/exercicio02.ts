import leia from "readline-sync";
import { Stack } from "./pilhaStack";

const fila = new Stack<string>();
let op: number, nome: string;

do {
    console.log("***********************************************************\n");
    console.log("\t1 - Adicionar Livro na Pilha\n");
    console.log("\t2 - Listar todos os Livros\n");
    console.log("\t3 - Retirar Livro da pilha\n");
    console.log("\t0 - Sair\n");
    console.log("***********************************************************\n");
    op = leia.questionInt("\nEntre com a opção desejada: ");

    switch(op) {
        case 1:
            console.clear();
            fila.push(leia.question("Digite o nome: "));
            console.clear();
            console.log("Livro Adicionado!");
            break;

        case 2:
            console.clear();
            if(fila.isEmpty() === true) {
                console.log("A pilha está vazia!");
            } else {
                fila.printStack();
            }
            break;
        
        case 3:
            console.clear();
            if(fila.isEmpty() === false) {
                fila.pop();
                console.clear();
                console.log("Livro Removido!");
            } else {
                console.log("A pilha está vazia!");
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