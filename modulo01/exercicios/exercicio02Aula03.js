const prompt = require('prompt-sync')()

let media = 0;
let nota1 = +prompt('Entre com a primeira Nota: ');
let nota2 = +prompt('Segunda Nota: ');
let nota3 = +prompt('Terceira Nota: ');
let nota4 = +prompt('Quarta Nota: ');

media = (nota1 + nota2 + nota3 + nota4) / 4
console.log();
if (media >= 7) {
    console.log('Aluno APROVADO');
    console.log(`A média do aluno foi ${media}`);
} else if (media > 5 && media < 7) {
    console.log('Aluno em RECUPERAÇÃO');
    console.log(`A média do aluno foi ${media}`);
} else {
    console.log('Aluno REPROVADO');
    console.log(`A média do aluno foi ${media}`);
}