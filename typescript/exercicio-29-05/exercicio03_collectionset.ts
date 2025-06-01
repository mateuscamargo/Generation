import * as leia from 'readline-sync'

const numeros: Set<Number> = new Set<number>()
let numeroDigitado

while(numeros.size < 10){

    numeroDigitado = leia.questionInt("Digite um numero: ")

    if(numeros.has(numeroDigitado)){
        console.log("Esse numero já foi digitado.");
    } else {
        numeros.add(numeroDigitado);
    }
}

console.log("\nLista dos números digitados:");
for (let numero of numeros) {
    console.log(numero);
}