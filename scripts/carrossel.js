const depoimentos = [


    {
        texto: '"Laborum aliquid , veritatis soluta possimus esse?"',
        autor: "@taiaiai"

    },

    {
        texto: '"Dolor sit amet consectetur adipisicing elit!!"',
        autor: "@fulano"

    },

    {
        texto: '"Excepturi et facilis, recusandae beatae laboriosam velit!"',
        autor: "@cicrano"

    },

    {

        texto: '"Necessitatibus ab possimus vel voluptate,  doloribus"',
        autor: "@beltrano"

    },





];

let limite = depoimentos.length - 1;
let posicao = -1;

function proximoItem() {
    if (posicao < limite) {
        posicao++;
    } else {
        posicao = 0;
    }

    return posicao;
}

function trocaItem() {
    let item = depoimentos[proximoItem()];
    ativaItem(item, posicao)
}
trocaItem()
function ativaItem(item, posicao) {
    document.querySelector(".depoimento-texto").textContent = item.texto;
    document.querySelector(".depoimento-autor").textContent = item.autor;


    document.querySelector(".active").classList.remove("active");
    document.querySelector(`.demonstrativo__bullets span[data-posicao="${posicao}"]`).classList.add("active");
}

setInterval(trocaItem, 3000);

document.querySelector('.demonstrativo__bullets').addEventListener('click', function(event){
    
    var atual = event.target.dataset.posicao
    
    ativaItem(depoimentos[atual], atual)
    posicao = atual
    
})