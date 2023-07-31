/*
Enunciado Ejercicio 21:
Crea una función que reciba un numero y me genere una matriz
con el numero de columnas y filas que le hemos indicado por parámetro
 
Ejemplos:
generarMatriz(4);
 
Devuelve: 
[
  [ 1, 2, 3, 4 ],
  [ 5, 6, 7, 8 ],
  [ 9, 10, 11, 12 ],
  [ 13, 14, 15, 16 ]
]
 
*/

function generarMatriz(elementos) {
  let matriz = [];
  let cifraActual = 1;
  for (let fila = 0; fila < elementos; fila++) {
    matriz.push([]);
    for (let i = 0; i < elementos; i++) {
      matriz[fila].push(cifraActual++);
    }
  }
  return matriz;
}

console.log(generarMatriz(4));
