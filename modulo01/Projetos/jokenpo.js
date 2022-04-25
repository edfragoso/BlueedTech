const prompt = require('prompt-sync')();
let init = true
while (init == true) {
    init = false;
    let opc = ['0', '1', '2']; // Criando a lista com os elementos
    let escCPU = 0;   // Variável escolha do PC
    let escUser = 0;  // Variável esolha do Usuário 
    let sair = true;
    let resp = '';
    let pc = '';
    let user = '';
    let qtdPart = 0;
    let qtdEscUser = 0;
    let nVitoiraUser = 0;
    let nEmpateUser = 0;
    let nDerrotasUser = 0;
    let nVitoiraCPU = 0;
    let nEmpateCPU = 0;
    let nDerrotasCPU = 0;
    let pontoCPU = 0;
    let pontoUser = 0;
    console.log();
    console.log();
    console.log('**************************************');
    console.log('   \t  - JOKENPÔ - ');
    console.log('**************************************');
    console.log();
    console.log('O Jokenpô é o popular jogo do "pedra, papel e tesoura".');
    console.log('A premissa é simples, você tem 3 elementos para escolher,');
    console.log('cada um deles vence de um, e perde para o outro.');
    console.log();
    console.log('## Pedra ganha da tesoura, mas perde para o papel ##');
    console.log('## Tesoura ganha do papel, mas perde para a pedra ##');
    console.log('## Papel ganha da pedra, mas perde para a tesoura ##');
    console.log();
    console.log('Você escolhe uma opção');
    console.log('O computador também escolhe de forma aleatória ');
    console.log();
    qtdEscUser = +prompt('Escolha o nº Partidas? ');
    console.log();
    console.clear();
    console.log();

    while (qtdPart < qtdEscUser) {
        console.log();
        console.log();
        console.log('**************************************');
        console.log('   \t  - JOKENPÔ - ');
        console.log('**************************************');
        console.log('*                                    *');
        console.log('* [ 0 ] ->PEDRA<-                    *');
        console.log('* [ 1 ] ->PAPEL<-                    *');
        console.log('* [ 2 ] ->TESOURA<-                  *');
        console.log('*                                    *');
       console.log('***************************************');
        console.log();
        console.log(`${Number(qtdPart) + 1}ª Rodada`);
        while (sair == true) {
            escUser = + prompt('Escolha uma opção: ');
            //console.log(`jogar escolhe: ->${escUser}`);
            console.log();
            if (escUser == 0 || escUser == 1 || escUser == 2) {
                escCPU = Math.floor(Math.random() * opc.length);
                if (escCPU == 0) { // 0 corresponde ao item PEDRA
                    pc = 'PEDRA';   
                } else if (escCPU == 1) { // 1 corresponde ao item PAPEL
                    pc = 'PAPEL';   
                } else {
                    pc = 'TESOURA'; // 3º opção corresponde TESOURA    
                }
                if (escUser == 0) {
                    user = 'PEDRA';   
                } else if (escUser == 1) {
                    user = 'PAPEL';  
                } else {
                    user = 'TESOURA';  
                }
                console.log();
                if (pc == 'PEDRA') {
                    if (user == 'PEDRA') {
                        console.log(`${Number(qtdPart) + 1}ª Rodada`);
                        console.log('**************************************');
                        console.log('\t-> EMPATE <-');
                        console.log(`Você escolheu --> ${user} <--`);
                        console.log(`Computador escolheu --> ${pc} <--`);
                        console.log('Ambos escolheram o mesmo item')
                        console.log('**************************************');
                        nEmpateCPU++
                        nEmpateUser++
                    } else if (user == 'PAPEL') {
                        console.log();
                        console.log(`${Number(qtdPart) + 1}ª Rodada`);
                        console.log('**************************************');
                        console.log('\tJOGADOR VENCE!');
                        console.log(`Você escolheu --> ${user} <--`);
                        console.log(`Computador escolheu --> ${pc} <--`);
                        console.log();
                        console.log('--> PAPEL GANHA DE PEDRA <--')
                        console.log('**************************************');
                        pontoUser++
                        nVitoiraUser++
                        nDerrotasCPU++
                    } else if (user == 'TESOURA') {
                        console.log();
                        console.log(`${Number(qtdPart) + 1}ª Rodada`);
                        console.log('**************************************');
                        console.log('\tCPU VENCE!');
                        console.log(`Você escolheu --> ${user} <--`);
                        console.log(`Computador escolheu --> ${pc} <--`);
                        console.log();
                        console.log('--> PEDRA GANHA DE TESOURA <--')
                        console.log('**************************************');
                        pontoCPU++
                        nVitoiraCPU++
                        nDerrotasUser++
                    } else {
                        console.log('Opção Inválida');
                    }
                } else if (pc == 'PAPEL') {
                    if (user == 'PAPEL') {
                        console.log();
                        console.log(`${Number(qtdPart) + 1}ª Rodada`);
                        console.log('**************************************');
                        console.log('\t-> EMPATE <-');
                        console.log(`Você escolheu --> ${user} <--`);
                        console.log(`Computador escolheu --> ${pc} <--`);
                        console.log('Ambos escolheram o mesmo item')
                        console.log('**************************************');
                        nEmpateCPU++
                        nEmpateUser++
                    } else if (user == 'TESOURA') {
                        console.log();
                        console.log(`${Number(qtdPart) + 1}ª Rodada`);
                        console.log('**************************************');
                        console.log('\tJOGADOR VENCE');
                        console.log(`Você escolheu --> ${user} <--`);
                        console.log(`Computador escolheu --> ${pc} <--`);
                        console.log();
                        console.log('--> TESOURA VENCE PAPEL <-- ');
                        console.log('**************************************');
                        pontoUser++
                        nVitoiraUser++
                        nDerrotasCPU++
                    } else if (user == 'PEDRA') {
                        console.log();
                        console.log(`${Number(qtdPart) + 1}ª Rodada`);
                        console.log('**************************************');
                        console.log('\tCOMPUTADOR VENCE!');
                        console.log(`Você escolheu --> ${user} <--`);
                        console.log(`Computador escolheu --> ${pc} <--`);
                        console.log();
                        console.log('--> PAPEL VENCE PEDRA <--');
                        console.log('**************************************');
                        pontoCPU++
                        nVitoiraCPU++
                        nDerrotasUser++
                    }
                } else if (pc == 'TESOURA') {
                    if (user == 'TESOURA') {
                        console.log();
                        console.log(`${Number(qtdPart) + 1}ª Rodada`);
                        console.log('**************************************');
                        console.log('\t->EMPATE<-');
                        console.log(`Você escolheu --> ${user} <--`);
                        console.log(`Computador escolheu --> ${pc} <--`);
                        console.log('Ambos escolheram o mesmo item')
                        console.log('**************************************');
                        nEmpateCPU++
                        nEmpateUser++
                    } else if (user == 'PEDRA') {
                        console.log();
                        console.log(`${Number(qtdPart) + 1}ª Rodada`);
                        console.log('**************************************');
                        console.log('\tJOGADOR VENCE')
                        console.log(`Você escolheu --> ${user} <--`);
                        console.log(`Computador escolheu --> ${pc} <--`);
                        console.log();
                        console.log('--> PEDRA VENCE TESOURA <--');
                        console.log('**************************************');
                        pontoUser++
                        nVitoiraUser++
                        nDerrotasCPU++
                    } else if (user == 'PAPEL') {
                        console.log();
                        console.log(`${Number(qtdPart) + 1}ª Rodada`);
                        console.log('**************************************');
                        console.group('\tCPU VENCE!');
                        console.log(`Você escolheu --> ${user} <--`);
                        console.log(`Computador escolheu --> ${pc} <--`);
                        console.log();
                        console.log('--> TESOURA VENCE PAPEL <--');
                        console.log('**************************************');
                        pontoCPU++
                        nVitoiraCPU++
                        nDerrotasUser++
                    }
                }
                qtdPart++
                break;
            } else {
                console.log();
                console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-');
                console.log('\t ## ERRO! ## ');
                console.log('--> Opção INVÁLIDA <--')
                console.log();
                console.log('Você precisa escolher entre "0", "1" e "2" ');
                console.log('Tente novamente!');
                console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
                console.log();
                continue;
            }

        }
    }
    console.log();
    console.log('**************************************');
    console.log('\t ## FINAL ##');
    console.log('**************************************');
    if (pontoCPU > pontoUser) {
        console.log();
        console.log(' ## COMPUTADOR VENCEU!! ##');
        console.log();
        console.log(`Total de Partidas: ${qtdPart}`);
        if (qtdPart >= 2) {
            console.log();
            console.log(`Vitórias: ${nVitoiraCPU} vezes.`);
            console.log(`Empate: ${nEmpateCPU} vezes.`);
            console.log(`Derrotas: ${nDerrotasCPU} vezes.`);
            console.log();
        }
    } else if (nVitoiraCPU == nVitoiraUser) {
        console.log();
        console.log(' \t--> EMPATOU <--');
        console.log(`Total de Partidas: ${qtdPart}`);
        if (qtdPart >= 2) {
            console.log('Computador...');
            console.log();
            console.log(`Vitórias:......${nVitoiraCPU}.`);
            console.log(`Empate:......${nEmpateCPU}.`);
            console.log(`Derrotas: ${nDerrotasCPU}.`);
            console.log('-------------------------------------');
            console.log();
            console.log('Jogador...');
            console.log();
            console.log(`Vitórias:......${nVitoiraUser}.`);
            console.log(`Empate:......${nEmpateUser}.`);
            console.log(`Derrotas:......${nDerrotasUser}.`);
            console.log('=====================================');
            console.log();
        }
    } else {
        console.log();
        console.log(' ## JOGADOR VENCEU!! ##');
        console.log();
        console.log(`Total de Partidas: ${qtdPart}`);
        if (qtdPart >= 2) {
            console.log(`Vitórias:......${nVitoiraUser}.`);
            console.log(`Empate:......${nEmpateUser}.`);
            console.log(`Derrotas:......${nDerrotasUser}.`);
            console.log();
        }
        
    }
    console.log();
    resp = prompt('Jogar novamente? [S/N] ').toLowerCase();
    console.clear();
    if (resp == 's') {
        init = true;
        continue;
    } else if (resp == 'n') {
        init = false;
        break;
    } else { 
        console.log()
        console.log(' ## ERRO! ## ')
        console.log('Opção INVÁLIDA')
        console.log()
        console.log('Você precisa escolher entre "S" ou "N" ');
        console.log('Tente novamente!');
        console.log()
        continue;
    }
    
}
console.log();
console.log('Fim de Jogo');
console.log();