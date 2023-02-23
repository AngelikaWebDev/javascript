//Crea un archivo JS que contenga las siguientes  líneas:

//Una variable que contenga tu altura en centímetros (entero)
altura_cm = 163;

//Una variable que contenga tu altura en metros (coma flotante)
altura_m = 1.63;

//Una variable que contenga tu peso en kilogramos (coma flotante)
peso = 60.5;

//Una variable que contenga tu altura en metros redondeada hacia arriba
alturaRedondeada = Math.ceil(altura);

//Una variable que contenga tu peso en kilogramos redondeado hacia abajo
pesoRedondeado = Math.round(peso);

//Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let maxValor = Number.MAX_VALUE;
let maxValorMasUno = maxValor + 1;
let sonIguales = maxValorMasUno === maxValor;