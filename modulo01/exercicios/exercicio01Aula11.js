/*
 * Aula 11 exercicio 01
 * Exercicio feito em aula 25/04/2022
 *
*/

console.clear();
const prompt = require('prompt-sync')();
let n1 = 0;
let n2 = 0;
let calc = ''

console.log();
op = prompt('Que operação matemática quer fazer? ');
console.clear();
n1 = +prompt('Digite o primeiro número: ');
n2 = +prompt('Digite o segundo número: ');
console.clear();

let result = 0;
calcular(n1,op,n2);

function calcular(a, b, c) {
    if (op == '+') {
        result = n1 + n2;
    } else if (op == '-') {
        result = n1 - n2;
    } else if (op == '*') {
        result = n1 * n2;
    } else if (op == '/') {
        result = n1 / n2;
    } else {
        console.log('Operador inválido!!');
    }
}
console.log();
console.log(`O resultado do cálculo foi...`);
console.log(`${n1} ${op} ${n2} = ${result}`);
console.log();