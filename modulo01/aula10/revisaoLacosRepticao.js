/*
* Aula 10 22/04/2022 
* Revisão laços de repetição
*/

console.clear();
const prompt = require('prompt-sync')()

/*
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//    ## WHILE ##
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

let cc = 0;
while (cc < 10) {
    cc++

    if (cc == 3) {
        console.log(' ** Pula **');
        continue;
    }
    console.log(`${cc}º Cambalhota`)
}
console.log('FIM');
//------------------------------------

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//    ## do WHILE ##
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

let a = 0;
console.log();
do { 
    a++;
    console.log(`${a}º Cambalhota`);
} while (a < 3);
console.log();
*/

//-----------------------------------
//
//-----------------------------------
/*
let sair = '';
do {
    console.log();
    sair = prompt('Deseja sair do programa? [S/N] ').toLowerCase;
    if (sair != 'sim' || sair != 's') {
        console.log('Você precisa digitar sim ou nao');
        
    }
    
} while (sair == 'nao' && sair == 'n' );
*/


const nomes = ['Gabriel', 'Thiago', 'Márcio', 'Eduarda'];
let numAleatorio = '';
for (const i of nomes) {
    console.log(nomes);
    
    
}
