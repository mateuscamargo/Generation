
const leia = require('readline-sync')

let valorA, valorB, valorC, resultado

valorA = leia.questionInt("  ")
valorA = leia.questionInt("Digite um valor para A: ")
valorB = leia.questionInt("Digite um valor para B: ")
valorC = leia.questionInt("Digite um valor para C: ")

resultado = valorA + valorB

if (resultado > valorC) {
    console.log(`\n${valorA} + ${valorB} > ${valorC}`)
    console.log("A + B é maior que C")
} else if (resultado < valorC) {
    console.log(`\n${valorA} + ${valorB} < ${valorC}`)
    console.log("A + B é menor que C")
} else {
    console.log(`\n${valorA} + ${valorB} = ${valorC}`)
    console.log("A + B é igual a C")
}