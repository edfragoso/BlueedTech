/*
 *  - CALCULAR ÁREA - 
 * Recebe entradas de medidas
 * Calcula Área
 * Exibe resultado em metros quadrados
*/
const prompt = require('prompt-sync')();
  let larg = prompt('Largura: ')
  var largura = parseFloat(larg)
  let comp = prompt('Comprimento: ')
  var comprimento = parseFloat(comp)
  let mtroQuadr = 0 
  
  if(isNaN(largura) && isNaN(comprimento)){
    console.log('Dados de entrada incorretos')
  }else{
    let area = largura*comprimento
    mtroQuadr = area.toFixed(2)
    console.log(`Largura: ${largura} X ${comprimento} = ${mtroQuadr}`)
    console.log(`Sua área mede ${mtroQuadr} mts²`)
  }