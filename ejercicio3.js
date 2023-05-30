/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal.
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 3:
Dadas dos fechas, crea una función que me proporcione la diferencia de dias
entre ellas
 
Ejemplo:
diferenciaDeDias('Dec 1, 2023', 'Dec 24, 2023');  // Salida: 23
 
*/

function diferencia_de_dias(fecha1, fecha2) {
  //Formatear correctamente las fechas.
  fecha1 = fecha1 instanceof Date ? fecha1 : new Date(fecha1);
  fecha2 = fecha2 instanceof Date ? fecha2 : new Date(fecha2);

  //obtener diferencia en dias entre ambas fechas
  const dias = Math.abs(fecha1.getDate() - fecha2.getDate());
  //dividir diferencia de milisegundos entre los milisegundos de un dia.
  return "la diferencia entre fechas es de " + dias;
}

console.log(diferencia_de_dias("Dec 3, 2023", "Dec 24, 2023"));

function diferencia_de_milisegundos(fecha1, fecha2) {
  //Formatear correctamente las fechas.
  fecha1 = fecha1 instanceof Date ? fecha1 : new Date(fecha1);
  fecha2 = fecha2 instanceof Date ? fecha2 : new Date(fecha2);

  //obtener diferencia en milisengundos entre ambas fechas
  const dif_mili = Math.abs(fecha1.getTime() - fecha2.getTime());
  //dividir diferencia de milisegundos entre los milisegundos de un dia.
  const dias = Math.floor(dif_mili / (1000 * 60 * 60 * 24));
  return "la diferencia entre fechas es de " + dias + " medida en milisegundos";
}
console.log(diferencia_de_milisegundos("Dec 3, 2023", "Dec 24, 2023"));
