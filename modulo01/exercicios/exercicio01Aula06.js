
const prompt = require('prompt-sync')();
let entr = 0;
let par = [];
let impar = [];
let cont = 0;
for (let i = 0; i <= 10; i++) {
    entr = prompt('Digite um número: ');
    cont++
    if (entr % 2 === 0) {
        par.push(entr)
    } else { 
        impar.push(entr)
    }
}
console.clear();
console.log(`Você digitou ${cont} números.`);
console.log(`Os números pares digitados foram ${par}`);
console.log(`Números impares foram ${impar}`);
console.log();
console.log();