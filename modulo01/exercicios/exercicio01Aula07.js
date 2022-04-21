 console.clear();
const prompt = require('prompt-sync')()
let totNum = 0;
let numPar = [];
let numImpar = [];

let qtd = +prompt('Quantos número pretende quardar?');
console.clear();

for (let c = 0; c < qtd; c++) {
    let n = [+prompt(`Digite o ${c + 1}º número: `)];
    console.clear();
    if (n % 2 == 0) {
        numPar.push(n);
    } else { 
        numImpar.push(n);
    }
}
console.clear();
console.log(`Números Pares: ${numPar}`);
console.log();
console.log(`Números Impares: ${numImpar}`);
console.log();
