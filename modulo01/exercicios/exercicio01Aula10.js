console.clear();
const prompt = require('prompt-sync')()
console.log();
console.log('Exercicio 01 Aula010');
console.log();
let numPrimo = [];
let contNum = [];
let nP = +prompt('Digite um número: ');
console.log();
for (let c = 0; c < nP; c++) {
    contNum.push(c);
    if (nP % c == 0) {
        //console.log(`${nP} é divisivel por 2 com resto 0`);
        numPrimo.push(nP);
    } else { 
        //console.log(`${nP} não é divisivel por dois`);
    }
 }
console.log();
console.log(`Contando até.. ${nP}`);
for (const i in contNum) {
    console.log(`${contNum}`)
}
console.log();
console.log(`Números Primos`);
console.log();
for (const i in numPrimo) {
    console.log(`${numPrimo}`)
}
console.log();