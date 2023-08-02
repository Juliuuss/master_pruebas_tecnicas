/*
Enunciado Ejercicio 24:
Crea una función a la cual le pasemos un array de nombres de archivo
y nos devuelva un array con esos mismos archivos, pero si hay alguno
duplicado debe estar númerado con un (numero de repeticiones)
como hacen los sistemas operativos.
 
Ejemplos:
renombrarArchivos(["nombre", "apellido", "nombre", "nombre"]);
 
Devuelve: 
[ 'nombre', 'apellido', 'nombre(1)', 'nombre(2)' ]
 
*/

function renombrarArchivos(arr) {
  return arr.map((fichero, indice) => {
    let filtrado = arr
      .slice(0, indice)
      .filter((ficheroFiltro) => fichero === ficheroFiltro);
    return filtrado.length === 0 ? fichero : `${fichero}(${filtrado.length})`;
  });
}
console.log(
  renombrarArchivos([
    "nombre",
    "apellido",
    "nombre",
    "nombre",
    "apellido",
    "nombre",
    "apellido",
    "nombre",
    "nombre",
    "apellido",
    "nombre",
    "apellido",
    "nombre",
    "nombre",
    "apellido",
  ])
);
