console.clear();
const prompt = require('prompt-sync')();

let numDigitados = [];
let numPar = [];
let numImpar = [];
console.log();
console.log('Separando números...');
console.log();
for (let i = 0; i != 10; i++){
    let resp = +prompt(`Digite o ${Number(i) + 1}º número: `);
    numDigitados.push(resp);
    if (resp % 2 == 0) {
        numPar.push(resp);
    } else {
        numImpar.push(resp);
    }
}
console.log();
console.log('Números Pares\n' + numPar);
console.log();
console.log('Números Impares\n' + numImpar);
console.log();
console.log('Números Digitados\n' + numDigitados);
console.log();
