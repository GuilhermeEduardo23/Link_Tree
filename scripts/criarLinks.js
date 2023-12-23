function criarLinks() {
    const dados = {
        aplicativos: ['E-mail', 'GitHub', 'LinkedIn', 'Meu Currículo', 'WhatsApp'],
        
        links: ['email.html', 'https://github.com/GuilhermeEduardo23', 'https://www.linkedin.com/in/guilherme-eduardo-rodrigues-da-silva/', 'https://guilhermeeduardo23.github.io/My_Profile/', 'https://api.whatsapp.com/send?phone=351933838876'],

        icons: ['<ion-icon name="mail-outline"></ion-icon>', '<ion-icon name="logo-github"></ion-icon>', '<ion-icon name="logo-linkedin"></ion-icon>', '<ion-icon name="newspaper-outline"></ion-icon>', '<ion-icon name="logo-whatsapp"></ion-icon>']
    };

    //Atribuição via desestruturação (Destructuring assignment)
    const {aplicativos, links, icons} = dados;

    const secondSection = document.querySelector('.secondSection');

    for(let i = 0; i < aplicativos.length; i++) {
        secondSection.innerHTML += `
            <ul>
                <li class="list-links">
                    <a class="links" href="${links[i]}" target="_blank">
                        ${icons[i]}
                        ${aplicativos[i]}
                    </a>
                </li>
            </ul>
        `;
    }
}

criarLinks();