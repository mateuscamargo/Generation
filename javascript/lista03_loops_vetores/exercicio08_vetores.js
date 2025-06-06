const leia = require("readline-sync")

let vetor = []
let indicesImpares = [] 
let numerosPares = []
let media, soma = 0

for(let contador = 0; contador < 10; contador++){
    let numero = leia.questionInt(`Digite um numero: `)
    vetor.push(numero)
    soma += numero
}

for(let contador = 1; contador < vetor.length; contador += 2) {
    indicesImpares.push(vetor[contador])
}

for(let contador = 0; contador < vetor.length; contador++){
    if (vetor[contador] % 2 === 0) {
        numerosPares.push(vetor[contador])
    }
}

media = soma / vetor.length

console.log(`\nElementos nos índices ímpares: \n${indicesImpares}`)
console.log(`\nElementos pares: \n${numerosPares}`)
console.log(`\nSoma: \n${soma}`)
console.log(`\nMédia: \n${media.toFixed(2)}`)