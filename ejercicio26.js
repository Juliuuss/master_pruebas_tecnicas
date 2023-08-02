/*
Enunciado Ejercicio 26:
Optimizar el gasto en mi gasolinera favorita.
 
Tiene dos opciones:
 
- Gasolina individual: Cuesta 10 euros por cada llenado.
- Tarjeta de socio: Cuesta 90 euros anuales pero cada vez que llenas 
te cuesta 8.2 euros el tanque pagas sólo el 78% del precio del llenado.
 
Cada vez que llenas el tanque, se paga el 78% del precio 
del llenado que pagaste la última vez hasta llegar a un descuento maximo
del 50%. Acumula el descuento (0.78 ** 3).
 
Hacer una función que, al pasarle las veces que voy a llenar el tanque, 
me diga si vale la pena comprar la tarjeta de socio o no.
 
Ejemplos:
deboSerSocio(15);
 
Devuelve: 
Como usuario casual te sale a: 150        
Como socio te sale a: 154.68487999999994 
No te sale a cuenta ser socio ser socio  
 
*/

function deboSerSocio(veces) {
  let llenadoIndividual = 10 * veces;
  let llenadoSocio = 90;
  for (i = 1; i <= veces; i++) {
    let descuento = 0.78 ** i;
    if (descuento <= 0.5) {
      descuento = 0.5;
    }
    llenadoSocio += 8.2 * descuento;
  }
  let resultado = `Como usuariuo normal sale ${llenadoIndividual}
Como Socio te sale ${parseFloat(llenadoSocio.toFixed(2))} \n`;
  if (llenadoSocio < llenadoIndividual) {
    resultado += "es mas rentable ser socio";
  } else {
    resultado += "es mas rentable NO ser socio";
  }
  return resultado;
}

console.log(deboSerSocio(50));
