import { generarTarjetas } from '../Js/loaderCards.js';

function plantillaCategoriaMovil({ titulo, descripcion, num }) {
    return `
    <div class="categoria-summary">
        <div class="summaryItem titulo">${titulo}</div>
        <div class="summaryItem descripcion">${descripcion}</div>
        <div class="summaryItem num">${num}</div>
    </div>
    <div class="categoria-content">
        <div class="cards"></div>
    </div>
  `;
}
function plantillaCategoriaPC({ titulo, descripcion, num }) {
    return `
    <div class="categoria-summary">
        <div class="summaryItem titulo">${titulo}</div>
        <div class="summaryItem descripcion">${descripcion}</div>
        <div class="summaryItem num">${num}</div>
    </div>
    <div class="categoria-content">
        <button class="scroll-button scroll-left" aria-label="Scroll izquierdo">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path d="M15 6l-6 6 6 6" transform="translate(-1, 3)" fill="none"
                          stroke="currentColor" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </span>
        </button>

        <div class="cards"></div>

        <button class="scroll-button scroll-right" aria-label="Scroll derecho">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path d="M9 6l6 6-6 6" transform="translate(1, 3)" fill="none"
                          stroke="currentColor" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </span>
        </button>
    </div>
  `;
}


/**
 *
 * @param {Object} cat - datos de la categoría a crear
 * @param {function} plantillaCategoria - función que define qué plantilla usar (con o sin botones de deslizamiento)
 * @returns {HTMLDivElement} - Categoría generada
 */
function crearCategoria(cat, plantillaCategoria) {
    const div = document.createElement("div");
    div.classList.add("categoria");
    div.innerHTML = plantillaCategoria(cat);
    return div;
}


/**
 * Genera una categoria
 * @param {HTMLElement} contenedor - contenedor donde van a ser insertadas las categorías
 * @param {Array} categorias - lista de categorías
 * @param eventos
 * @param {Function} onClick - manejo del acceso a la pestaña de detalles
 * @param {Function} manejarSi - Manejar la selección del usuario
 * @param {Function} manejarNo - Manejar la selección del usuario
 */
export function generarCategorias(contenedor, categorias, eventos, onClick, manejarSi, manejarNo) {
    const esMovil = window.matchMedia("(max-width: 768px)").matches;
    const plantillaCategoria = esMovil ? plantillaCategoriaMovil : plantillaCategoriaPC;

    if (esMovil) {
        const seeMore_button = document.createElement("div");
        seeMore_button.innerHTML = `<button id="seeMore-button">See All</button>`;
        contenedor.appendChild(seeMore_button);
    }

    categorias.forEach(cat => {
        const categoriaElemento = crearCategoria(cat, plantillaCategoria);
        contenedor.appendChild(categoriaElemento);
        const cardsContainer = categoriaElemento.querySelector(".cards");
        if (cardsContainer) {
            // Filtrar eventos para esta categoría: suponiendo que el objeto categoría tiene 'titulo'
            // y que el evento tiene un campo 'categoria'
            const eventosCategoria = eventos.filter(evento =>
                evento.categoria.toLowerCase() === cat.titulo.toLowerCase()
            );
            generarTarjetas(cardsContainer, eventosCategoria, onClick, manejarSi, manejarNo);
        }
    });
}
