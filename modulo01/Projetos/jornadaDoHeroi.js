const prompt = require('prompt-sync')()
console.log();
console.log();
console.log('Nosso herói ao longo de sua jornada aos confins do submundo,\nprecisa coletar as cinco preciosas chaves para atrávessar os portais e retornar pra sua terra.\nEm sua primeira batalha com um ogro, guardião do portal no pantano, detentor da chave.\nO segundo portal é precisso vencer os Orks e encontrar o curandeiro guardião da segunda chave.\nO terceiro portal é o vale das almas perdidas que testam o seu pior pesadelo.\nNa floreta negra nosso herói precisa encontrar um tronco e construir uma embarcação\npara cruzar o rio de peixes carnívoros e encontrar o baú com a quarta chave.\nPor fim, sua única chance com o invencível dragão guardião do último portal é necessario, \nsurprende - lo em seu sono profundo.');
console.log();
console.log();

let perguntas = ['Venceu a batalha com ogro e encotrou a chave? ', 'Conseguiu encontrar o curandeiro? ', 'Superou seu pior pesadelo? ', 'Encontrou o baú? ', 'Conseguiu entrar na caverna sem acordar o dragão?   '];
let respostas = []
let resposta = ''
let totSim = 0
let totNao = 0

console.log();

for (let i = 0; i < perguntas.length; i++){
    resposta = prompt(perguntas[i]).toLowerCase()
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
console.log();
for(let i = 0; i < respostas.length; i++){
  if(respostas[i] === 'sim'){
    totSim = ++totSim
  }else{
    totNao = ++totNao
  }  
}
console.log();
if (totSim == 5) {
    console.log()
    console.log('Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.')
    console.log()
} else if (totSim == 4) {
    console.log()
    console.log('Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.')
    console.log()
} else if (totSim == 3) {
    console.log()
    console.log('Você chegou perto de conseguir alcançar seu objetivo com êxito, mas acaba falhando por pouco.')
    console.log()
} else if (totSim == 1 || totSim == 2) {
    console.log()
    console.log('Você falha, mas ainda consegue fugir da situação.')
    console.log()
} else { 
    console.log()
    console.log('Você falhou miseravelmente.')
    console.log()
}
