const prompt = require('prompt-sync')()
let n1 = +prompt('Informe o número: ')

if(n1 % 2 == 0){
  console.log('Esse número é  - PAR - ')
}else{
  console.log('Esse número é  - IMPAR - ')
}