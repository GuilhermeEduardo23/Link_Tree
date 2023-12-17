const button = document.querySelector('.btn');

button.addEventListener('click', async (e) => {
    e.preventDefault();

    const formulario = document.querySelector('.form');
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.querySelector('.message').value;

    const params = {
        from_name: name,
        email: email,
        message: message
    }

    const response = await emailjs.send('service_uc1zoru', 'template_v0n9k3l', params, 'oXKMjJ3psTgu8fatF')
    
    try {
        alert('E-mail enviado com sucesso!');
    } catch (error) {
        alert('No momento houve um erro ao enviar e-mail. Tente novamente!');
    } finally {
        formulario.reset();
    }
})