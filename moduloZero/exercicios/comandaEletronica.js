const prompt = require('prompt-sync')();
let consumo = 0
let txServ = 0.1
let total = 0
let adicional = 0
let dinheiroReceb = 0
let troco = 0
let subTotal = 0

console.log('***************************************')
console.log('        - Comanda Eletrônica -         ')
console.log('***************************************')
console.log('')

consumo = parseFloat(prompt('Valor da compra R$ ')).toFixed(2)
subTotal = (txServ * consumo).toFixed(2)
total = parseFloat(consumo) + parseFloat(subTotal)
console.log(`Total de gasto R$ ${consumo}`)
console.log(`Total de taxa R$ ${subTotal}`)
console.log(`Total a pagar R$ ${total}`)
console.log()
dinheiroReceb = parseFloat(prompt('Recebido R$')).toFixed(2)
troco = (dinheiroReceb - total).toFixed(2)
console.log(`Troco R$ ${troco}`)
