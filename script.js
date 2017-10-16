var botao = document.getElementById("botao");
var fundo = document.getElementById("fundo");
var fechar = document.getElementById("fechar");

//onclick: quando alguém clicar no botão, vou executar uma determinada função; serve para saber se está funcionando o clique;
botao.onclick = function() {
    // console.log("cliquei");
    fundo.classList.add("visivel");
}

fechar.onclick = function() {
    fundo.classList.remove("visivel");
}

fundo.onclick = function(event) {
    // console.log(e);
    if (event.target == fundo) {
        fundo.classList.remove("visivel");
  }
}


// document.querySelector('#botao') <--quando for classe, coloca .botao para chamar no js;
// console.log(botao); <--testar o que tiver errado na class;