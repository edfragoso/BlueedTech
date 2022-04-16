const prompt = require('prompt-sync')();
let dateNow = new Date()
let dia = dateNow.getDate()
let mes = dateNow.getMonth()
let ano = dateNow.getFullYear()

console.log('Calculadora de idade')
let anoUser = parseInt(prompt('Ano do seu nascimento: '))
let calcIdade = ano - anoUser
if(calcIdade > 0  &&calcIdade < 14){
  console.log(`Com ${calcIdade} anos, você é uma criança`)
}else if(calcIdade > 14 && calcIdade < 20){
  console.log(`Com ${calcIdade} anos, você já é um adolescente`)
}else if(calcIdade > 20 && calcIdade < 35){
  console.log(`Com ${calcIdade} anos, você já é um adulto`)
}else if(calcIdade > 35 &&calcIdade < 50){
  console.log(`Com ${calcIdade} anos, você já é um adulto maduro`)
}else{
  console.log(`Com ${calcIdade} anos, você já é um idoso`)
}