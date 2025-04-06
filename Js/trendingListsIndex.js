document.addEventListener("DOMContentLoaded", () => {
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    // Función para crear un elemento de lista (<li>) para un evento
    function createListItem(evento) {
        const li = document.createElement('li');
        li.innerHTML = `
      <img src="${evento.img}" alt="Evento">
      <div>
        <strong>${evento.nombre}</strong>
        <p>${evento.categoria}</p>
      </div>
        <span class="trending-pct">${evento.historicoPrecios[evento.historicoPrecios.length - 1] * 100 || 'x'}%</span>        `;
        li.addEventListener('click', () => {
            window.location.href = `Detalles.html?id=${evento.id}`;
        });
        return li;
    }

    let trendingEvents = [];
    let activityEvents = [];
    let datosPorCaja = [];
    // Seleccionamos todas las cajas trending
    const cajasTrending = document.querySelectorAll(".trending-box");
    // Cargar el JSON de eventos
    fetch('../Resources/Data/eventos.json')
        .then(response => response.json())
        .then(eventos => {
            // Obtenemos los contenedores de las listas (se esperan dos elementos con la clase "trending-list")
            listas = document.querySelectorAll('.trending-list');
            if (listas.length < 2) {
                console.error('No se encontraron dos contenedores para las listas.');
                return;
            }

            // Seleccionar aleatoriamente 9 eventos para Trending
            const eventosShuffled = shuffleArray([...eventos]); // clonamos y mezclamos
            trendingEvents = eventosShuffled.slice(0, 9);

            // Seleccionar aleatoriamente 9 eventos para Actividad (usando otra mezcla)
            const eventosShuffled2 = shuffleArray([...eventos]);
            activityEvents = eventosShuffled2.slice(0, 9);

            datosPorCaja = [trendingEvents, activityEvents];

    cajasTrending.forEach((trendingBox, index) => {
        const wrapper = trendingBox.querySelector(".trending-list-wrapper");
        const lista = wrapper.querySelector(".trending-list");
        const verMas = trendingBox.querySelector(".ver-mas");
        const verMasTexto = verMas.getElementsByTagName("a")[0];
        let expandido = false;

        const datosExtra = datosPorCaja[index];

        const updateShadows = () => {
            const scrollTop = lista.scrollTop;
            const scrollHeight = lista.scrollHeight;
            const clientHeight = lista.clientHeight;

            if (scrollTop > 0) {
                wrapper.classList.add("shadow-top");
            } else {
                wrapper.classList.remove("shadow-top");
            }

            if (scrollTop + clientHeight < scrollHeight && expandido) {
                wrapper.classList.add("shadow-bottom");
            } else {
                wrapper.classList.remove("shadow-bottom");
            }
        };

        lista.addEventListener("scroll", updateShadows);
        updateShadows();

        // Agregar los primeros 4 eventos a la lista incondicionalmente
        for (let i = 0; i < 4; i++) {
            const evento = trendingEvents[i];
            const li = createListItem(evento);
            lista.appendChild(li);
        }

        verMas.addEventListener("click", () => {
            trendingBox.classList.toggle("expandido");
            expandido = !expandido;

            if (expandido) {
                verMasTexto.textContent = "Ver menos...";
                // Agregar los eventos restantes a la lista
                for (let i = 4; i < datosExtra.length; i++) {
                    const evento = datosExtra[i];
                    const li = createListItem(evento);
                    li.classList.add("nuevo");
                    lista.appendChild(li);
                    setTimeout(() => {
                        li.classList.add("mostrar");
                    }, 10);
                }
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
});
