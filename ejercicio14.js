/*
Enunciado Ejercicio 14:
Dada una cadena de texto, comprobar si es un palindromo o no. No usar funciones de
javascript, solo estructuras de control
 
Los palíndromos son palabras que se leen igual aun estando invertidas. 
Por ejemplo: ana, bob, otto, allivessevilla
 
Ejemplos:
esPalindromo("otto") // Devuelve: true
esPalindromo("victor") // Devuelve: false
 
*/

function palindromo(palabra) {
  let letras = [];
  let letrasInvertidas = [];
  let palabraInvertida = "";
  //crea array a partir de string
  for (let i = 0; i < palabra.length; i++) {
    letras.push(palabra[i]);
  }
  //invertir el array
  for (let i = letras.length - 1; i >= 0; i--) {
    letrasInvertidas.push(letras[i]);
  }
  //unir el array en un string
  for (let i = 0; i < letrasInvertidas.length; i++) {
    palabraInvertida += letrasInvertidas[i];
  }

  return palabra === palabraInvertida;
}

console.log(palindromo("HOLA"));
console.log(palindromo("ANA"));
console.log(palindromo("HIHI"));
console.log(palindromo("HIIH"));
