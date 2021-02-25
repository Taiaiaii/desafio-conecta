// const depoimentos = [
//     {

//         imagem: "section2-direita-topo.png",
//         texto: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, incidunt facilis!",
//         autor: "@taiaiaii"

//     },

//     {
//         imagem: "section2-direita-topo.png",
//         texto: "Laborum aliquid doloremque eum ut repellendus corporis repellat, veritatis soluta possimus esse?",
//         autor: "@zédascouves"

//     },

//     {
//         imagem: "section2-direita-topo.png",
//         texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facere quis et a quidem!!",
//         autor: "@fulano"

//     },

//     {
//         imagem: "section2-direita-topo.png",
//         texto: "Excepturi praesentium magnam et facilis, libero a delectus recusandae beatae laboriosam autem velit!",
//         autor: "@cicrano"

//     },

// ];

// let limite = depoimentos.length - 1;
// let posicao = limite;

// function proximoItem() {
//     if (posicao < limite) {
//         posicao++;
//     } else {
//         posicao = 0;
//     }

//     return posicao;
// }

// function trocaDepoimento() {

//     let depoimento = depoimentos[proximoItem()];

//     document.querySelector(".imagem__comentarios").src = "images/" + depoimentos.imagem;
//     document.querySelector(".depoimento-texto").textContent = depoimentos.texto;
//     document.querySelector(".depoimento-autor").textContent = depoimentos.autor;

// }

// setInterval(trocaDepoimento, 2000);