const leia = require("readline-sync")

let idade, idadeMenor = 0, idadeMaior = 0

while(true){
    idade = leia.questionInt("Digite uma idade: ")

    if (idade < 0) {
        break;
    }

    if(idade < 21){
        idadeMenor++
    }else if (idade > 50){
        idadeMaior++
    }
}

console.log(`\nTotal de pessoas menores de 21 anos: ${idadeMenor}`)
console.log(`Total de pessoas maiores de 50 anos: ${idadeMaior}`)