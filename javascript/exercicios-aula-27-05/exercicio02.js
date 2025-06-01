const leia = require('readline-sync')

let numero, positivoNegativo, parImpar

numero = leia.questionInt("Digite um numero: ")

if (numero === 0){

    console.log("O número é zero")

} else {

    positivoNegativo = (numero % 2 == 0) ? "par" : "impar"
    parImpar = (numero > 0) ? "positivo" : "negativo"

    console.log(`O número é ${parImpar} e ${positivoNegativo}`)
}