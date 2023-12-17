const alterarTema = () => {
    const botao = document.querySelector('.mode');
    
    let icon = document.createElement('img');

    const links = document.querySelector('.links');
    const listLinks = document.querySelector('.list-links');

    //Alteração do conteúdo para dispositivo móvel
    botao.addEventListener('click', () => {
        if(document.body.clientWidth <= 767) {
            document.body.classList.toggle('darkMobile');

            links.classList.toggle('textWhite');

            if(document.body.className === 'darkMobile') {
                botao.classList.toggle('modeDark');
                icon.setAttribute('src', '/assets/images/sol.png');
            } else {
                icon.setAttribute('src', '/assets/images/lua.png');
            }

            botao.appendChild(icon);
        }
    })

}

alterarTema();