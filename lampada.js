//1ª pergunta o que eu quero que varie? Nesse caso é a lâmpada.
var lamp = window.document.getElementById('lampada')

function estaQuebrada() {
    return lamp.src.indexOf('quebrada') > -1
}

function Ligar() {
    if (!estaQuebrada()){
    lamp.src = 'Assets/ligada.png'
}
}

function Desligar() {
    if (!estaQuebrada()){
    lamp.src = 'Assets/desligada.png'
    }
}

lamp.addEventListener('click', Quebrar)
function Quebrar(){
    lamp.src = 'Assets/quebrada.png'
}
    