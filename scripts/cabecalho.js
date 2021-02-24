const btn = document.querySelector(".cabecalho__btn");


btn.addEventListener('click', function () {
    
    const guarana = document.querySelector(".cabecalho__img");
    guarana.classList.toggle("transforma");
    setTimeout(function(){
        guarana.classList.remove("transforma");
    }, 700)
});