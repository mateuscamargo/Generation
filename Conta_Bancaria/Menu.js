"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = main;
var readlinesync = require("readline-sync");
var Colors_1 = require("./src/util/Colors");
function main() {
    var opcao;
    while (true) {
        console.log(Colors_1.colors.bg.black, Colors_1.colors.fg.yellow, "*****************************************************");
        console.log("                                                     ");
        console.log(Colors_1.colors.bg.black, Colors_1.colors.fg.blue, "                BANCO DO BRAZIL COM Z                ");
        console.log(Colors_1.colors.bg.black, Colors_1.colors.fg.yellow, "                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ", Colors_1.colors.reset);
        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");
        if (opcao == 9) {
            console.log(Colors_1.colors.fg.blue, "\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            console.log(Colors_1.colors.reset, "");
            process.exit(0);
        }
        switch (opcao) {
            case 1:
                console.log(Colors_1.colors.fg.yellow, "\n\nCriar Conta\n\n", Colors_1.colors.reset);
                keyPress();
                break;
            case 2:
                console.log(Colors_1.colors.fg.yellow, "\n\nListar todas as Contas\n\n", Colors_1.colors.reset);
                keyPress();
                break;
            case 3:
                console.log(Colors_1.colors.fg.yellow, "\n\nConsultar dados da Conta - por número\n\n", Colors_1.colors.reset);
                keyPress();
                break;
            case 4:
                console.log(Colors_1.colors.fg.yellow, "\n\nAtualizar dados da Conta\n\n", Colors_1.colors.reset);
                keyPress();
                break;
            case 5:
                console.log(Colors_1.colors.fg.yellow, "\n\nApagar uma Conta\n\n", Colors_1.colors.reset);
                keyPress();
                break;
            case 6:
                console.log(Colors_1.colors.fg.yellow, "\n\nSaque\n\n", Colors_1.colors.reset);
                keyPress();
                break;
            case 7:
                console.log(Colors_1.colors.fg.yellow, "\n\nDepósito\n\n", Colors_1.colors.reset);
                keyPress();
                break;
            case 8:
                console.log(Colors_1.colors.fg.yellow, "\n\nTransferência entre Contas\n\n", Colors_1.colors.reset);
                keyPress();
                break;
            default:
                console.log(Colors_1.colors.fg.yellow, "\nOpção Inválida!\n", Colors_1.colors.reset);
                keyPress();
                break;
        }
    }
}
/* Função com os dados da pessoa desenvolvedora */
function sobre() {
    console.log(Colors_1.colors.fg.yellow, "\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Mateus Camargo - mateusc@genstudents.org");
    console.log("github.com/mateuscamargo");
    console.log("*****************************************************");
}
function keyPress() {
    console.log(Colors_1.colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}
main();
