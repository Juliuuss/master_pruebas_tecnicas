/*Enunciado Ejercicio 13:
Crea una funcion que calcule el area de un cuadrado, un rectangulo o un triangulo
 
Ejemplos:
calcularAreaPoligono({ tipo: 'triangulo', base: 6, altura: 9 }); 
 
Devuelve: 27
 
*/

function calcularAreaPoligono(datos) {
  let area = "";
  if (datos.tipo === "triangulo") {
    area = (datos.base * datos.altura) / 2;
  } else if (datos.tipo === "cuadrado") {
    area = datos.base * datos.altura;
  } else if (datos.tipo === "rectangulo") {
    area = datos.base * datos.altura;
  } else {
    console.log("Lo siento, el tipo esta mal escrito");
  }
  return area;
}

console.log(calcularAreaPoligono({ tipo: "triangulo", base: 6, altura: 9 }));
console.log(calcularAreaPoligono({ tipo: "cuadrado", base: 6, altura: 9 }));
console.log(calcularAreaPoligono({ tipo: "rectangulo", base: 6, altura: 9 }));
