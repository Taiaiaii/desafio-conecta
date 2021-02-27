const depoimentos = [

    {
        texto: '"Laborum aliquid , veritatis soluta possimus esse?"',
        autor: "@zédascouves"

    },

    {
        texto: '"Dolor sit amet consectetur adipisicing elit!!"',
        autor: "@fulano"

    },

    {
        texto: '"Excepturi et facilis, recusandae beatae laboriosam autem velit!"',
        autor: "@cicrano"

    },

    {

        texto: '"Lorem ipsum dolor sit amet, elit. Optio, incidunt facilis!"',
        autor: "@taiaiaii"

    },

];

let limite = depoimentos.length - 1;
let posicao = limite;

function proximoItem() {
    if (posicao < limite) {
        posicao++;
    } else {
        posicao = 0;
    }

    return posicao;
}

function trocaDepoimento() {

    let depoimento = depoimentos[proximoItem()];


    document.querySelector(".depoimento-texto").textContent = depoimento.texto;
    document.querySelector(".depoimento-autor").textContent = depoimento.autor;

    document.querySelector(".active").classList.remove("active");
    document.querySelector('.demonstrativo__bullets a[data-posicao="' + posicao + '"]').classList.add("active");
}

setInterval(trocaDepoimento, 3000);
