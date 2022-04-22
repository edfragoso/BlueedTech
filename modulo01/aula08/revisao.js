/*
 * Exercício praticado com conteúdo da aula 20/04/2022
 * v1.0
 */

console.clear();
const prompt = require('prompt-sync')()
console.log();

// -->

let filmes = ['Jurassic Park', 'Tubarão', 'O exorcista',
    'Harry Potter', 'Senhor dos Aneis', 'Os Hobbits'];
let filmes2 = [];

/*
console.log('Lista de Filmes')
console.log(filmes);
console.log();

let pergunta = prompt('Deseja adicionar novo filme? ');
console.log();
if (pergunta.toLowerCase() == 'sim') {
    let novoFilme = prompt('Filme: ')
    filmes.push(novoFilme);
    console.log(`O filme ${novoFilme} foi adicionado com sucesso!`);
}
*/

/*
console.log();
console.log(`Lista de filmes`);
console.log(`${filmes} `);
console.log();

let qtd = +prompt('Quantos filmes quer adicionar? ');
let i = 0;
while (i < qtd) { 
    let novoFilme = prompt(`${i+1}º Filme: `);
    filmes2.push(novoFilme)
    console.log(` O filme ${novoFilme} foi adicionado a lista`)
    console.log();
    i++;
}
console.log()
console.log('------------------------------------------------');
console.log('\tLista atual');
console.log('------------------------------------------------');
console.log(`${filmes}`)
console.log();
console.log('------------------------------------------------');
console.log('\tLista adicionada');
console.log('------------------------------------------------');
console.log(`${filmes2}`)
console.log();
*/

/*
//-------------------------------------------------------------------
//
//  ## Acessando por índices da lista ##
//
let numIndice = +prompt('Acessar qual Índice? ');
console.log(`Na posição ${numIndice} está o filme --> ${filmes2[numIndice]} <--`);
console.log();
//------------------------------------------------------------------
*/


//------------------------------------------------------------------

/*
//
// ## Acessando a lista por nome
//
let procura = prompt('Qual filme procura: ');
// O método indeOf() retorna o indice de um elemento dentro do array.
//filmes.indexOf(procura);
let varTemp = filmes.indexOf(procura);
if (varTemp == -1) {
    console.log('Esse filme não consta na lista');
} else { 
    console.log(`O filme ${procura} está na posição ${varTemp}}`);
    let resp = prompt('Deseja substituir esse filme por outro na lista? ')
    if (resp == 'sim') {
        let novoFilme = prompt('Novo Filme: ');
        filmes.splice(varTemp, 1, novoFilme);
    } else {
        filmes.splice(varTemp, 1);
     }
    
}
console.log();
console.log(filmes);

*/


//------------------------------------------------------------------

// O método pop() remove o último elemento da lista

console.log(filmes);
console.log();
let filmeRemovido = filmes.pop();
console.log(filmes);
console.log();
console.log(filmeRemovido)

//------------------------------------------------------------------

/*

let cont = 0;
while (cont <= filmes.length - 1 ){  
    console.log('Na posição '+ cont);
    console.log(filmes[cont]);
    console.log();
    cont++
}
 
 //-----------------------------------------------------------------

// Somando os números de um array sem usar um método específico
let numeros = [10, 30, 15, 50, 25, 30, 90, 25, 10, 32, 19, 15, 25];
let conti = 0;
let soma = 0;
let numeroUser = +prompt('Qual número deseja ver? ')

// Uso do numeros.length -1 para retornar o último indice da lista
while (conti <= numeros.length - 1) {
    if (numeros[conti] == numeroUser) {
        soma++
    } 
    conti++
}
console.log(`O número ${numeroUser} aparece ${soma} vezes. `)
console.log();
*/

