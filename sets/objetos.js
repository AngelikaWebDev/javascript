//Crea un archivo llamado objetos.js que contenga las siguientes líneas

//Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
 const datosPersonales = {
    nombre: "Angelika",
    apellido: "Chozas",
    edad: 29,
    altura: 1.63,
    eresDesarrollador: true
 }

//Una variable que obtenga tu edad a partir del objeto anterior
const miEdad = datosPersonales.edad

//Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const amigosYo = [
    datosPersonales,
    {
        nombre: "Happy",
        apellido: "Gato",
        edad: 1,
        altura: 0.25,
        eresDesarrollador: false
    },
    {
        nombre: "Arya",
        apellido: "Perro",
        edad: 3,
        altura: 0.56,
        eresDesarrollador: false
    }
]
//Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const listaPorEdad = amigosYo.sort((a, b) => b.edad - a.edad)