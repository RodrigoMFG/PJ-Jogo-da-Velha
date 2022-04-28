let jogador
let jogadorSelecionado = document.getElementById('jogador-selecionado');
function escolhaQuadrado(id) {
    console.log(id);
    let espaço = document.getElementById(id);
    espaço.innerHTML = jogador;
    espaço.style.color = '--color-active';

}

