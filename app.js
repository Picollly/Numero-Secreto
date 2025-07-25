let listaDeNumerosSorteados= [];
let limiteDaLista = 200; 
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function mostrarTextoNaTela(tag, texto) {
    let paragrafo = document.querySelector(tag);
    paragrafo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}
function mensagemTela() {
    mostrarTextoNaTela('h1', 'Jogo do número secreto');
    mostrarTextoNaTela('p', 'Escolha um número de 1 a 200');
}
mensagemTela()

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        mostrarTextoNaTela('h1', 'Parabéns você acertou!');
        let palavraTentativa= tentativas> 1 ? 'tentativas' : 'tentativa';
        let textoTentativas= `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        mostrarTextoNaTela('p', textoTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute>numeroSecreto) {
            mostrarTextoNaTela('p', 'O numero secreto é menor.');
        } else{
            mostrarTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++
        limparcampo()
    }


    
}

function gerarNumeroAleatorio() {
    let nummeroEscolido = parseInt(Math.random() * limiteDaLista + 1);
    let quantidadeDeElementosDaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosDaLista == limiteDaLista) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(nummeroEscolido))  {
        return gerarNumeroAleatorio()
    } else {
        listaDeNumerosSorteados.push(nummeroEscolido)
        return nummeroEscolido;
    }
}

function limparcampo() {
    chute = document.querySelector('input');
    chute.value= '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparcampo();
    tentativas= 1;
    mensagemTela();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    
}