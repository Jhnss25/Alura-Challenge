// variables
const formulario = document.querySelector('.form');
const ingresarTexto = document.querySelector('.form textarea');
const botones = document.querySelector('.botones');
const guardarEncriptacion = document.querySelector('.guardar-encriptacion');

// Eventos
botones.addEventListener('click', encriptarDesencriptar);

// Funciones

function encriptarDesencriptar(e) {
    e.preventDefault();

    validarTextarea();
}

function validarTextarea() {
    
    if (ingresarTexto.value === '') {
        const contenedorError = document.querySelector('#contenedor-error')
        const parrafoError = document.createElement('p');
        parrafoError.classList.add('parrafo-error');
        parrafoError.textContent = 'Ingrese una frase a ser encriptada';

        contenedorError.appendChild(parrafoError);
    } else {
        console.log('Soy un string con contenido...')
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

console.log(encriptador('Esto es un encriptador, hola como estas'));
// console.log(encriptador('aeiouuoiea'));
// console.log(encriptador('ai'));

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