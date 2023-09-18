var botonArriba = document.querySelector('.boton_flotante');

window.addEventListener('scroll', function () {
    var scrollPercentage = (document.documentElement.scrollTop + window.innerHeight) / document.documentElement.scrollHeight * 100;

    if (scrollPercentage >= 70) {
        botonArriba.classList.add("boton_arriba");
    } else {
        botonArriba.classList.remove("boton_arriba");
    }
});
