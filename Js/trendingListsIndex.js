    document.addEventListener("DOMContentLoaded", () => {
    // Seleccionamos todas las cajas trending
    const cajasTrending = document.querySelectorAll(".trending-box");

    // Datos distintos para cada lista (puedes adaptar esto a más si quieres)
    const datosPorCaja = [
    [ // Datos para la primera caja (Trending)
{ img: "../Resources/ImagenEventos/Examen.jpg", nombre: "Evento 1", categoria: "Debate", pct: "34%" },
{ img: "../Resources/ImagenEventos/Juez.jpg", nombre: "Evento 2", categoria: "Competencia", pct: "21%" },
{ img: "../Resources/ImagenEventos/Examen.jpg", nombre: "Evento 3", categoria: "Torneo", pct: "23%" },
{ img: "../Resources/ImagenEventos/Examen.jpg", nombre: "Evento 5", categoria: "Categoría", pct: "34%" },
{ img: "../Resources/ImagenEventos/Juez.jpg", nombre: "Evento 6", categoria: "Categoría", pct: "21%" },
{ img: "../Resources/ImagenEventos/Examen.jpg", nombre: "Evento 7", categoria: "Categoría", pct: "23%" },
{ img: "../Resources/ImagenEventos/Ajedrez.jpg", nombre: "Evento 8", categoria: "Categoría", pct: "29%" },
{ img: "../Resources/ImagenEventos/Examen.jpg", nombre: "Evento 9", categoria: "Categoría", pct: "29%" },
{ img: "../Resources/ImagenEventos/Juez.jpg", nombre: "Evento 10", categoria: "Categoría", pct: "52%" },
{ img: "../Resources/ImagenEventos/Juez.jpg", nombre: "Evento 11", categoria: "Categoría", pct: "89%" }
    ],
    [ // Datos para la segunda caja (Actividad)
{ img: "../Resources/ImagenEventos/Ajedrez.jpg", nombre: "Actividad A", categoria: "Ajedrez", pct: "62%" },
{ img: "../Resources/ImagenEventos/Juez.jpg", nombre: "Actividad B", categoria: "Jurado", pct: "19%" },
{ img: "../Resources/ImagenEventos/Examen.jpg", nombre: "Evento 5", categoria: "Categoría", pct: "34%" },
{ img: "../Resources/ImagenEventos/Juez.jpg", nombre: "Evento 6", categoria: "Categoría", pct: "21%" },
{ img: "../Resources/ImagenEventos/Examen.jpg", nombre: "Evento 7", categoria: "Categoría", pct: "23%" },
{ img: "../Resources/ImagenEventos/Ajedrez.jpg", nombre: "Evento 8", categoria: "Categoría", pct: "29%" },
{ img: "../Resources/ImagenEventos/Examen.jpg", nombre: "Evento 9", categoria: "Categoría", pct: "29%" },
{ img: "../Resources/ImagenEventos/Juez.jpg", nombre: "Evento 10", categoria: "Categoría", pct: "52%" },
{ img: "../Resources/ImagenEventos/Juez.jpg", nombre: "Evento 11", categoria: "Categoría", pct: "89%" },
{ img: "../Resources/ImagenEventos/Examen.jpg", nombre: "Actividad C", categoria: "Evaluación", pct: "45%" }
    ]
    ];

    cajasTrending.forEach((trendingBox, index) => {
    const lista = trendingBox.querySelector(".trending-list");
    const verMas = trendingBox.querySelector(".ver-mas");
    const verMasTexto = trendingBox.querySelector(".ver-mas a");
    let expandido = false;

    const datosExtra = datosPorCaja[index]; // Cargamos los datos correspondientes

    const updateShadows = () => {
    const scrollTop = lista.scrollTop;
    const scrollHeight = lista.scrollHeight;
    const clientHeight = lista.clientHeight;

    if (scrollTop > 0) {
    lista.classList.add("shadow-top");
} else {
    lista.classList.remove("shadow-top");
}

    if (scrollTop + clientHeight < scrollHeight && expandido) {
    lista.classList.add("shadow-bottom");
} else {
    lista.classList.remove("shadow-bottom");
}
};

    lista.addEventListener("scroll", updateShadows);
    updateShadows();

    verMas.addEventListener("click", () => {
    trendingBox.classList.toggle("expandido");
    expandido = !expandido;

    if (expandido) {
    verMasTexto.textContent = "Ver menos...";

    datosExtra.forEach((evento, i) => {
    const li = document.createElement("li");
    li.classList.add("nuevo");

    li.innerHTML = `
                        <img src="${evento.img}" alt="Evento">
                        <div>
                            <strong>${evento.nombre}</strong>
                            <p>${evento.categoria}</p>
                        </div>
                        <span class="trending-pct">${evento.pct}</span>
                    `;

    lista.appendChild(li);

    setTimeout(() => {
    li.classList.add("mostrar");
}, 50 * i);
});

    setTimeout(updateShadows, 400);

} else {
    lista.scrollTop = 0;
    verMasTexto.textContent = "Ver más...";

    const nuevos = lista.querySelectorAll("li.nuevo");
    nuevos.forEach((li, i) => {
    li.classList.remove("mostrar");
    setTimeout(() => {
    li.remove();
}, 300);
});

    setTimeout(updateShadows, 350);
}
});
});
});

