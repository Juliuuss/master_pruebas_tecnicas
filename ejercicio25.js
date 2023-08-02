/*
Enunciado Ejercicio 24:
Crea una función a la cual le pasemos un array de nombres de archivo
y nos devuelva un array con esos mismos archivos, pero si hay alguno
duplicado debe estar númerado con un (numero de repeticiones)
como hacen los sistemas operativos.
 
Ejemplos:
renombrarArchivos(["nombre.jpg", "apellido.doc", "nombre.png", "nombre.png"]);
 
Devuelve: 
[ 'nombre', 'apellido', 'nombre(1)', 'nombre(2)' ]
 
*/

function renombrarArchivos(arr) {
  return arr.map((fichero, indice) => {
    let filtrado = arr
      .slice(0, indice)
      .filter((ficheroFiltro) => fichero === ficheroFiltro);
    let resutlado = fichero;
    if (filtrado.length !== 0) {
      let ficheroPartido = fichero.split(".");
      resutlado = `${ficheroPartido[0]}(${filtrado.length}).${ficheroPartido[1]}`;
    }
    return resutlado;
  });
}
console.log(
  renombrarArchivos([
    "nombre.png",
    "apellido.jpg",
    "nombre.png",
    "nombre.png",
    "apellido.jpg",
    "nombre.png",
    "apellido.txt",
    "nombre.png",
    "nombre.png",
    "apellido.txt",
    "nombre.txt",
    "apellido.png",
    "nombre.txt",
    "nombre.txt",
    "apellido.png",
  ])
);
