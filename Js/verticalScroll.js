// Funciones separadas para poder gestionar mejor las opciones de móvil
function gestionarSombras(scroll_container) {
    const scrollTop = scroll_container.scrollTop;
    const maxScrollTop = scroll_container.scrollHeight - scroll_container.clientHeight;
    const margen_error = 10;

    const estaAlFinal = Math.abs(scrollTop - maxScrollTop) < margen_error;
    const estaAlPrincipio = scrollTop < margen_error;

    if (estaAlPrincipio) {
        scroll_container.classList.remove("sombra-arriba");
    } else {
        scroll_container.classList.add("sombra-arriba");
    }

    if (estaAlFinal) {
        scroll_container.classList.remove("sombra-abajo");
    } else {
        scroll_container.classList.add("sombra-abajo");
    }
}

/**
 * Función para la configuración del scroll
 * @param scroll_containers
 */
export function verticalScroll (scroll_containers) {

    const esMovil = window.matchMedia("(max-width: 768px)").matches;

    scroll_containers.forEach((scroll_container) => {

        scroll_container.addEventListener('scroll', () => {
            setTimeout(() => gestionarSombras(scroll_container), 50);
        });
        gestionarSombras(scroll_container)

    });


}