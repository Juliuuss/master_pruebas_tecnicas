/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal.
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 2:
Dada una ruta absoluta de un archivo (de un sistema linux o basado en unix)
crear una función que la simplifique
 
Ejemplo:
simplificarRuta("/home/");             // Salida: /home
simplificarRuta("/x/./y/../../z/");    // Salida: /z
simplificarRuta("/../");               // Salida: /
simplificarRuta("/home//pruebas/");    // Salida: /home/pruebas
 
*/

function simplify_routes(route) {
  //variable para almacenar partes finales
  let part = [];

  //dividir la ruta en sus diferentes partes utilizando el separador "/"
  // generando un arra con split
  const partes = route.split("/");

  //Reccorer cada parte del array generado
  for (const parte of partes) {
    //si aparece ".." se quita el ultimo elemento
    if (parte === "..") {
      part.pop();
    }

    //si la parte es diferente a "." o ".." o a una cadena vacia, se guarda en la pila
    else if (parte !== "." && parte != "") {
      part.push(parte);
    }
  }

  return "/" + part.join("/");
}

console.log(simplify_routes("/ruta/de//prueba"));

console.log(simplify_routes("/home/")); // Salida: /home
console.log(simplify_routes("/x/./y/../../z/")); // Salida: /z
console.log(simplify_routes("../2")); // Salida: /
console.log(simplify_routes("/home//pruebas/")); // Salida: /home/pruebas
