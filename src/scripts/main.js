document.addEventListener('DOMContentLoaded', function() {

    window.addEventListener('scroll', verificarScroll);

    // Função de verificar scroll da página
    function verificarScroll() {
        if (window.scrollY > 200) {
            exibeElementosDoHeader();
        } else {
            ocultaElementosDoHeader();
        }
    }
});

function ocultaElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibeElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}


