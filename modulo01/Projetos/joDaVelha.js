const prompt = require('prompt-sync')()
let array = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']]
console.log(); 
for (let i of array) {
    console.log(i);
}
console.log();
console.log('Jogo da Velha\nVocê deve escolher entre o "X" e a letra "O"');
let opcao = prompt('Qual você escolhe "X" ou "O": ').toUpperCase();
let linha = +prompt('Escolha qual linha ');
let coluna = +prompt('Escolha qual coluna: ');
console.log();
for (let i of array) {
    console.log(i);
}
array.splice(linha, coluna, opcao);
for (let i of array) {
    console.log(i);
}