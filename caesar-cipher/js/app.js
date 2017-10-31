//Creando un prompt que pida al usuario una palabra a cifrar.
var wordToEncrypt = prompt('¿Qué palabra quieres cifrar?');
//Cambiando el resultado del prompt para que todas las letras sean mayúsculas.
var strToCipher = wordToEncrypt.toUpperCase();

function cipher(strToCipher) {
    var stringToCipher = '';
    // Aplicando un for que nos ayude a recorrer todo la palabra.
    for (var i = 0; i < strToCipher.length; i++) {
        // Emplear charCodeAt() para obtener el número de cada carácter en la tabla Ascii.
        var number = strToCipher[i].charCodeAt();
        /* Usando condicional if para empezar a encriptar, aquí se usa del número 65 al 83,
        para que sólo se utilice el abcedario.*/
        if (number >= 65 && number <= 83) {
            stringToCipher += String.fromCharCode(number + 7);
          /* Aquí aplicamos un else con los números del 83 al 90 para que las letras restantes
          del abecedario sigan recorriéndolo y no tome otros carácteres de Ascii.*/
        } else if (number >= 83 && number <= 90) {
            strToCipher += String.fromCharCode(number - 19);
        }
    }
    return stringToCipher;
}

document.write('Palabra cifrada: ' + cipher(strToCipher));


//Creando un prompt que pida al usuario una palabra a descifrar.
var wordToDecrypt = prompt('¿Qué palabra quieres descifrar?');
//Cambiando el resultado del prompt para que todas las letras sean mayúsculas.
var strDecipher = wordToDecrypt.toUpperCase();

function decipher(strDecipher) {
    var stringToDecipher = '';
    // Aplicando un for que nos ayude a recorrer todo la palabra.
    for (var i = 0; i < strDecipher.length; i++) {
        // Emplear charCodeAt() para obtener el número de cada carácter en la tabla Ascii.
        var number = strDecipher[i].charCodeAt();
        /* Usando condicional if para empezar a desencriptar, aquí se usa del número 90 al 72,
        para que las letras restantes del abecedario sigan recorriéndolo y no tome otros
        carácteres de Ascii.*/
        if (number <= 90 && number >= 72) {
            stringToDecipher += String.fromCharCode(number - 7);
          /* Aquí aplicamos un else con los números del 73 al 65 para que sólo se utilice
          el abcedario.*/
        } else if (number <= 73 && number >= 65) {
            stringToDecipher += String.fromCharCode(number + 19);
        }
    }
    return stringToDecipher;
}

document.write(' - Palabra decifrada: ' + decipher(strDecipher));
