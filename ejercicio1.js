/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal.
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 1:
Dado un array o un objeto de superhéroes de Marvel, haz un programa que pueda
mostrar la información de un superheroe.
 
Y añade una capacidad de buscar la información de varios superhéroes a la vez.
 
Ejemplo:
mostrarInformacionSuperheroe('Iron Man');
 
Salida:
Nombre real: Tony Stark
Poderes: Tecnología avanzada, Movilidad aérea
Equipo: Los vengadores
 
Ejemplo 2: 
mostrarInformacionSuperheroes([array de nombres]]);
 
Salida:
Muestra la información de todos los superheroes
 
*/

// crear objeto de super heroes de marvel.
const infoSuperheroes = {
  "Iron Man": {
    nombreReal: "Tony Stark",
    poderes: ["Tecnologia avanzada", "Movilidad aérea"],
    equipo: "Los vengadores",
  },
  "Capitán América": {
    nombreReal: "Steve Rogers",
    poderes: ["Fuerza sobrehumana", "Agilidad y reflejos sobresalientes"],
    equipo: "Los vengadores",
  },
  Thor: {
    nombreReal: "Thor Odinson",
    poderes: ["Mjolnir", "Viento y trueno"],
    equipo: "Los vengadores",
  },
  "Spider-Man": {
    nombreReal: "Peter Parker",
    poderes: ["Balanceo", "Telarañas pegajosas", "Sentido aracnido"],
    equipo: "Los vengadores",
  },
  Hulk: {
    nombreReal: "Bruce Banner",
    poderes: ["Fuerza sobrehumana", "Invulnerabilidad"],
    equipo: "Los vengadores",
  },
};

function info_superheroe(aka) {
  console.log(`#########${aka}########`);
  //comprobar si existe el super hereo
  if (aka in infoSuperheroes) {
    //guardar la info del superheroe
    const informacion = infoSuperheroes[aka];

    //mostrar la info
    console.log(`Nombre real: ${informacion.nombreReal}`);
    console.log(`Poderes: ${informacion.poderes.join(", ")}`);
    console.log(`Equipo: ${informacion.equipo}`);
  } else {
    console.log(`${aka} No esta en la base de datos`);
  }
}

info_superheroe("Thor");

const mostrar_info_superheroes = (akas) => {
  //recorrer todos los nombres
  akas.forEach((name) => {
    //Comprobar si existe cada nombre en cada iteracion

    //mostrar la info
    info_superheroe(name);
  });
};

mostrar_info_superheroes(["Iron Man", "Weon que no existe", "Thor"]);
