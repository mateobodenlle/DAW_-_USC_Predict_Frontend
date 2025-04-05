export function crearTarjetaEvento(evento, onClick, onSi, onNo) {
    const tarjeta = document.createElement("article");
    tarjeta.className = "tarjeta-evento";

    tarjeta.innerHTML = `
        <article class="tarjeta-top">
            <img src="${evento.img}" alt="Evento">
            <div class="tarjeta-info">
                <h3>${evento.nombre} <span class="porcentaje">${evento.porcentaje || ''}</span></h3>
                <p>${evento.categoria}</p>
            </div>
        </article>
        <div class="tarjeta-bottom lost">
            <button class="btn-si">SI</button>
            <button class="btn-no">NO</button>
        </div>
    `;

    // Para el botón SI
    tarjeta.querySelector(".btn-si").addEventListener("click", (e) => {
        e.stopPropagation(); // opcional, evita que salte el click de la tarjeta
        onSi?.(evento, tarjeta);
    });

    // Para el botón NO
    tarjeta.querySelector(".btn-no").addEventListener("click", (e) => {
        e.stopPropagation();
        onNo?.(evento, tarjeta);
    });

    // Para hacer click en toda la tarjeta y redirigir
    tarjeta.addEventListener("click", () => onClick(evento));
    return tarjeta;
}

export function generarTarjetas(contenedor, eventos, onClick, onSi, onNo) {
    eventos.forEach(evento => {
        const tarjeta = crearTarjetaEvento(evento, onClick, onSi, onNo);
        contenedor.appendChild(tarjeta);
    });
}
