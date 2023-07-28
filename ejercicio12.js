/*
Enunciado Ejercicio 12:
Crea un programa que cuente las palabras de un texto
 
Ejemplos:
contarPalabras("El perro de san roque no tiene el rabo 
porque es un perro muy muy malo");
 
Devuelve:
{
  el: 2,
  perro: 2,
  de: 1,
  san: 1,
  roque: 1,
  no: 1,
  tiene: 1,
  rabo: 1,
  porque: 1,
  es: 1,
  un: 1,
  muy: 2,
  malo: 1
}
*/

function cuentaPalabras(frase) {
  //crear array con las palabras del texto y convertir a minusculasy quitar signos de acentuacion
  const palabras = frase
    .toLowerCase()
    .replace(/[^\w\s]/gi, "")
    .split(" ");
  //crear objeto vacio para almacenar las palabras
  let contaPalabras = {};
  //iterar el array que se genero y contar cuanstas palabras hay
  palabras.forEach((element) => {
    if (element in contaPalabras) {
      contaPalabras[element]++;
    } else {
      contaPalabras[element] = 1;
    }
  });
  //devolver palabras contadas
  return contaPalabras;
}

console.log(
  cuentaPalabras(
    "El perro de san roque no tiene el rabo porque es un perro muy muy malo!!"
  )
);
