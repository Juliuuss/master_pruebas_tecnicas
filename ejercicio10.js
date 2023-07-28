/*
Enunciado Ejercicio 10:
Crea una función que reciba un DNI (8 números) y calcule la letra del DNI
 
Es un proceso matemático facil que se basa en obtener el 
resto de la división entera del número de DNI y el número 23. 
Y con el resto se obtiene la letra, usandolo como posición o indice
dentro de un array de letras.
 
Este sería el array de letras:
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 
                'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
 
Ejemplos:
generarLetraDNI("25439343");  // Resultado: 25439343D
 
*/

function generarLetra(numero) {
  //generar array de letras de DNI
  letras = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
    "E",
    "T",
  ];
  //Convertir numero a entero
  numero = parseInt(numero);
  //Comprobar si es valido (Tener 8 cifras)
  if (numero > 0 && numero < 99999999) {
    //Calculo de letra (numero % 23 el resto de 23)
    let resto = numero % 23;
    //conseguir la letra del array
    let letra = letras[resto];
    //Devovler dni completo
    return numero.toString() + letra;
  } else {
    return "Numero Invalido";
  }
}

console.log(generarLetra("00534878"));
