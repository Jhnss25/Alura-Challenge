

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
console.log(encriptador('aeiouuoiea'));
console.log(encriptador('ai'));

function desencriptar(encriptado) {
    let descriptado = encriptado.toLowerCase()
        .replace(/ai/g, 'a')
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    return descriptado;
}

console.log(desencriptar(encriptador('Esto es un encriptador, hola como estas')));
console.log(desencriptar(encriptador('aeiouuoiea')));
console.log(desencriptar(encriptador('ai')));