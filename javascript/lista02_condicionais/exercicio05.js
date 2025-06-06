const leia = require('readline-sync')

let codigoProduto, quantidadeComprada, valorTotal, nomeProduto, precoUnitario

console.log("\n**********      CARDÁPIO     **********")
console.log("---------------------------------------")
console.log("| Opção |    Produto      |   Preço   |")
console.log("---------------------------------------")
console.log("|   1   | Cachorro Quente |  R$ 10,00 |")
console.log("|   2   | X-Salada        |  R$ 15,00 |")
console.log("|   3   | X-Bacon         |  R$ 18,00 |")
console.log("|   4   | Bauru           |  R$ 12,00 |")
console.log("|   5   | Refrigerante    |  R$ 8,00  |")
console.log("|   6   | Suco de laranja |  R$ 13,00 |")
console.log("--------------------------------------- ")

codigoProduto = leia.questionInt("\nDigite o numero da opcao desejada: ")

quantidadeComprada = leia.questionInt("\nDigite a quantidade desejada: ")

switch(true){
    case (codigoProduto === 1):
        nomeProduto = "Cachorro Quente"
        precoUnitario = 10.00
        break
    case (codigoProduto === 2):
        nomeProduto = "X-Salada"
        precoUnitario = 15.00
        break
    case (codigoProduto === 3):
        nomeProduto = "X-Bacon"
        precoUnitario = 18.00
        break
    case (codigoProduto === 4):
        nomeProduto = "Bauru"
        precoUnitario = 12.00
        break
    case (codigoProduto === 5):
        nomeProduto = "Refrigerante"
        precoUnitario = 8.00
        break
    case (codigoProduto === 6):
        nomeProduto = "Suco de laranja"
        precoUnitario = 13.00
        break
    default:
        console.log("\nCódigo inválido!")
        return
}

valorTotal = quantidadeComprada * precoUnitario

console.log(`\nProduto: ${nomeProduto}`)
console.log(`Quantidade: ${quantidadeComprada}`)
console.log("Valor total: " + 
    new Intl.NumberFormat("pt-Br", {
        style: "currency",
        currency: "BRL",
    }).format(valorTotal)
)