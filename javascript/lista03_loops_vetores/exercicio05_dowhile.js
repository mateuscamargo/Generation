const leia = require("readline-sync")

let numero, numerosPositivo = 0

do{
    numero = leia.questionInt("Digite um numero: ")

    if(numero > 0){
        numerosPositivo += numero
    }
}while(numero !== 0)

console.log(`\nA soma dos números positivos é: ${numerosPositivo}`)