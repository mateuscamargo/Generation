const leia = require('readline-sync')

let salarioBruto, adicionalNoturno, horasExtras, descontos, salarioLiquido

salarioBruto        = leia.questionFloat("Digite o salário bruto: ")
adicionalNoturno    = leia.questionFloat("Digite o adicional noturno: ")
horasExtras         = leia.questionFloat("Digite as horas extras: ")
descontos           = leia.questionFloat("Digite os descontos: ")

salarioLiquido = (salarioBruto + adicionalNoturno + (horasExtras*5)) - descontos

console.log("O salário líquido é de: " + 
    new Intl.NumberFormat("pt-Br", {
        style: "currency",
        currency: "BRL",
    }).format(salarioLiquido)
)