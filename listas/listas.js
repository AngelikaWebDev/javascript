//Crea un archivo JS que contenga las siguientes líneas

//Una variable que contenga la lista de la compra (mínimo 5 elementos)
listaCompra = ["pan","leche","huevos","cereales","naranjas"]

//Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompra.push("Aceite de Girasol")

//Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompra.pop()

//Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
peliculasFavoritas = [
    {
        titulo: "Big Fish",
        director: "Tim Burton",
        fecha: "05/03/2004"
    },
    {
        titulo: "El Club de la Lucha",
        director: "David Fincher",
        fecha: "05/11/1999"
    },
    {
        titulo: "La Fiera de Mi Niña",
        director: "Howard Hawks",
        fecha: "11/12/1940"
    }
];

//Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
peliculas = [
    { 
        titulo: "Big Fish", 
        director: "Tim Burton", 
        fecha: "05/03/2004" 
    },
    { 
        titulo: "El Club de la Lucha", 
        director: "David Fincher", 
        fecha: "05/11/1999" 
    },
    { 
        titulo: "Toy Story 3", 
        director: "Lee Unkrich", 
        fecha: "18/06/2010" 
    },
    { 
        titulo: "Inception", 
        director: "Christopher Nolan", 
        fecha: "22/07/2010" 
    },
    { 
        titulo: "La La Land", 
        director: "Damien Chazelle", 
        fecha: "25/12/2016" 
    }
  ];

  fechaLimite = new Date("2010-01-01");

  peliculasPosteriores = peliculas.filter(function(pelicula) {
    let fechaPelicula = new Date(pelicula.fecha);
    return fechaPelicula > fechaLimite;
  });

  //Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
  directores = peliculasFavoritas.map(function(pelicula) {
    return pelicula.director;
  });

  //Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
  titulos = peliculasFavoritas.map(function(pelicula){
    return pelicula.titulo;
  });

  //Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
  titulosYDirectoresConcat = titulos.concat(directores);

  //Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
  titulosDirectoresProp = [...titulos, ...directores];

