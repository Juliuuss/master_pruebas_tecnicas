/*
Enunciado Ejercicio 11:
 Crea una función a la cual le pase un array de numeros
 y un numero que será el resultado de la suma de dos de los valores
 
Ejemplos:
sumarDos([3, 7, 8, 2], 10) // [3, 7] (ambos suman 10)
sumarDos([4, 5, 9, 1], 10) // [9, 1]
sumarDos([1, 2, 3, 4], 5) // [2, 3]
 
*/

function sumaDos(numeros, resultado) {
  for (let i = 0; i < numeros.length; i++) {
    let primerNumero = numeros[i];
    let segundoNumero = resultado - numeros[i];
    if (numeros.includes(segundoNumero) && segundoNumero != primerNumero) {
      return [primerNumero, segundoNumero];
    }
  }
}

console.log(sumaDos([4, 7, 8, 2], 10));
