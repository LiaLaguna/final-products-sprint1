// Creando un prompt que pida al usuario el número de su tarjeta de crédito.
var creditCardNumber = prompt('¿Cuál es el número de tu tarjeta de crédito?');
var arrNumbers = creditCardNumber;
// Pasando los números dados a un array en orden inverso.
var reverseNumbers = arrNumbers.split('').reverse()

function isValidCard(reverseNumbers) {
    var sum = 0;
    var numbers = reverseNumbers.length;
    // Buscando los números pares
    var pairNumbers = numbers % 2;
    for (var i = 0; i < numbers.length; i++) {
        var digit = parseInt(reverseNumbers.charAt(i));
        if (i % 2 == pairNumbers) digit *= 2;
        	if (digit > 9) digit -= 9;
        	sum += digit;
    }document.write('Tu tarjeta es válida');
     // Comprobando si es una tarjeta válida.
     return (sum % 10) === 0;

}
isValidCard(reverseNumbers)
