/*
* PROJETO DETETIVE v_1.0
*/

let totSim = 0
let totNao = 0

const prompt = require('prompt-sync')()

let perg1 = prompt('Conhecia a vítima? ')
if(perg1 == 'sim'){
  totSim = ++totSim
}else{
  totNao = ++totNao
}

let perg2 = prompt('Eram amigos? ')
if(perg2 == 'sim'){
  totSim = ++totSim
}else{
  totNao = ++totNao
}

let perg3 = prompt('Tinham divergências? ')
if(perg3 == 'sim'){
  totSim = ++totSim
}else{
  totNao = ++totNao
}

let perg4 = prompt('XXX')
if(perg4 == 'sim'){
  totSim = ++totSim
}else{
  totNao = ++totNao
}

let perg5 = prompt('Esteve com a vítima no dia do crime?')
if(perg5 == 'sim'){
  totSim = ++totSim
}else{
  totNao = ++totNao
}

if(totSim >=4) {
  console.log(' - CULPADO - ')
}else if(totSim == 3){
  console.log(' - SUSPEITO - ')
}else if(totSim <= 2){
  console.log(' - INOCENTE -')
}else{
  console.log('Não há critérios suficiente para julgar ')
}

/*
console.log(`Total de SIM ${totSim}`)
console.log(`Total de NAO ${totNao}`)
*/