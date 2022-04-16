/*
* PROJETO DETETIVE v_1.1
* 10/04/2022
*/

let perguntas= ['Conhecia a vítima? ','Eram amigos? ','Tinham divergências? ','Eram Inimigos? ','Esteve com a vítima no dia do crime? ']
let respostas = []
let resposta = ''
let totSim = 0
let totNao = 0
const prompt = require('prompt-sync')()

for(let i = 0; i < perguntas.length; i++){
    resposta = prompt(perguntas[i])
    if(resposta === 'sim' || resposta == 'nao'){
      respostas.push(resposta)
    }else{
      console.log()
      console.log('Responda sim ou nao')
      console.log('Tente outra vez!')
      console.log()
      i--
    }
}
console.log()
console.log('suas respostas foram..')
console.log(respostas)
console.log()

for(let i = 0; i < respostas.length; i++){
  if(respostas[i] === 'sim'){
    totSim = ++totSim
  }else{
    totNao = ++totNao
  }  
}

if(totSim >=4) {
  console.log(`Com um total de ${totSim} sim você é considerado:`)
  console.log(' - CULPADO - ')
}else if(totSim == 3){
  console.log(`Com um total de ${totSim} sim você é considerado:`)
  console.log(' - SUSPEITO - ')
}else if(totSim <= 2){
  console.log(`Com um total de ${totSim} sim você é considerado:`)
  console.log(' - INOCENTE -')
}else{
  console.log('Não há critérios suficiente para julgar ')
}
