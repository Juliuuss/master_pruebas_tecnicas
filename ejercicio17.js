/*
Enunciado Ejercicio 17:
Dada un array de frases, contar el número de palabras que tiene
 
Ejemplos:
contarPalabras([
                "Hola, soy Víctor Robles WEB",
                "Me gusta programar",
                "Y soy desarrollador web"
            ]);
 
Devuelve: 12
 
*/

function contarPalabras(frases) {
  conta = 0;
  frases.forEach((element) => {
    conta += element.split(" ").length;
  });
  console.log(conta);
}

contarPalabras([
  "Hola, soy Víctor asd Robles WEB",
  "Me gusta programar asd asd wer q",
  "Y soy, desarrollador web",
]);
