/*
Enunciado Ejercicio 7:
Dada un array de enteros, detectar si esa lista
de números es una permutación del 1 al ultimo número del array.
 
En este caso una permutación es una secuencia de números
en orden sin que falte ninguno entre ellos.
 
Devolver el número faltante más grande.
 
El array puede venir desordenado.
 
Ejemplos:
permutacion([1, 2, 3, 4, 5])   // Devuelve: 5
permutacion([1, 2, 3, 5]))     // Devuelve: 4
 
*/

function permutacion(numeros) {
  //Ordenar array de numeros, con sort se ordenar todos los elementos.
  numeros.sort((menor, mayor) => menor - mayor);

  //variable con todos los numeros que faltan.
  let numerosFaltantes = [];

  //recorrer array y comprobar si exixste el siguiente elemto sumando 1
  for (let i = 0; i < numeros.length; i++) {
    let numeroFalta = numeros[i] + 1;
    if (numeros[i + 1] !== numeroFalta) {
      numerosFaltantes.push(numeroFalta);
    }
  }

  //limpia el ultimo numero agregado que no es parte de la funcion
  numerosFaltantes.pop();
  //si todo es correcot devovler el ultimo numero
  let resultado = numeros[numeros.length - 1];
  if (numerosFaltantes.length >= 1) {
    resultado = numerosFaltantes[numerosFaltantes.length - 1];
  }
  return resultado;
}

console.log("El numero mas grande que falta es el:", permutacion([3, 4, 5, 7]));
