const botao = document.querySelector('.mode');
const icon = document.createElement('img');
const links = document.querySelectorAll('.links');

(function createIcon() {
    icon.setAttribute('src', 'assets/images/lua.png');
    botao.appendChild(icon);
})();

const alterarTema = () => {
    botao.addEventListener('click', () => {
        if(document.body.clientWidth >= 768) {
            document.body.classList.toggle('darkDesktop');
        } else {
            document.body.classList.toggle('darkMobile');
        }

        const darkMode = document.body.classList.contains('darkDesktop') || document.body.classList.contains('darkMobile');

        if(darkMode) {
            icon.setAttribute('src', 'assets/images/sol.png');
        } else {
            icon.setAttribute('src', 'assets/images/lua.png');
        }

        links.forEach((link) => {
            link.classList.toggle('linksColorWhite');
        });
    })
}

alterarTema();