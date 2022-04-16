const prompt = require('prompt-sync')()

let n1 = +prompt('Digite o primeiro número: ')
let n2 = +prompt('Digite o segundo  número: ')
if(n1 > n2){
  console.log(`O primeiro número digitado foi ${n1} e esse é o maior`)
}else if(n1 === n2){
  console.log(`Os número ${n1} e ${n2} são exatamente iguais.`)
}else{
  console.log(`O segundo número foi ${n2} esse é maior que o segundo.`)
}