export function createBettedCard(evento, onClick, onSi, onNo) {
    const tarjeta = document.createElement("article");
    tarjeta.className = "tarjeta-evento";

    tarjeta.innerHTML = `
        <img src="${evento.img}" alt="Evento">
        <div class="tarjeta-info">
            <h3>${evento.nombre}</h3>
            <p>${evento.categoria}</p>
        </div>
        <div class="tarjeta-porcentajes">
                <h3 class="porcentaje">${evento.porcentaje || ''}</h3>
    <div class="variacion ${evento.diferencia > 0 ? 'winning' : 'losing'}">
        <svg id="flecha_arriba" class="${evento.diferencia > 0 ? 'winning' : 'losing'}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">                    <path d="M12 4L12 20M12 4L8 8M12 4L16 8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <svg id="flecha_abajo" class="losing" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 20L12 4M12 20L8 16M12 20L16 16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h3>${evento.diferencia || ''}</h3>
            </div>
        </div>
        
        <div class="posicion">
            <h3>Posicion</h3>
            <p>${evento.posicion}</p>
        </div>

        <p id="decision">${evento.respuesta}</p>
        <button class="btn-editar">EDITAR</button>
    `;

    // Asignamos onClick al hacer click en la tarjeta
    tarjeta.addEventListener("click", () => onClick(evento));
    return tarjeta;
}
export function createBettedCardEnded(evento, onClick, result) {
    const tarjeta = document.createElement("article");
    tarjeta.className = "tarjeta-evento";
    if (result === 'GANADA') {
        evento.diferencia = 1-evento.precioCompra;
    }
    if (result === 'PERDIDA') {
        evento.diferencia = -evento.precioCompra;
    }

    evento.diferencia = evento.diferencia.toFixed(2);

    tarjeta.innerHTML = `
        <img src="${evento.img}" alt="Evento">
        <div class="tarjeta-info">
            <h3>${evento.nombre}</h3>
            <p>${evento.categoria}</p>
        </div>
        <div class="tarjeta-porcentajes">
                <h3 class="porcentaje"> </h3>
    <div class="variacion ${evento.diferencia > 0 ? 'winning' : 'losing'}">
        <svg id="flecha_arriba" class="${evento.diferencia > 0 ? 'winning' : 'losing'}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">                    <path d="M12 4L12 20M12 4L8 8M12 4L16 8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <svg id="flecha_abajo" class="losing" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 20L12 4M12 20L8 16M12 20L16 16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h3>${evento.diferencia || ''}</h3>
            </div>
        </div>
        
        <div class="posicion">
            <h3>Posición</h3>
            <p>${evento.posicion}</p>
        </div>

        <p id="decision">${evento.respuesta}</p>
        <button class="btn-editar">DETALLES</button>
    `;

    // Asignamos onClick al hacer click en la tarjeta
    tarjeta.addEventListener("click", () => onClick(evento));
    return tarjeta;
}

export function generateBettedCards(contenedor, eventos, onClick, onSi, onNo) {
    eventos.forEach(evento => {
        const tarjeta = createBettedCard(evento, onClick, onSi, onNo);
        $(contenedor).append(tarjeta);
    });
}

export function generateBettedCardsEnded(contenedor, eventos, onClick, onSi, onNo) {
    eventos.forEach(evento => {
        const tarjeta = createBettedCardEnded(evento, onClick, onSi, onNo);
        $(contenedor).append(tarjeta);
    });
}
