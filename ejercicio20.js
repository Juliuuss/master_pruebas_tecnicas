/*
Enunciado Ejercicio 20:
Crea una función que ordene un array de objetos en base a las propiedades
que le pase por parametro.
 
  const usuarios = [
    { nombre: 'Antonio', edad: 20 },
    { nombre: 'Juan', edad: 23 },
    { nombre: 'Pepe', edad: 12 },
    { nombre: 'Raul', edad: 28 },
    { nombre: 'Paco', edad: 38 },
    { nombre: 'Jason', edad: 56}
  ];
 
 
Ejemplos:
ordenarObjetos(usuarios, "edad");
 
*/
const usuarios = [
  { nombre: "Antonio", edad: 20 },
  { nombre: "Juan", edad: 23 },
  { nombre: "Pepe", edad: 12 },
  { nombre: "Raul", edad: 28 },
  { nombre: "Paco", edad: 38 },
  { nombre: "Jason", edad: 56 },
];

function ordenarObjetos(datos, propiedad) {
  return datos.sort((a, b) => a[propiedad] - b[propiedad]);
}

console.log(ordenarObjetos(usuarios, "edad"));
