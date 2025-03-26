    /**
    * Genera una tarjeta de evento
    * @param {Object} evento - Objeto con datos del evento
    * @param {string} evento.img - Ruta de la imagen
    * @param {string} evento.nombre - Nombre del evento
    * @param {string} evento.categoria - Categoría del evento
    * @param {string} evento.porcentaje - Porcentaje a mostrar
    * @param {Function} onSi - Función callback para botón "SI"
    * @param {Function} onNo - Función callback para botón "NO"
    * @returns {HTMLElement} - Tarjeta generada
    */
    function crearTarjetaEvento(evento, onSi, onNo) {
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

    // Añadir eventos
    tarjeta.querySelector(".btn-si").addEventListener("click", () => onSi?.(evento, tarjeta));
    tarjeta.querySelector(".btn-no").addEventListener("click", () => onNo?.(evento, tarjeta));

    return tarjeta;
}

    // Ejemplo de uso
    const datosEjemplo = [
    { img: "../Resources/ImagenEventos/Ajedrez.jpg", nombre: "Ajedrez", categoria: "Deporte", porcentaje: "72%" },
    { img: "../Resources/ImagenEventos/Examen.jpg", nombre: "Examen Final", categoria: "Académico", porcentaje: "59%" },
        { img: "../Resources/ImagenEventos/Examen.jpg", nombre: "Parcial", categoria: "Académico", porcentaje: "44%" },
        { img: "../Resources/ImagenEventos/Juez.jpg", nombre: "Expulsión de Nico", categoria: "Administrativo", porcentaje: "18%" },
        { img: "../Resources/ImagenEventos/Examen.jpg", nombre: "Examen Mates", categoria: "Académico", porcentaje: "59%" },
        { img: "../Resources/ImagenEventos/Ajedrez.jpg", nombre: "Torneo ajedrez", categoria: "Pasos", porcentaje: "42%" },
    ];

    const contenedor = document.getElementById("contenedor-tarjetas");

    // Callback para botones
    const manejarSi = (evento) => alert(`Votaste SÍ en: ${evento.nombre}`);
    const manejarNo = (evento) => alert(`Votaste NO en: ${evento.nombre}`);

    // Generar tarjetas
    datosEjemplo.forEach(evento => {
    const tarjeta = crearTarjetaEvento(evento, manejarSi, manejarNo);
    contenedor.appendChild(tarjeta);
});

