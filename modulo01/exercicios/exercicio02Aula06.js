const prompt = require('prompt-sync')();

let pessoas = [];
let idade = [];
let alt = [];

for (let c = 0; c < 5; c++) {
    var tempPe = prompt('Nome: ');
    pessoas.push(tempPe);
    var tempId = +prompt('Idade: ');
    idade.push(tempId);
    var tempAl = +prompt('Altura: ');   
    alt.push(tempAl);
}
console.log(pessoas)
console.log(idade)
 console.log(alt)