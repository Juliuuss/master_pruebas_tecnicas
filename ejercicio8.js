/*
Enunciado Ejercicio 8:
Crea un algoritmo al cual le pase un número entero
y me lo convierta a número romano
 
Ejemplos:
enteroARomano(100)); // Resultado:  C
enteroARomano(345)); // Resultado: CCCXLV
 
*/

function enteroRomano(numero) {
  //variable para guardar string final
  let resultado = "";

  //listado de numeor romanos
  const caracteresRomanos = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  //el equivalente en numeor decimales
  const valoresDecimales = [
    1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1,
  ];
  //buble para recorrer numeros decimales
  for (let i = 0; i < valoresDecimales.length; i++) {
    //bucle para iterar mientras el numeor sea mayor o igula al numero
    //decimal que se esta recorriendo
    while (numero >= valoresDecimales[i]) {
      //Añadir el carater romano al resultado
      resultado += caracteresRomanos[i];
      //actuzlizar numero para restar el valor decimalque se ha agragado
      //al resultado en el numero roma
      numero -= valoresDecimales[i];
      console.log(valoresDecimales[i], "-", numero);
    }
  }

  //Devolver resultado

  return resultado;
}

console.log(enteroRomano(157));
console.log(enteroRomano(234));
console.log(enteroRomano(15587));
