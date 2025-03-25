// Importa HTML externos en elementos del DOM
const includeHTML = async (selector, url) => {
    const contenedor = document.querySelector(selector);
    if (contenedor) {
        const respuesta = await fetch(url);
        const html = await respuesta.text();
        contenedor.innerHTML = html;
    }
};

// Carga navbar y footer
includeHTML("#navbar", "../Html/Componentes/navbar.html");
includeHTML("#footer", "../Html/Componentes/footer.html");
