var span1 = document.querySelector('.menu_span-1');
var span2 = document.querySelector('.menu_span-2');
var span3 = document.querySelector('.menu_span-3');
var botonMenu = document.querySelector('.menu_contenedor--boton');
var opcionesMenu = document.querySelector('.menu_opciones');
var links = document.querySelector('.menu_opciones--links');
var menuInactivo = true;

botonMenu.addEventListener('click', function () {
    if (menuInactivo) {
        activarMenu();
    } else {
        desactivarMenu();
    }
});

links.addEventListener('click', function () {
    if (window.innerWidth < 1024) {
        opcionesMenu.classList.remove("menu_opciones-inactivo");
        if (menuInactivo) {
            activarMenu();
        } else {
            desactivarMenu();
        }
    }
});

function handleScroll() {
    if (window.scrollY > 100) {
        desactivarMenu();
    }
}

if (window.innerWidth < 1024) {
    window.addEventListener('scroll', handleScroll);
}

function activarMenu() {
    span1.classList.add("menu_span-1-active");
    span2.classList.add("menu_span-2-active");
    span3.classList.add("menu_span-3-active");
    opcionesMenu.classList.add("menu_opciones-inactivo");
    menuInactivo = false;
}

function desactivarMenu() {
    span1.classList.remove("menu_span-1-active");
    span2.classList.remove("menu_span-2-active");
    span3.classList.remove("menu_span-3-active");
    opcionesMenu.classList.remove("menu_opciones-inactivo");
    menuInactivo = true;
}