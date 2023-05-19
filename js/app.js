// variables
const formulario = document.querySelector('.form');
const ingresarTexto = document.querySelector('.form textarea');
const botones = document.querySelector('.botones');
const guardarEncriptacion = document.querySelector('.guardar-encriptacion');
const contenedorError = document.querySelector('#contenedor-error');

// Eventos
botones.addEventListener('click', encriptarDesencriptar);

// Funciones
function encriptarDesencriptar(e) {
    e.preventDefault();

    if (ingresarTexto.value === '') return validarTextarea(`Ingrese una frase a ${e.target.id}`);
    if (!/^[a-zA-Z0-9@.,"'!¡¿? ]+$/g.test(ingresarTexto.value)) return validarTextarea(`No se permite caracteres especiales`);

    if (e.target.id === 'encriptar') {

        console.log(e.target.id)
    } else {
        
    }
    
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

// limpia el el parrafo error
function limpiarError() {
    if (contenedorError.firstChild) {
        contenedorError.removeChild(contenedorError.firstChild);
    }
}














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

// console.log(encriptador('Esto es un encriptador, hola como estas'));
// console.log(encriptador('aeiouuoiea'));
console.log(encriptador('¡ay!, hay una playa ahi'));

function desencriptar(encriptado) {
    let descriptado = encriptado.toLowerCase()
        .replace(/ai/g, 'a')
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    return descriptado;
}

// console.log(desencriptar(encriptador('Esto es un encriptador, hola como estas')));
// console.log(desencriptar(encriptador('aeiouuoiea')));
// console.log(desencriptar(encriptador('ai')));