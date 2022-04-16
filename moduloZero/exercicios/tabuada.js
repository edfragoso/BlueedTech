/*
 * Tabuada
 *
*/
const prompt = require('prompt-sync')();
console.log()
console.log(" - TABUADA - ")
console.log()
console.log('Qual número quer ver a tabuada? ')
console.log()

do{
let raw = prompt("Insira um número: ")
let num = parseInt(raw)
var resp = ''
  
if(isNaN(num)){
  console.log()
  console.log('[-ERRO-]')
  console.log('Este não é um número!!')
  console.log()
}else{
  console.log('**********************')
  for(let i = 0; i <= 10; i++){
    console.log(` - ${num} x ${i} = ${num*i}`)
  }
  console.log('**********************')
}
  console.log()
resp = prompt('Deseja Continuar? [S/N] ')
  console.log()
  
  
}while (resp == 'S' || resp == 's')