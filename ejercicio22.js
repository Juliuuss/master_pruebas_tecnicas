/*Enunciado Ejercicio 22:
Crea una función que invierta el orden de un texto
sin usar funciones nativas del lenguaje.
 
Ejemplos:
invertirTexto("Hola");
 
Devuelve: 
aloH
 
*/

function invertirTexto(palabra) {
  let invert = "";
  for (let i = palabra.length - 1; i >= 0; i--) {
    invert += palabra[i];
  }
  return invert;
}

function invertirArray(arr) {
  let arrayInvert = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    arrayInvert.push(arr[i]);
  }
  return arrayInvert;
}

console.log(invertirTexto("Hola wf wrwer q"));
console.log(invertirArray([1, 2, 3, 4, 5]));
