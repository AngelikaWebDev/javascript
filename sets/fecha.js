//Crea un archivo llamado fechas.js que contenga las siguientes líneas

//Fecha de hoy
const hoy = new Date()

//Fecha de nacimiento
const fechaNacimiento = new Date('1993-05-28')

//Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const hoyEsDespues = hoy > fechaNacimiento

//Una variable que contenga el día de tu nacimiento
const diaNacimiento = fechaNacimiento.getDate()

//Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mesNacimiento = fechaNacimiento.getMonth()

//Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const anioNacimiento = fechaNacimiento.getFullYear()