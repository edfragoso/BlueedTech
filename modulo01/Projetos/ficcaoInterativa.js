/*
* Projeto 03 
*  - Ficção interativa -  Bluemer
*  Versão 1.0 
* By Ednilson Fragoso
*  - 09/05/2022.
*/
console.clear();
const prompt = require('prompt-sync')()
// ## VARIÁVEIS ##
let sair = true;
let dia = 0;
let opcoes = ['ENTRAR', 'SAIR'];
let oponenteDeLuta = '';
let derrotas = 0;
let vitorias = 0;
let treino = 0;
let nivel = 0;
//// ## OBJETOS ##
let tempo = {
    dia: 1,
    horas: 8,
    periodo: 'Manhã',
    
    mudaDia: function () {
      this.dia++;
      this.horas = 8;
      this.periodo = 'Manhã';
    },
    ContTempo: function (horas) {
        this.horas += horas
        if (this.horas >= 24) {
            this.horas -= 24;
            this.dia++;
        }
        if (this.horas >= 19) {
            this.periodo = 'Noite'
        } else if (this.horas >= 12) {
            this.periodo = 'Tarde'
        } else if (this.horas >= 6) {
            this.periodo = 'Manhã'
        } else {
            this.periodo = 'Madrugada'
        }
    }
};
let gladiador = {
  nome: 'Mancrazy',
  energia: 20,
  forca: 10,
  ataque: 10,
  defesa: 10,
  nivel: 0,
  destreza: 0,
  restauraEnergia: function () {
    this.energia += 5;
    this.forca += 5;
    this.ataque += 5;
    this.defesa += 5;
    this.destreza++;
  },
  treino: function () {
    this.forca += 10;
    this.ataque += 5;
    this.destreza++;
    this.energia -= 5;
  },
  danoLuta: function () {
    if (oponenteDeLuta.ataque >= 20) {
      this.energia -= 10;
      this.forca -= 10;
    } else {
      this.energia -= 5;
      this.forca -= 10;
    }
  },
  nivelUp: function () {
    this.energia = 30;
    this.forca = 0;
    this.ataque = 0;
    this.defesa = 0;
    this.destreza = 0; 

  },
    status:function() {
    console.log('===============================================');
    console.log('                    STATUS                     ');
    console.log('===============================================');
    console.log(`
    GLADIADOR:........      ${this.nome}
    NÍVEL:............      ${this.nivel}
    ENERGIA:..........      ${Number(this.energia)}%
    FORÇA:............      ${Number(this.forca)}%
    ATAQUE:...........      ${Number(this.ataque)}%
    HABILIDADES:........    ${Number(this.destreza)}
    `);
    console.log('===============================================');
}
};
let oponente1 = {
    nome: 'Monkeyman',
    energia: 60,
    forca: 60,
    ataque: 30,
    defesa: 30,
    destreza: 30,
    nivel: 1,
    restauraEnergia: function () {
        this.energia +=5;
        this.forca +=5;
        this.ataque +=5;
        this.defesa +=5;
        this.nivel++;
        this.nome = '';
  },
    oponente1Status:function () {
    console.clear();
    console.log('===============================================');
    console.log('                    STATUS                     ');
    console.log('===============================================');

    console.log(`${Number(tempo.dia)}º dia ${tempo.horas} horas da ${tempo.periodo}`),
    console.log(`
    GLADIADOR:.......${this.nome}
    ENERGIA:..........${Number(this.energia)}%
    FORÇA:............${Number(this.forca)}%
    ATAQUE:...........${Number(this.ataque)}%
    HABILIDADE:...........${Number(this.destreza)}
    `);
    console.log('===============================================');
}
};
let oponente2 = {
    nome: 'Lucius',
    energia: 50,
    forca: 50,
    ataque: 20,
    defesa: 20,
    destreza: 20,
    nivel: 1,
    restauraEnergia: function () {
        this.energia +=5;
        this.forca +=5;
        this.ataque +=5;
        this.defesa +=5;
        this.nivel++;
        this.nome = '';
  },
   oponente2Status: function() {
    console.clear();
    console.log('===============================================');
    console.log('                    STATUS                     ');
    console.log('===============================================');
    console.log(`${Number(tempo.dia)}º dia ${tempo.horas} horas da ${tempo.periodo}`),
    console.log(`
    GLADIADOR:.......${this.nome}
    ENERGIA:..........${Number(this.energia)}%
    FORÇA:............${Number(this.forca)}%
    ATAQUE:...........${Number(this.ataque)}%
    DEFESA:...........${Number(this.defesa)}
    `);
   console.log('===============================================');
}

};
let oponente3 = {
    nome: 'Smigail',
    energia: 30,
    forca: 30,
    ataque: 10,
    defesa: 10,
    destreza: 10,
    nivel: 1,
    restauraEnergia: function () {
        this.energia +=5;
        this.forca +=5;
        this.ataque +=5;
        this.defesa +=5;
        this.nivel++;
        this.nome = '';
  },
    oponente3Status:function() {
    console.clear();
    console.log('===============================================');
    console.log('                    STATUS                     ');
    console.log('===============================================');
    console.log(`${Number(tempo.dia)}º dia ${tempo.horas} horas da ${tempo.periodo}`),
    console.log(`
    GLADIADOR:.......${this.nome}
    ENERGIA:..........${Number(this.energia)}%
    FORÇA:............${Number(this.forca)}%
    ATAQUE:...........${Number(this.ataque)}%
    DEFESA:...........${Number(this.defesa)}%
    `);
    console.log('===============================================');
}
};
//////
////==> FUNÇÕES DO JOGO
// Função menu de opções
function opc() {
  for (let i in opcoes) {
      console.log(`[${Number(i) + 1}]`+opcoes[i]);
  }
}
function introGame() {
  console.log('  Mancrazy, um simples camponês de um pequeno vilarejo no extremo norte da Normandia\n',
    'em um rotineiro dia de trabalho no campo fora surpreendido com um inesperado ataque\n',
    'de mercenários em busca de escravos para o seu comércio marítimo.\n',
    'Uma nova realidade começa a fazer parte da vida do nosso humilde camponês, um escravo!\n',
    'Porém ainda resta uma chance, uma esperança, vencer a batalha de gladiadores',
    'em um\n evento anual ao sul da Groelândia.\n',
    'Mancrazy precisa treinar e se preparar para enfrentar essa batalha, pois a vitória\n',
    'pode ser o seu passaporte de retorno para casa.\n',
    'Ajude Mancrazy nas escolhas diárias para vencer esse desafio.');
  console.log();
  console.log('Cuidado com sua escolhas, seus limites de força e energia estão baixo.');
}
// Função cabeçalho da tela de apresentação.
function cabecalhoGame() {
  console.clear();
  console.log('******************************************************************************');
  console.log('******************************************************************************');
  console.log('                              GLADIADORES                                     ');
  console.log('******************************************************************************');  
  console.log('******************************************************************************');
  console.log('                             Dias de Luta                                     ');
}
//// Função luta, altera os atributos dos objetos e o tempo.
//sorteio aleátorio do oponente, condicional para vitoria, é o maior valor do atributo força
function lutar() {
  console.clear();
  if (vitorias > 2) {
    nivel++;
  }
  tempo.ContTempo(5); // Altera meu tempo em 5 horas
  let listaOponentes = [oponente1, oponente2, oponente3]; // Lista com os objetos
  oponenteDeLuta = listaOponentes[Math.floor(Math.random() * listaOponentes.length)]; // Recebendo o sorteios dos objetos e armazenando em variável
  console.log(`Você lutará com ${oponenteDeLuta.nome}`);
  console.log();  
  prompt('>ENTER<');
  console.log('Lutando..... ATACA');
  console.log();  
  prompt('>ENTER<');
  console.log('Defende..... ');
  console.log();  
  prompt('>ENTER<');
  console.log();
  console.log(' ==> FIM DE LUTA <==');
  if ((oponenteDeLuta.forca > gladiador.forca) && (oponente1.ataque > gladiador.ataque)) {
      derrotas++;
      console.log('Você perdeu!!!');
      console.log();
      console.log(`Você lutou com ${oponenteDeLuta.nome}`);
      console.log(`Sua força de ataque é ${oponenteDeLuta.forca}`);
      let diferenca = Number(oponenteDeLuta.forca) - Number(gladiador.forca);
      console.log(`${oponenteDeLuta.nome} é ${diferenca} mais forte que você.`);
      gladiador.danoLuta();
      console.log();
      console.log('Precisa treinar mais.');
      prompt('>ENTER<');
  } else if ((gladiador.forca > oponenteDeLuta.forca) && (gladiador.ataque > oponenteDeLuta.ataque)) {
      vitorias++
      console.log('Você Ganhou!!!\nPARABÉNS');
      console.log();
      console.log(`Você lutou com ${oponenteDeLuta.nome}`);
      console.log(`Sua força de ataque é ${oponenteDeLuta.forca}`);
      let diferenca = gladiador.forca - oponenteDeLuta.forca;
      console.log(`Você é ${diferenca} mais forte que seu oponente o ${oponenteDeLuta.nome}.`);
      console.log();
      console.log('Como prêmio, recebe um bônus que restaura sua energia.');
      prompt('Restabelecendo energia....');
      console.clear();
      gladiador.restauraEnergia();
      console.clear();
      console.log();
      console.log('Seu novo Status...');
      console.log();
       gladiador.status();
      console.log();
      prompt('>ENTER<');
  } else {
  console.log('LUTA EMPATADA\nLutadores com mesmo nível de força');
  prompt('>ENTER<');
  }
  console.clear();
}
// Função treinar, altera os atributos dos objetos e o tempo.
function treinar() {
  treino++;
  if (tempo.horas == 12) {
   tempo.ContTempo(2);
  } else if (tempo.periodo == 'Noite') {
    tempo.mudaDia();
    tempo.horas = 8;
  } else {console.log('ERRO!')}  
  console.clear();
  tempo.ContTempo(4);
  gladiador.treino();
  console.log();
  console.log('Treinando..... FORÇA');
  prompt('>ENTER<\n');
  console.log();
  console.log('Treinando..... ATAQUE');
  prompt('>ENTER<\n');
  console.log();
  console.log(' ==> TREINAMENTO COMPLETO <==');
  prompt('>ENTER<\n');
  console.log();
  console.log('Foi um bom treino');
  console.log('Aos Poucos você vai ganhando mais habilidades');
  console.log();
  prompt('>ENTER<\n');
}
// Função intervalo altera os atributos dos objetos e o tempo
function intervalo() {
  console.clear();
  gladiador.restauraEnergia();
  if (tempo.periodo == 'Noite') {
    console.log();
    console.log(`Agora são extamente ${tempo.horas} horas da ${tempo.periodo}.`);
    console.log('Precisa descançar, amanhã será outro dia.');
    tempo.mudaDia();
    treino = 0;
    gladiador.restauraEnergia();
    prompt('Boa Noite\nZZZzzzzz....');
  } else if (tempo.horas >= 12 && tempo.horas < 14) {
    console.log();
    console.log('A hora da refeição é um momento sagrado!');
    console.log('Hora de fazer uma pausa para recompor as energias.');
    tempo.ContTempo(2);
    gladiador.restauraEnergia();
    console.log('Restaurando energia....');
    prompt('Aproveite sua refeição\n>ENTER<');
    console.clear();
    console.log(`Seu momento de descanço acabou, agora são ${tempo.horas} horas da ${tempo.periodo}.`);
    console.log('Hora de voltar a realidade!');
    prompt('>ENTER<\n')
  }
  opcoes.pop();
}
///
////===> 1º NIVEL <===
function primeiraFase() {
  while (vitorias != 3 || derrotas == 3) {
    console.clear();
    opcoes.splice(0, 3, ' - LUTAR', ' - TREINAR', ' - DESCANSAR');
    console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
    if (gladiador.forca < 10) {
      console.clear();
      console.log(' ## ALERTA ##');
      console.log();
      console.log('Suas forças estão baixas, precisa treinar mais um pouco.');
      prompt('>ENTER<\n');
    }
    if (gladiador.energia == 0) {
      console.clear();
      console.log('Mancrazy morreu de exautão!');
      console.log('Você foi o responsável pela morte de Mancrazy.');
      console.log('Exercícios demais o levaram à exaustão');
      prompt('>ENTER<\n');
      break;
    } else if (derrotas == 3) {
      console.clear();
      console.log();
      console.log('Mancrazy morreu na arena de batalha');
      console.log();
      prompt('>ENTER<\n');
      break;
    }
    cabecalhoGame()
    console.log(`${Number(tempo.dia)}º dia, ${Number(tempo.horas)} horas da ${tempo.periodo}.`);
    if (dia == 0 && tempo.periodo == 'Manhã') {
      console.log();
      console.log('Hoje começa nossa jornada, temos um longo dia pela frente.');
      console.log('Ajude Mancrazy nas escolhas que possam salvar a sua vida.');
      console.log('Ele precisa treinar a arte da guerra para vencer essa batalha.');
      console.log();
    } else if (tempo.horas == 12 && treino == 1) {
      console.log('A fome começa a apertar...');
    } else if(tempo.horas == 14){
      console.log('Agora sim, depois de alimentado hora de seguir adiante.');
    } else if (dia == 1) {
      console.log();
      console.log('Segundo dia....');
      console.log('Continue firme, não desista.');
      console.log();
    } else if (dia >= 2) {
      console.log();
      console.log('Você está quase lá.');
      console.log('Continue firme, não desista.');
      console.log();
    }
    if (treino == 1) {
      console.log('O treino está sendo sofrido, porém é a unica maneira de');
      console.log('garantir sua sobrevivência e sair da vida de escravo.');
    } else if (treino == 2) {
      console.log();
      console.log('Está ganhando habilidades de um lutador');
      console.log('Continue assim.');
      console.log();
    } else if (treino == 3) {
      console.log();
      console.log('Talvez já tenha habilidades necessárias para enfrentar sua primeira batalha.');
      console.log();
    } else if(treino > 3) {
      console.log();
      console.log('Você já treinou o suficiênte para enfrentar as batalhas.');
      console.log('Coragem homem!!!\nEnfrente as lutas, sua sobrevivência de pende disso.');
      console.log();
    }
    if (tempo.horas == 12 || tempo.horas > 19) {
      console.log();
      console.log(`Agora são ${tempo.horas} horas`);
      console.log('Você precisa fazer uma pausa para repôr as suas energias.');
      console.log();
    }
    gladiador.status();
    console.log();
    opc();
    console.log();
    console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
    let escUser = +prompt('Escolha uma opção: ');
    console.log();
    while (escUser != 1 && escUser != 2 && escUser != 3) {
    console.log();
    console.log('Você precisa escolher um número correspondente a opção desejada.');
    console.log();
    opc();
    escUser = +prompt('Escolha uma opção: ');
    }
    if (escUser == 1) {
      if (gladiador.forca < 30) {
        console.clear();
        console.log();
        console.log('Você precisa treinar antes.');
        console.log('Seus atributos estão muito baixos');
         gladiador.status();
        console.log();
        prompt('>ENTER<\n');
        console.clear();
        continue;
      } else if (tempo.periodo == 'Noite') {
          console.clear();
          prompt('Você precisa fazer uma pausa!');
          continue;
      }else {
        lutar();
      }
    } else if (escUser == 2) {
      if (tempo.horas == 12 || tempo.periodo == 'Noite') {
        console.clear();
        prompt('Você precisa fazer uma pausa!');
        continue;
      } else {
      treinar()
      }
    } else if (escUser == 3) {
      if (tempo.horas != 12 && tempo.periodo != 'Noite') {
        console.clear();
        console.log('Isso não é hora pra descanço.');
        console.log('Não esqueça que você é um escravo, não pode descansar quando bem quer.');
        prompt('>ENTER<\n');
        continue;
      } else {
        intervalo();
      } 
    }
  }
}
////
///////// ===> 2º NIVEL
// a elaborar
////
// ==> INICIO DO JOGO <==
while (sair) {
  sair = true;
  introGame();
  opcoes = [' - ENTRAR', ' - SAIR'];
  oponenteDeLuta = '';
  console.log();
  for (let i in opcoes) {
    console.log(`[${Number(i) + 1}]` + opcoes[i]);
  }
  console.log();
  let escUser = +prompt('Escolha uma opção: ');
  while (escUser != 1 && escUser != 2) {
    console.log();
    console.log('Você precisa escolher um número correspondente a opção desejada.');
    console.log();
    opc();
    escUser = +prompt('Escolha uma opção: ');
  }
  if (escUser == 1) {
    primeiraFase();
    console.clear();
    if (derrotas == 3 || gladiador.energia == 0) {
      console.log('VOCÊ PERDEU!!!');
      prompt('Fim de Jogo\n');
      break;
    } else if (vitorias == 3) {
      console.clear();
      //gladiador.nivelUp(); Continua na versão 1.1
      console.log();
      console.log(`${Number(tempo.dia)}º dia ${Number(tempo.horas)} horas da ${tempo.periodo}.`);
      console.log();
      console.log('=-=-=-=-=- VITÓRIA -=-=-=-=-=-=-');
      console.log();
      console.log('Como prêmio recebe além da sua liberdade um passe na embarcação\ncom destino a sua terra natal.');
      let resp = prompt('Deseja jogar novamente? [S/N]').toLowerCase();
      if (resp == 's') {
        continue;
      } else {
        break;
      }
    } 
  } else {
    break;
  }
}
