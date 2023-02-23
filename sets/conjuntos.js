//Crea un archivo llamado conjuntos.js que contenga las siguientes líneas
const familia = ["Alba","Marina","Carmen","Paco","Angelika"]

//Un nuevo Set con los nombres de tu familia
const setFamilia = new Set(familia)
//Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
setFamilia.add("Angelika")

//Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
setFamilia.add("JavaScript")
