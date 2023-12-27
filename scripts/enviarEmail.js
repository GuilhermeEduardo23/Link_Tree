const form = document.getElementById('form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formulario = document.querySelector('.form');
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.querySelector('.message').value;
    const janelaModal = document.getElementById('janela-modal');
    const fechar = document.getElementById('fechar');

    if(name === '') {
        alert('Campo nome está vazio!');
        return;
    } else if(email === '') {
        alert('Campo e-mail está vazio!');
        return;
    } else if(message === '') {
        alert('Campo de mensagem está vazio!');
        return;
    }

    fechar.addEventListener('click', () => janelaModal.style.display = 'none');

    const params = {
        from_name: name,
        email: email,
        message: message
    }

    const response = await emailjs.send('service_uc1zoru', 'template_v0n9k3l', params, 'oXKMjJ3psTgu8fatF')
    
    try {
        janelaModal.style.display = 'flex';
        console.log('Deu certo');
    } catch (error) {
        alert('No momento houve um erro ao enviar o e-mail. Tente novamente!');
    } finally {
        formulario.reset();
    }
})