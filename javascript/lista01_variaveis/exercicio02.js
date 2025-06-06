const leia = require('readline-sync')

let notaUm, notaDois, notaTres, notaQuatro, mediaFinal

notaUm = leia.questionFloat("Digite a primeira Nota: ")
notaDois = leia.questionFloat("Digite a segunda Nota: ")
notaTres = leia.questionFloat("Digite a terceira Nota: ")
notaQuatro = leia.questionFloat("Digite a quarta Nota: ")

mediaFinal = (notaUm + notaDois + notaTres + notaQuatro) / 4

console.log("A média final é: " + mediaFinal.toFixed(1))