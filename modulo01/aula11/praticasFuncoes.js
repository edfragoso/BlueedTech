console.clear();
const prompt = require('prompt-sync')();
console.log('Hello world'); 

//let nome = prompt('Digite seu nome: ');
//let idade = prompt('Digite sua idade: ');

function saudacao(nome, idade) {
    console.log(`Olá ${nome}.`);
    console.log('Seja bem vindo(a)');
    if (idade > 18) {
        console.log(`${nome}, `)
    } else {
        console.log(`${nome}, você é menor de idade.`)
     }
    console.log();
}

function somar() {
    return 2 + 1;
}
let resultado = somar();
console.log(resultado);

