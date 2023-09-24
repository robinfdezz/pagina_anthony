import { valida } from "./funcionalidad.js";

const inputs = document.querySelectorAll("input");
const botonFormulario = document.querySelector('.comentario_link');
const contenedorFormulario = document.querySelector('.comentario_formulario');

botonFormulario.addEventListener('click', function () {
    
        if (!contenedorFormulario.classList.contains('comentario_formulario-activado')) {
            contenedorFormulario.classList.add('comentario_formulario-activado');
        }
    else
    {
        if (contenedorFormulario.classList.contains('comentario_formulario-activado')) {
            contenedorFormulario.classList.remove('comentario_formulario-activado');
        }
        }
    }
);


inputs.forEach(input => {
    input.addEventListener('blur', (input) => {
        valida(input.target);
    })
})

