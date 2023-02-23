//Create a JS file containing the following lines

//A variable that contains the shopping list (minimum 5 elements)
shoppingList = ["bread","milk","eggs","cereals","oranges"]

//Modify the shopping list and add "Sunflower Oil"
shoppingList.push("Sunflower Oil")

//Modify the shopping list again by removing "Sunflower Oil"
shoppingList.pop()

//A list of your 3 favorite movies (objects with properties: title, director, date)
favoriteMovies = [
    {
        title: "Big Fish",
        director: "Tim Burton",
        date: "05/03/2004"
    },
    {
        title: "El Club de la Lucha",
        director: "David Fincher",
        date: "05/11/1999"
    },
    {
        title: "La Fiera de Mi Niña",
        director: "Howard Hawks",
        date: "11/12/1940"
    }
];

//A new list containing movies after January 1, 2010 (using filter)
movies = [
    { 
        title: "Big Fish", 
        director: "Tim Burton", 
        date: "05/03/2004" 
    },
    { 
        title: "El Club de la Lucha", 
        director: "David Fincher", 
        date: "05/11/1999" 
    },
    { 
        title: "Toy Story 3", 
        director: "Lee Unkrich", 
        date: "18/06/2010" 
    },
    { 
        title: "Inception", 
        director: "Christopher Nolan", 
        date: "22/07/2010" 
    },
    { 
        title: "La La Land", 
        director: "Damien Chazelle", 
        date: "25/12/2016" 
    }
  ];

  limitDate = new Date("2010-01-01");

  postMovies = movies.filter(function(movie) {
    let movieDate = new Date(movie.date);
    return movieDate > limitDate;
  });

  //A new list containing the directors from the original movie list (using map)
  directors = favoriteMovies.map(function(movie) {
    return movie.director;
  });

  //A new list containing the titles of the original movie list (using map)
  titles = favoriteMovies.map(function(movie){
    return movie.title;
  });

  //A new list that concatenates the list of directors and the list of titles (using concat)
  titlesAndDirectorsConcat = titles.concat(directors);

  //A new list concatenating the list of directors and the list of titles (using the spread factor)
  titlesAndDirectorsSpread = [...titles, ...directors];

