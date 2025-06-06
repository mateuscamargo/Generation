const leia = require("readline-sync")

let primeiroNumero, segundoNumero

primeiroNumero = leia.questionInt("Digite o primeiro numero do intervalo: ")

segundoNumero = leia.questionInt("Digite o ultimo numero do intervalo: ")

if(primeiroNumero >= segundoNumero){
    console.log("\nIntervalo inválido.")
    process.exit()
}

console.log(`\nNo intervalo entre ${primeiroNumero} e ${segundoNumero}: \n`)

for(let contador = primeiroNumero; contador < segundoNumero; contador++){
    if (contador % 3 === 0 && contador % 5 === 0) {
        console.log(`${contador} é múltiplo de 3 e 5`);
    }
}