console.clear();
const prompt = require('prompt-sync')()
console.log();
let filmes2 = [];
let filmes = ['Jurassic Park', 'Tubarão', 'O exorcista',
    'Harry Potter', 'Senhor dos Aneis', 'Os Hobbits'];
/*

// Usando o for

for (let i = 0; i < 10; i++) {
    console.log(`Repetiu pela ${i}ª vez`);
}
console.log();
console.log('Vamos brincar um pouco...')
console.log();
console.log(' ## TABUADA ##');
let n1 = +prompt('Digite um número: ')
console.log();
console.log('------------------------------');
for (let i = 0; i <= 10; i++) {
    console.log(`${n1}x${i}=${n1*i}`);
 } 
console.log('------------------------------');
console.log();
//--------------------------------------------

*/

//--------------------------------------------

// --> for of <--
// 
/*
console.log(filmes);
console.log();

// O for of percorre todos os elementos da lista e executar o código declarado para cada um.
// A variável de controle definida  (i) recebe de cada um dos elementos um de cada vez.

for (let i of filmes) {
    console.log(i);
}
console.log();

let numeros = [10,30,15,20,30,10,10]
let soma = 0;
let numeroUser = +prompt('Qual número deseja contar? ');
console.log(numeros);
console.log();
for (let i of numeros) {
    if (i == numeroUser) {
        soma++
    } 
}
console.log(`O número ${numeroUser} aparece ${soma} vezes`);
console.log();
//-----------------------------------------------------------

*/

// --> Laço for in <--

for (let i in filmes) {
    console.log(i);
}
console.log();

// Seria a mesma coisa que isso:

for (let i = 0; i <= filmes.length - 1; i++) {
    console.log(i);
}
console.log();

// O for in itera sobre todos os eleme ntos de uma lista, sendo que a cada,
// repetição a variável de controle (nesse caso: i) recebe o INDICE do elemento.
// Esse índice vem em formato de String.

for (let i in filmes) {
    console.log(`O ${Number(i)+1}º filme contém o valor : ${filmes[i]}`);
}
console.log();

console.log(' ## Catálogo de Filmes ##');
let anoFilmes = [];
let filmesTotais = [[], []];
let qtd = +prompt('Quantos filmes deseja adionar na lista? ');

for (let i = 0; i < qtd; i++) {
    let novoFilme = prompt('Digite o nome do Filme: ');
    let anoFilme = prompt('Digite o ano do Filme: ');

    // Adicionando os valores em uma lista que contém duas listas: nome e ano.
    // Na lista indice 0 guardo os nomes, na lista indice 1 guardo os anos.
    
    filmes2.push(novoFilme);
    anoFilmes.push(anoFilme);

    // Acessando os valores inividuais dos elementos dentro das arrays
    //filmesTotais[0].push(novoFilme);
    //filmesTotais[1].push(anoFilme);
    console.log('Filme cadastrado com sucesso!');
    console.log();
}
console.log();
// Acessando os valores inividuais dos elemntos dentro das arrays
for (let i in filmesTotais[0]) {
    console.log(`Filme: ${filmesTotais[0][i]}`)
    console.log(`Ano: ${filmesTotais[1][i]}`);
 }
console.log();
//console.log(filmesTotais);