// Carga HTML y luego ejecuta callback opcional
const includeHTML = async (selector, url, callback) => {
    const contenedor = document.querySelector(selector);
    if (contenedor) {
        const respuesta = await fetch(url);
        const html = await respuesta.text();
        contenedor.innerHTML = html;
        if (typeof callback === "function") {
            callback(); // ejecuta callback cuando se ha insertado el HTML
        }
    }
};

// Detecta y activa el botón correspondiente
const activarBotonNavbar = () => {
    const ruta = decodeURIComponent(window.location.pathname.split("/").pop());
    const botones = {
        "Watchlist.html": "navBarWatchlist",
        "Resueltos.html": "navBarResueltos",
        "Busqueda.html": "navBarBusqueda",
        "About_Us.html": "navBarAboutUs",
        "contacto.html": "navBarContacto"
    };
    const idBoton = botones[ruta];
    if (idBoton) {
        const boton = document.getElementById(idBoton);
        if (boton) {
            boton.classList.add("active");
        }
    }
};

// Cargar navbar y luego activar botón
includeHTML("#navbar", "../Html/Componentes/navbar.html", activarBotonNavbar);
includeHTML("#footer", "../Html/Componentes/footer.html");
