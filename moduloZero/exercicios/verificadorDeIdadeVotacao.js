const prompt = require('prompt-sync')();
let data = new Date
let ano = data.getFullYear()
let dataNasc = parseInt(prompt('Ano de Nascimento: '))
let idade = ano-dataNasc

if(idade < 16){
  console.log()
  console.log(`Com ${idade} anos de idade não vota`)
  console.log()
}else if(idade <= 16 || idade < 18 || idade > 65){
  console.log()
  console.log(`Com ${idade} anos seu voto é opcional`)
  console.log()
}else{
  console.log()
  console.log(`Com ${idade} anos seu voto é obrigatório.`)
  console.log()
}
