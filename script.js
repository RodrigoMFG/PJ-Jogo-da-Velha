let vencedor =  null
let jogador = null
let jogadorSelecionado = document.getElementById('jogador-selecionado');
let vencedorSelecionado = document.getElementById('vencedor');
let espaço = document.getElementsByClassName('espaço');

mudarJogador('X');

function escolhaQuadrado(id) {
    if(vencedor !== null){return}

    let espaço = document.getElementById(id);
    if(espaço.innerHTML !=='-'){return;};
    espaço.innerHTML = jogador;
    espaço.style.color = 'black';

    jogador ==='X'? jogador ='0' : jogador ='X' ;

    mudarJogador(jogador);
    checkWinner();
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador ;

}

function checkWinner () {
    let espaço1 = document.getElementById(1);
    let espaço2 = document.getElementById(2);
    let espaço3 = document.getElementById(3);
    let espaço4 = document.getElementById(4);
    let espaço5 = document.getElementById(5);
    let espaço6 = document.getElementById(6);
    let espaço7 = document.getElementById(7);
    let espaço8 = document.getElementById(8);
    let espaço9 = document.getElementById(9);

    if(checarSequencia(espaço1, espaço2, espaço3)){
        mudarCor(espaço1, espaço2, espaço3);
        mudarVencedor(espaço1);
        return
    }

    if(checarSequencia(espaço4, espaço5, espaço6)){
        mudarCor(espaço4, espaço5, espaço6);
        mudarVencedor(espaço4);
        return
    }
    if(checarSequencia(espaço7, espaço8, espaço9)){
        mudarCor(espaço7, espaço8, espaço9);
        mudarVencedor(espaço7);
        return
    }
    if(checarSequencia(espaço1, espaço4, espaço7)){
        mudarCor(espaço1, espaço4, espaço7);
        mudarVencedor(espaço1);
        return
    }
    if(checarSequencia(espaço2, espaço5, espaço8)){
        mudarCor(espaço2, espaço5, espaço8);
        mudarVencedor(espaço2);
        return
    }
    if(checarSequencia(espaço3, espaço6, espaço9)){
        mudarCor(espaço3, espaço6, espaço9);
        mudarVencedor(espaço3);
        return
    }
    if(checarSequencia(espaço1, espaço5, espaço9)){
        mudarCor(espaço1, espaço5, espaço9);
        mudarVencedor(espaço1);
        return
    }
    if(checarSequencia(espaço3, espaço5, espaço7)){
        mudarCor(espaço3, espaço5, espaço7);
        mudarVencedor(espaço3);
        return
    }
}

function mudarVencedor(jogador) {

    vencedor = jogador.innerHTML;
    vencedorSelecionado.innerHTML = vencedor

}

function checarSequencia(espaço1, espaço2, espaço3) {

    let eigual = false;

    if(espaço1.innerHTML !=='-' && espaço1.innerHTML === espaço2.innerHTML && espaço1.innerHTML === espaço3.innerHTML ) {
        eigual = true

    }
    return eigual;

}

function mudarCor (espaço1, espaço2, espaço3) {
    espaço1.style.background = 'green';
    espaço2.style.background = 'green';
    espaço3.style.background = 'green';

}


function reiniciar() {
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for(let i =1; i<=9 ; i++){
        let espaço = document.getElementById(i);
        espaço.style.background = 'lightgrey';
        espaço.style.color = 'lightgrey';
        espaço.innerHTML = '-';
    }
    mudarJogador('X');
}