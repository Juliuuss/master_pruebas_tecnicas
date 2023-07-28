/*Enunciado Ejercicio 9:
Crea una función que reciba un array de números y calcule
la suma de todos los números pares del array
 
Ejemplos:
sumarPares([2, 13, 6, 15]);  // Resultado: 8
 
*/

function sumaPares(numeros) {
  //Variable para acumular la suma
  let suma = 0;
  //Recorrer array de numero
  numeros.forEach((element) => {
    //En cada iteracion comprobar si el numero que se recorre es par
    if (element % 2 === 0) {
      //si es par se suma
      suma += element;
    }
  });
  return suma;
}

function sumaPares2(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      suma += numeros[i];
    }
  }
  return suma;
}

console.log(sumaPares([2, 4, 5, 8]));
console.log(sumaPares2([2, 4, 5, 8]));
