/*
 * Percentual de  reajuste salarial cfme. renda
 * Salário até 1280.00 - reajuste de 20%
 * Salário entre 1280.00 até 1500 - Reajuste de 15%
 * Salário entre 1500 até 1800.00 - Reajuste de 10%
 * Salário entre 1800 até 2000.00 - Reajuste de 5%
*/

const prompt = require('prompt-sync')();
let nome = prompt('Nome do Funcionário: ')
let sal = parseFloat(prompt('Salário do funcionário R$'))
let aumento = 0
let newSal = 0


if(sal <= 1280){
  aumento = (sal*0.20)
  newSal = (aumento + sal).toFixed(2)
  console.log(`O Funcionário ${nome} com seu salário de R$${sal} receberá um aumento de R$${aumento.toFixed(2)} correspondente a 20% do salário`)
  console.log(`Seu novo salário é de R$${newSal}`)
}else if(sal > 1280 && sal <= 1500){
 aumento = sal*0.15
  newSal = aumento + sal
  console.log(`O Funcionário ${nome} com seu salário de R$${sal} receberá um aumento de R$${aumento.toFixed(2)} correspondente a 15% do salário`)
}else if(sal > 1800 && sal <= 2000){
  aumento = sal*0.10
  newSal = aumento + sal
  console.log(`O Funcionário ${nome} com seu salário de R$${sal} receberá um aumento de R$${aumento.toFixed(2)} correspondente a 10% do salário`)
  console.log(`Seu novo salário é de R$ ${newSal.toFixed(2)}`)
}else{
  aumento = sal*0.05
  newSal = aumento + sal
  console.log(`O Funcionário ${nome} com seu salário de R$${sal} receberá um aumento de R$${aumento.toFixed(2)} correspondente a 5% do salário`)
  console.log(`Seu novo salário é de R$ ${newSal.toFixed(2)}`)
}