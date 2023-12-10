const alterarTema = () => {
    const botao = document.querySelector('.mode');

    botao.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        document.querySelector('.principal').classList.toggle('principalDark');
        document.querySelector('.list-links').classList.toggle('textWhite');
        document.querySelector('.mode').innerHTML = '<ion-icon name="sunny"></ion-icon>';
        document.querySelector('.mode').classList.toggle('modeDark');
    })
}

alterarTema();