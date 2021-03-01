const produtos = document.querySelectorAll('.produtos__item');
const divConteudo = document.createElement('div')
divConteudo.classList.add('ver-mais')

for (let item of produtos) {

    item.addEventListener('click', function (event) {

        if (event.target.classList.contains('botao-produto')) {
            console.log('clicado')

            if (item.classList.contains('produto-clicado')) {
                item.classList.remove('produto-clicado');
                divConteudo.remove()
                event.target.textContent = 'Ver Mais'

            } else {
                item.classList.add('produto-clicado');
                event.target.textContent = 'Voltar'



                divConteudo.innerHTML = `    
    <h1>Sobre</h1>
    <p>Lorem ipsum,possimus dicta.Velit ducimus saepe earum expedita veritatis, quidem animi optio. Suscipit, omnis.</p>
    <ul>
        <li>Entega Rapida R$ XX,XX</li>
        <li> Entrega Normal R$ XX, XX </li>
    </ul>`
                // debugger;
                item.appendChild(divConteudo)
                
            }

        }





    });
}