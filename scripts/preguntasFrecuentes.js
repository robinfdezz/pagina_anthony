var pregunta1 = document.querySelector('.titulo_pregunta-1');
var pregunta2 = document.querySelector('.titulo_pregunta-2');
var pregunta3 = document.querySelector('.titulo_pregunta-3');

var icono1 = document.querySelector('.footer_icono-1');
var icono2 = document.querySelector('.footer_icono-2');
var icono3 = document.querySelector('.footer_icono-3');

var respuesta1 = document.querySelector('.respuesta_pregunta-1')
var respuesta2 = document.querySelector('.respuesta_pregunta-2')
var respuesta3 = document.querySelector('.respuesta_pregunta-3')

var respuestaActiva1 = true;
var respuestaActiva2 = true;
var respuestaActiva3 = true;

pregunta1.addEventListener('click', function () {
    console.log("Cliqueando menu");
    if (respuestaActiva1) {
        icono1.classList.add("footer_icono--activo");
        respuesta1.classList.add("respuesta_pregunta--activo");
        respuestaActiva1 = false;
    } else {
        icono1.classList.remove("footer_icono--activo");
        respuesta1.classList.remove("respuesta_pregunta--activo");
        respuestaActiva1 = true;
    }
});

pregunta2.addEventListener('click', function () {
    console.log("Cliqueando menu");
    if (respuestaActiva2) {
        icono2.classList.add("footer_icono--activo");
        respuesta2.classList.add("respuesta_pregunta--activo");
        respuestaActiva2 = false;
    } else {
        icono2.classList.remove("footer_icono--activo");
        respuesta2.classList.remove("respuesta_pregunta--activo");
        respuestaActiva2 = true;
    }
});

pregunta3.addEventListener('click', function () {
    console.log("Cliqueando menu");
    if (respuestaActiva3) {
        icono3.classList.add("footer_icono--activo");
        respuesta3.classList.add("respuesta_pregunta--activo");
        respuestaActiva3 = false;
    } else {
        icono3.classList.remove("footer_icono--activo");
        respuesta3.classList.remove("respuesta_pregunta--activo");
        respuestaActiva3 = true;
    }
});