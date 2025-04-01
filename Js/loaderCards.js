// tarjetasEventos.js

/**
 * Genera una tarjeta de evento
 * @param {Object} evento - Objeto con datos del evento
 * @param {string} evento.img - Ruta de la imagen
 * @param {string} evento.nombre - Nombre del evento
 * @param {string} evento.categoria - Categoría del evento
 * @param {string} evento.porcentaje - Porcentaje a mostrar
 * @param {Function} onClick - Callback para click en tarjeta
 * @param {Function} onSi - Callback para botón "SI"
 * @param {Function} onNo - Callback para botón "NO"
 * @returns {HTMLElement} - Tarjeta generada
 */
export function crearTarjetaEvento(evento,onClick, onSi, onNo) {
    const tarjeta = document.createElement("article");
    tarjeta.className = "tarjeta-evento";

    tarjeta.innerHTML = `
        <div class="tarjeta-top">
            <img src="${evento.img}" alt="Evento">
            <div class="tarjeta-info">
                <h3>${evento.nombre} <span class="porcentaje">${evento.porcentaje}</span></h3>
                <p>${evento.categoria}</p>
            </div>
        </div>
        <div class="tarjeta-bottom">
            <button class="btn-si">SI</button>
            <button class="btn-no">NO</button>
        </div>
    `;

    tarjeta.querySelector(".btn-si").addEventListener("click", () => onSi?.(evento, tarjeta));
    tarjeta.querySelector(".btn-no").addEventListener("click", () => onNo?.(evento, tarjeta));
    tarjeta.addEventListener("click", onClick);

    return tarjeta;
}

/**
 * Genera múltiples tarjetas y las añade a un contenedor
 * @param {HTMLElement} contenedor - Contenedor donde se añadirán las tarjetas
 * @param {Array} eventos - Array de eventos a generar
 * @param {Function} onClick - Callback para click en tarjeta
 * @param {Function} onSi - Callback para botón "SI"
 * @param {Function} onNo - Callback para botón "NO"
 */
export function allCards(contenedor, eventos, onClick, onSi, onNo) {
    eventos.forEach(evento => {
        const tarjeta = crearTarjetaEvento(evento,onClick, onSi, onNo);
        contenedor.appendChild(tarjeta);
    });
}
