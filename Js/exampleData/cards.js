export const tarjetas = [
    { img: "../Resources/ImagenEventos/Ajedrez.jpg", nombre: "Ajedrez", categoria: "Deporte", porcentaje: "72%" },
    { img: "../Resources/ImagenEventos/Examen.jpg", nombre: "Examen Final", categoria: "Académico", porcentaje: "59%" },
    { img: "../Resources/ImagenEventos/Examen.jpg", nombre: "Parcial", categoria: "Académico", porcentaje: "44%" },
    { img: "../Resources/ImagenEventos/Juez.jpg", nombre: "Rector", categoria: "Administrativo", porcentaje: "18%" },
    { img: "../Resources/ImagenEventos/Examen.jpg", nombre: "Examen Mates", categoria: "Académico", porcentaje: "59%" },
    { img: "../Resources/ImagenEventos/Ajedrez.jpg", nombre: "Torneo ajedrez", categoria: "Pasos", porcentaje: "42%" },
    { img: "../Resources/ImagenEventos/Ajedrez.jpg", nombre: "Torneo ajedrez", categoria: "Pasos", porcentaje: "42%" },
    { img: "../Resources/ImagenEventos/Ajedrez.jpg", nombre: "Torneo ajedrez", categoria: "Pasos", porcentaje: "42%" },

];

export const cargarDetalles = (evento) => window.location.href = './Detalles.html';
export const manejarSi = (evento) => alert(`Votaste SÍ en: ${evento.nombre}`);
export const manejarNo = (evento) => alert(`Votaste NO en: ${evento.nombre}`);