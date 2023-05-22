// variables
const formulario = document.querySelector('.form');
const ingresarTexto = document.querySelector('.form textarea');
const botones = document.querySelector('.botones');
const guardarEncriptacion = document.querySelector('.guardar-encriptacion');
const contenedorError = document.querySelector('#contenedor-error');
const textoEncriptado = document.querySelector('.texto-encriptado');
const btnCopiar = document.querySelector('.btn-unset');

// Eventos
botones.addEventListener('click', encriptarDesencriptar);
btnCopiar.addEventListener('click', copiarResultado);

// Funciones
function encriptarDesencriptar(e) {
    e.preventDefault();

    if (ingresarTexto.value === '') return validarTextarea(`Ingrese una frase a ${e.target.id}`);
    if (!/^[a-zA-Z0-9@.,"'!¡¿? ]+$/g.test(ingresarTexto.value)) return validarTextarea(`No se permite caracteres especiales`);

    limpiarHTML(textoEncriptado);
    
    if (e.target.id === 'encriptar') {
        crearParrafoHTML(encriptador(ingresarTexto.value));
    } else {
        crearParrafoHTML(desencriptar(ingresarTexto.value));
    }

    formulario.reset();
}

// Valida cuando no ingresan texto al textarea, manda un mensaje de error
function validarTextarea(error) {
    limpiarError();
    
    if (ingresarTexto.value === '' || !/^[a-zA-Z0-9@.,"'!¡¿? ]+$/g.test(ingresarTexto.value)) {
        const parrafoError = document.createElement('p');

        parrafoError.classList.add('parrafo-error');
        parrafoError.textContent = error;
        contenedorError.appendChild(parrafoError);

        // Elimina el mensaje de error después de 5s
        setTimeout(() => {
            parrafoError.remove();
        }, 5000);
    }
}

function crearParrafoHTML(mensaje) {
    const parrafoMensaje = document.createElement('p');

    parrafoMensaje.textContent = mensaje;
    parrafoMensaje.classList.add('parrafo-mensaje');
    textoEncriptado.classList.add('texto-encriptado--start');


    btnCopiar.classList.add('btn-copiar');

    textoEncriptado.appendChild(parrafoMensaje);
    textoEncriptado.appendChild(btnCopiar);
}

// limpia el el parrafo error
function limpiarError() {
    if (contenedorError.firstChild) {
        contenedorError.removeChild(contenedorError.firstChild);
    }
}

// Limpiar el html
// Recibe como argumento el contenedor padre de lo que queramos eliminar
function limpiarHTML(eliminar) {
    while (eliminar.firstChild) {
        eliminar.removeChild(eliminar.firstChild);
    }
}

// Encripta el texto ingresado en el textarea
function encriptador(texto) {
    texto = texto.toLowerCase().split("");

    for (let i = 0; i < texto.length; i++) {
        switch (texto[i]) {
            case 'a':
                texto[i] = 'ai';
                break;
            case 'e':
                texto[i] = 'enter';
                break;
            case 'i':
                texto[i] = 'imes';
                break;
            case 'o':
                texto[i] = 'ober';
                break;
            case 'u':
                texto[i] = 'ufat';
                break;
        }
    }

    return texto.join("");
}

// Desencripta el mensaje dado
function desencriptar(encriptado) {
    let descriptado = encriptado.toLowerCase()
        .replace(/ai/g, 'a')
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    return descriptado;
}

// Copia el parrafo al encriptar o desencriptar al dar click al botón copiar
function copiarResultado(e) {
    const parrafoMensaje = document.querySelector('.parrafo-mensaje').textContent;

    navigator.clipboard.writeText(parrafoMensaje);
}