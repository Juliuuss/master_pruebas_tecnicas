/*
Enunciado Ejercicio 16:
Crea una función que meta en una caja de asteriscos la frase 
que le pasemos por parametro
 
Ejemplos:
mostrarTextoCaja('Hola soy Víctor Robles WEB');
 
**********
* Hola   *
* soy    *
* Víctor *
* Robles *
* WEB    *
**********
 
*/

function mostrarTextoCaja(frase) {
  let longitudMaxima = 0;
  const asteriscosDefecto = 4;
  //serpar string en array
  const palabras = frase.split(" ");
  //calculo de longitud de palaba mas larga.
  palabras.forEach((element) => {
    longitudMaxima = Math.max(longitudMaxima, element.length);
  });
  //Primera linea
  const asteriscosTotales = longitudMaxima + asteriscosDefecto;
  console.log("*".repeat(asteriscosTotales));
  //recorrer array y mostar 1 por linea
  palabras.forEach((element) => {
    const espacios = " ".repeat(longitudMaxima - element.length);
    console.log(`* ${element}${espacios} *`);
  });
  console.log("*".repeat(asteriscosTotales));
  return longitudMaxima;
}

mostrarTextoCaja(
  "Hola soy Víctoraaaa Robles WEB as as dasd qwq qwe qewqdasdafqrqee"
);
