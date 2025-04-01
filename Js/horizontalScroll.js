// Funciones separadas para poder gestionar mejor las opciones de móvil
function gestionarSombras(categoria_content, cards) {
    const scrollLeft = cards.scrollLeft;
    const maxScrollLeft = cards.scrollWidth - cards.clientWidth;
    const margen_error = 10;

    const estaAlFinal = Math.abs(scrollLeft - maxScrollLeft) < margen_error;
    const estaAlPrincipio = scrollLeft < margen_error;

    if (estaAlPrincipio) {
        categoria_content.classList.remove("sombra-izquierda");
    } else {
        categoria_content.classList.add("sombra-izquierda");
    }

    if (estaAlFinal) {
        categoria_content.classList.remove("sombra-derecha");
    } else {
        categoria_content.classList.add("sombra-derecha");
    }
}
function gestionarBotones(cards, btnLeft, btnRight) {
    const scrollLeft = cards.scrollLeft;
    const maxScrollLeft = cards.scrollWidth - cards.clientWidth;
    const margen_error = 10;

    const estaAlFinal = Math.abs(scrollLeft - maxScrollLeft) < margen_error;
    const estaAlPrincipio = scrollLeft < margen_error;

    btnLeft.style.display = estaAlPrincipio ? "none" : "flex";
    btnRight.style.display = estaAlFinal ? "none" : "flex";
}
function gestionSombrasYBotones(categoria_content, cards, btnLeft, btnRight) {
    gestionarSombras(categoria_content, cards);
    gestionarBotones(cards, btnLeft, btnRight);
}

/**
 * Función para la configuración del scroll
 * @param categories_container
 */
export function horizontalScroll (categories_container) {

    const categorias_content = categories_container.querySelectorAll(".categoria-content");
    const esMovil = window.matchMedia("(max-width: 768px)").matches;

    categorias_content.forEach((categoria_content) => {

        const btnLeft = categoria_content.querySelector('.scroll-left');
        const btnRight = categoria_content.querySelector('.scroll-right');
        const cards = categoria_content.querySelector('.cards');

        if (!cards) return;

        if (!esMovil) {
            btnLeft.addEventListener('click', () => {
                cards.scrollBy({left: -300, behavior: 'smooth'});
                setTimeout(() => gestionSombrasYBotones(categoria_content, cards, btnLeft, btnRight), 250);
            });
            btnRight.addEventListener('click', () => {
                cards.scrollBy({left: 300, behavior: 'smooth'});
                setTimeout(() => gestionSombrasYBotones(categoria_content, cards, btnLeft, btnRight), 250);
            });
        }

        const gestor = esMovil ? gestionarSombras : gestionSombrasYBotones;
        cards.addEventListener('scroll', () => {
            setTimeout(() => gestor(categoria_content, cards, btnLeft, btnRight), 100);
        });

    });


}