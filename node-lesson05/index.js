/* 
TODO Given an array of movies with title and storyline, write a function getMovies() that iterates through the movies list but the loop is enclosed within a setTimeout of 1 second (1000 ms)
*/

const movies = [
{
title:"Touch",
storyline: "A romantic and thrilling story that spans several decades and continents; TOUCH follows one widower's emotional journey to find his first love who disappeared 50 years ago, before his time runs out."
},
{
title:"Queen of Hearts",
storyline: "A successful lawyer jeopardizes her career and threatens to tear her family apart after engaging in an affair with her teenage stepson"
},
{
title:"The Worst Person in the World",
storyline: "The chronicles of four years in the life of Julie, a young woman who navigates the troubled waters of her love life and struggles to find her career path, leading her to take a realistic look at who she really is."

},
{
title:"Parasite",
storyline: "The struggling Kim family sees an opportunity when the son starts working for the wealthy Park family. Soon, all of them find a way to work within the same household and start living a parasitic life"

},
{
title:"Burning",
storyline: "Lee Jong-Su, a young author, meets and falls for his childhood friend Shin Hae-mi. Later, she introduces him to Ben, a mysterious man who has a strange hobby, leading to chilling circumstances."
}

];

const getMovies = () => {

  //enclosed in a setTimeout function
setTimeout (() => {
//loop over each movie result
movies.forEach(result => {
  console.log(result);
})
}, 1000);
}


/*
TODO Add another function called createMovies(). This function fetches an argument movie and pushes it to the array list.But the function createMovies() returns a promise and contains a timeout of 2 secs (2000 ms).
*/

const createMovies = (movie) => {
  return new promise ((resolve, reject) => {
    setTimeout(() => {
     movies.push(movie);
     resolve(movie);
    }, 2000);
  });
};


/*
TODO Write an init() function that calls createMovies() and getMovies() but getMovies() will only run after createMovies() is done.

TODO Also include error handling if possible. 
*/

async function init() {
  try {
    if(createMovies) {
       const movieResult = await getMovies();
      console.log('This movie was added:', movieResult);
    } else {
      throw new Error('Movie not found');
    }
  } catch(error) {
  console.log('Error', error.message);
  }
}
init();