const leia = require('readline-sync')

let numeroUm, numeroDois, numeroTres, numeroQuatro, valorFinal

numeroUm = leia.questionFloat("Digite o primeiro numero: ")
numeroDois = leia.questionFloat("Digite o segundo numero: ")
numeroTres = leia.questionFloat("Digite o terceiro numero: ")
numeroQuatro = leia.questionFloat("Digite o quarto numero: ")

valorFinal = (numeroUm * numeroDois) - (numeroTres * numeroQuatro)

console.log("O resultado é de: " + valorFinal.toFixed(1))