const prompt = require('prompt-sync')();

let qtd = prompt('Quantos alunos deseja cadastrar? ')
let alunos = [];
let nota = [];
let medias = [];
let totNot = 0;

for (let c = 0; c < qtd; c++) {
    let aTmp = prompt('Aluno:');
    alunos.push(aTmp);
    let nTmp = prompt('Nota: ');
    nota.push(nTmp);
}
for (let cont = 0; cont < qtd; cont++) {
    totNot = nota[cont]++
}
 console.log()