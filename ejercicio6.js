/*
Enunciado Ejercicio 6:
Dado un año actual, crea un programa que me muestre 
los años bisiestos que habrá en los proximos 30 años
 
Ejemplo:
bisiestos(2023);
 
// Salida:
2024
2028
2032
2036
2040
2044
2048
2052
 
*/

function bisiestos(años) {
  // variable con limite de años
  const limite = 30;
  //bucle para tantas veces como años limite hay
  for (let i = 0; i < limite; i++) {
    //comprobar dia 29 feb existe en el año actual y mostrar solo el año en que si exista.
    const fecha = new Date(años, 1, 29).getMonth();
    if (fecha === 1) {
      console.log(años);
    }
    años++;
  }
}

bisiestos(2023);
