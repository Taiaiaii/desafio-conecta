const form = document.querySelector('form');
const divMsg = document.createElement('div');
divMsg.classList.add('msg-sucesso');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let obrigatorios = form.querySelectorAll('.obrigatorio');
    let mensagens = [];

    for (let campo of obrigatorios) {
        if (!campo.value.trim()) {
            mensagens.push(campo.dataset.mensagem);
            campo.classList.add('destacar-campo');
        } else {
            campo.classList.remove('destacar-campo');
        }
    }

    if (mensagens.length > 0) {
        divMsg.innerHTML = mensagens.join('<br>');
        divMsg.classList.replace('msg-sucesso', 'msg-campo-obrigatorio');
    } else {
        divMsg.textContent = "Agradecemos sua mensagem!!";
        divMsg.classList.replace('msg-campo-obrigatorio', 'msg-sucesso')
        form.reset();
    }

    form.insertAdjacentElement('beforebegin', divMsg);

    function resetarFormulario() {
        let camposErrados = form.querySelectorAll('.destacar-campo');
        for (let campo of camposErrados) {
            campo.addEventListener('change', () => {
                campo.classList.remove('destacar-campo');

            });
        }

        form.onclick = () => divMsg.remove()
    }

    resetarFormulario();

});

const seletor = document.querySelector('#assunto')

seletor.addEventListener('change', ()=>{
    if (!seletor.value) {
        seletor.classList.add('seletor')
    }else {
        seletor.classList.remove('seletor');
    }
})
var event = new Event('change');
seletor.dispatchEvent(event);
 