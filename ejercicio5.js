/*
Enunciado Ejercicio 5:
Dado un array de personas con nombres y apellidos
crear una función para ordenar el array por los apellidos
en orden alfabético
 
Ejemplo:
ordenarPorApellidos([
    "Víctor Robles",
    "Antonio Alcantara",
    "Al Pacino",
    "Robert DeNiro",
    "Brad Pitt",
    "Sylvester Stallone"
]);  
 
*/

function ordenarApellidos(personas) {
  //crear variable con un nuevo array de solo apellidos
  const apellidos = personas.map((persona) => persona.split(" ")[1]);
  // Ordenar los apellidos
  apellidos.sort();
  //Crear nuevo arary con nombres y apellidos ya ordenados y
  //Encontrar nombre y apellido original correspondiente al apellido ordenado
  const personasOrdenadas = apellidos.map((apellido) => {
    const nombreOriginal = personas.find((nombreCompleto) => {
      return nombreCompleto.split(" ")[1] === apellido;
    });
    return nombreOriginal;
  });
  return personasOrdenadas;
}

console.log(
  ordenarApellidos([
    "Víctor Robles",
    "Antonio Alcantara",
    "Al Pacino",
    "Robert DeNiro",
    "Brad Pitt",
    "Sylvester Stallone",
  ])
);
