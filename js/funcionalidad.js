export function valida(input){
    const tipoDeInput = input.dataset.tipo;
    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = '';
    }else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);

    }
}

const tipoDeErrores =  [
    "valueMissing",
    "typeMismatch",
    "tooLong",
    "tooShort",
]

const mensajesDeError = {
    nombre: {
        valueMissing: 'El campo nombre no puede estar vacio',
        tooLong: 'El nombre no puede ser muy grande',
        tooShort: 'El nombre no puede ser muy pequeño',
    },
    email: {
        valueMissing: 'El campo email no puede estar vacio',
        typeMismatch: 'El email no es valido',
        tooLong: 'El email no puede ser muy extenso',
        tooShort: 'El email debe ser más extenso',
    },
    asunto: {
        valueMissing: 'El asunto no puede estar vacio',
        typeMismatch: 'El asunto no es valido',
        tooLong: 'El asunto no puede ser muy amplio',
        tooShort: 'El asunto debe ser más especifico',
    }
}

function mostrarMensajeDeError(tipoDeInput, input){
    let mensaje = "";
    tipoDeErrores.forEach(error => {
        if(input.validity[error])
        {
            console.log(tipoDeInput, error);
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoDeInput][error]);
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    })
    return mensaje;
}