var imagens = document.querySelectorAll(".slider-item");
var anterior = document.getElementById("anterior");
var proximo = document.getElementById("proximo");

var ativa = 0;

anterior.onclick = function () {
    console.log("anterior");
}

anterior.onclick = function () {
    // console.log("proximo");
    for (var i = 0; i < imagens.length; i++) {
        imagens[i].classList.remove("active")
    }
    if (ativa === 0) {
        imagens[imagens.length - 1].classList.add("active");
        ativa = imagens.length - 1;
    } else {
        imagens[ativa - 1].classList.add("active");
        ativa--;
    }
}

proximo.onclick = function () {
    // console.log("proximo");
    for (var i = 0; i < imagens.length; i++) {
        imagens[i].classList.remove("active")
    }
    if (ativa === imagens.length - 1) { //condição para ser a última imagem
        imagens[0].classList.add("active");
        ativa = 0;
    } else {
        imagens[ativa + 1].classList.add("active");
        ativa++;
    }
}
