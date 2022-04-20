/*
 * Aula 07 CodeLab 19/04/2022
 * 
*/

const prompt = require('prompt-sync')();

let esc = ['0', '1', '2']; // Criando a lista com os elementos
let escCPU = 0;   // Variável escolha do PC
let escUser = 0;  // Variável esolha do Usuário 
let sair = true;  // Condição para o loop
let pc = '';
let user = '';

console.clear();
console.log();
console.log('***************************');
console.log('*       - JOKENPÔ -       *');
console.log('***************************');
console.log('*                         *');
console.log('* [ 0 ] ->PEDRA<-         *');
console.log('* [ 1 ] ->PAPEL<-         *');
console.log('* [ 2 ] ->TESOURA<-       *');
console.log('*                         *');
console.log('***************************');
console.log()

while (sair == true) {
    escUser = + prompt('Escolha uma opção: ');
    if (escUser == 0 || escUser == 1 || escUser == 2) {
        escCPU = Math.floor(Math.random() * esc.length);
        if (escCPU == 0) { // 0 corresponde ao item PEDRA
            pc = 'PEDRA';
        } else if (escCPU == 1) { // 1 corresponde ao item PAPEL
            pc = 'PAPEL';
        } else {
            pc = 'TESOURA'; // 3º opão, 
        }
        if (escUser == 0) {
            user = 'PEDRA';
        } else if (escUser == 1) {
            user = 'PAPEL';
        } else { 
            user = 'TESOURA';
        }
        break;
    } else { 
        console.log()
        console.log(' ## ERRO! ## ')
        console.log('Opção INVÁLIDA')
        console.log()
        console.log('Você precisa escolher entre "0" e "1" ');
        console.log('Tente novamente!');
        console.log()
        continue;
    }
    
 }
console.log()
console.log(`Você escolheu a opção ${escUser} corresponde ao item -> ${user} <-`)
console.log(`Computador escolhe a opção ${escCPU} corresponde ao item -> ${pc} <-`)
console.log()
