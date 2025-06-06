import * as leia from 'readline-sync'

const numeros: Array<number> = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6]

let numeroProcurado, posicao

numeroProcurado = leia.questionInt('\nDigite o numero que voce deseja encontrar: ')

posicao = numeros.indexOf(numeroProcurado)

if (posicao !== -1) {
    console.log(`\nO número ${numeroProcurado} está localizado na posição: ${posicao}`);
} else {
    console.log(`\nO número ${numeroProcurado} não foi encontrado!`);
}