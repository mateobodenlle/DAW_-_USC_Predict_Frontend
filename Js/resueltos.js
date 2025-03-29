/**
 * Función para la animación de apertura y cierre de las categorías
 * @param categories_container
 */
export function categoryAnimation (categories_container) {

    const esMovil = window.matchMedia("(max-width: 768px)").matches;

    const delay = 200; // Delay para hacer las animaciones por orden
    const summaries = categories_container.querySelectorAll(".categoria-summary");

    summaries.forEach(summary => {
        summary.addEventListener("click", () => {

            const content = summary.nextElementSibling; // Category content
            const isVisible = content.classList.contains("visible");

            // Cerrar todos (opcional: para comportamiento tipo acordeón)
            categories_container.querySelectorAll(".categoria-content.visible").forEach(c => {
                c.classList.remove("visible"); // quitar categoria-content.visible

                if (!esMovil)
                    setTimeout(() => {

                            c.previousElementSibling.classList.remove("animado"); // quitar animado de categoria-summary, titulo, descripcion y num
                            c.closest(".categoria").classList.remove("animado"); // quitar categoria.animado

                    }, delay);


            });

            // Si no estaba visible, mostrarlo
            if (!isVisible) {

                setTimeout(() => {
                    content.classList.add("visible"); // categoria-content.visible
                }, delay);

                if (!esMovil) {
                    summary.classList.add("animado"); // categoria-summary, titulo, descripcion y num .animado
                    summary.closest(".categoria").classList.add("animado"); // categoria.animado
                }

            }

            // Si hay más de 3 tarjetas pone sombra a la derecha
            const tarjetas = content.querySelectorAll(".tarjeta-evento");
            const btnRight = content.querySelector('.scroll-right');
            if (tarjetas.length > 3) {

                content.classList.add("sombra-derecha");
                if (!esMovil)
                    btnRight.style.display = "flex";
            }

        });
    });
}