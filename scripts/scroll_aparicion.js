// Obtener elementos que deseas animar
const elementos = document.querySelectorAll('.elemento');

// Función para verificar si un elemento está aproximadamente al 25% dentro del campo de visión
function estaEnElCampoDeVision(elemento) {
    const rect = elemento.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    // Calcular la posición relativa aproximada del 25%
    const posicionUmbral = windowHeight * 0.90;

    return rect.top <= posicionUmbral && rect.bottom >= 0;
}

// Función para manejar el desplazamiento y agregar/eliminar la clase 'aparecer'
function manejarScroll() {
    elementos.forEach((elemento) => {
        if (estaEnElCampoDeVision(elemento)) {
            if (!elemento.classList.contains('aparecer')) {
                elemento.classList.add('aparecer');
            }
        }
        else
        {
            if (elemento.classList.contains('aparecer')) {
                elemento.classList.remove('aparecer');
            }
        }
    });
}

// Agregar un evento de desplazamiento para llamar a la función de manejo
window.addEventListener('scroll', manejarScroll);

// Llamar a la función inicialmente para comprobar si los elementos ya están en el campo de visión al cargar la página
manejarScroll();
