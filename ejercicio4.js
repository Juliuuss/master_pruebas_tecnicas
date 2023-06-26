/*
Enunciado Ejercicio 4:
Crea el juego del ahorcado.
El usuario tendrá que ir adivinando y descubriendo las letras de una palabra 
secreta, y tendrá 5 intentos (un intento por extremidad del cuerpo humano).
 
Utiliza el método de entrada de datos habitual de tu lenguaje,
en el caso de JS, usaremos la función prompt.
 
Ejemplo:
juegoDelAhorcado('victor');  
 
 Salida:
Adivina la letra: i
La palabra es: _i___
Te quedan 5 intentos
 
*/

function juegoAhorcado(palabraSecreta) {
  //Crear variable oculta con guines bajos
  let palabraOculta = "_".repeat(palabraSecreta.length);

  //Variabnle con numero de intentos a tener
  let intentos = 5;
  //Bucle para pedir letras que se ejeucta mientras no se adivinaan todas las letras y queden intentos.
  while (intentos > 0 && palabraOculta !== palabraSecreta) {
    //pedir letra
    let letra = prompt("Adivina una letra");

    //Comprobar si la letra esta en la palabra para actualizar la variable palabra oculta
    if (palabraSecreta.includes(letra)) {
      //Atualizar la variable palabra oculta y poner la letra en la posicion correcta

      for (
        let contadorLetras = 0;
        contadorLetras < palabraSecreta.length;
        contadorLetras++
      ) {
        if (letra === palabraSecreta[contadorLetras]) {
          // convertir palabraOculta en array
          let palabraOcultaArray = Array.from(palabraOculta);

          // seleccionar su indice y cambiar _ po letra adivinada
          palabraOcultaArray[contadorLetras] = letra;

          //Unir el array  en un string nuevo
          //Actualizar la variable palabra oculta
          palabraOculta = palabraOcultaArray.join("");
          console.log(palabraOculta);
        }
      }
    } else {
      //Si no existe la letra en la palabra entonces resto 1 intento
      intentos--;
    }

    //Mostrar el estado actual de la palabra oculta
    console.log(`La palabra oculta es ${palabraOculta}`);
    //Mostrar cuantos intentos quedan
    console.log(`Te quedan ${intentos} intentos`);
  }

  //Cuando salga del bucle
  //Si se han adivinado todas las letras mostrar mensaje de victoria
  if (palabraOculta === palabraSecreta) {
    console.log(`Felicidades, la palabra es ${palabraSecreta}`);
  } else {
    console.log(`Lo siento has perdido, la palabra es: ${palabraSecreta}`);
  }
}

const lanzarJuego = document.querySelector("#lanzarJuego");

lanzarJuego.addEventListener("click", () => juegoAhorcado("vistor"));
