//Crea un archivo JS que contenga las siguientes líneas

//Una función sin parámetros que devuelva siempre "true"
function siempreTrue(){
    return true
}
siempreTrue();
//Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
async function promesa() {
  await new Promise(resolve => setTimeout(resolve, 5000));
  console.log("Hola soy una promesa");
}
promesa();

//Una función generadora de índices pares automáticos
function par(){
    for(i = 0; i <= 20 ; i += 2)
    console.log(i)
}
par();