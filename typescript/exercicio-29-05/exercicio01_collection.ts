import * as leia from 'readline-sync'

const lista: Array<string> = new Array<string>()

for(let contador = 0; contador < 5; contador++) {
    lista.push(leia.question('Digite uma cor: '))
}
console.log(lista);

for(let cor of lista) {
    console.log(cor);
}
console.log(lista.sort());

for(let cor of lista) {
    console.log(cor);
}