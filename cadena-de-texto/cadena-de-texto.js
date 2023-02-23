//Crea un archivo JS que contenga las siguiente líneas


// Cadena de texto con tu nombre
nombre = "Angelika";

//Cadena de texto con tu apellido
apellido = "Chozas";

//Cadena de texto que se llame "estudiante" concatenando tu nombre y tu apellido con un espacio entre medias
estudiante = nombre + " " + apellido;

//Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
estudianteMayus = estudiante.upperCase();

//Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
estudianteMinus = estudiante.toLowerCase();

//Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
cadenaEstudiante = estudiante.lenght();

//Una variable que contenga la primera letra del Nombre
primeraLetra = nombre.charAt(0);

//Una variable que contenga la última letra del Apellido
ultimaLetra = apellido.charAt(5);

//Una cadena de texto que elimine los espacios de la variable "estudiante"
estudianteSinEspacios = estudiante.replace(/\s/g, "");

//Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
contieneNombre = estudiante.includes(nombre);
