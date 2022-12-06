var movieInputEl = document.querySelector('#movie')
var movie = "the avengers"
var requestUrl = "http://www.omdbapi.com/?s=" + movie + "&apikey=4b38cacc";
var userFormEl = document.querySelector('#user-form');
var movieInfo = document.querySelector('.subtitle')
/*fetch(requestUrl)
.then(function (response) {
    return response.json();
})
.then (function(data) {
    console.log(data);
})*/

var formSubmitHandler = function (event) {
    event.preventDefault();
  
    var movieInput = movieInputEl.value.trim();
  
    if (movieInput) {
      getMovieInfo(movieInput);
      
      movieInputEl.value = '';
    } else {
      alert('Please enter a valid movie title');
    }
  };

var getMovieInfo = function (movie) {
    var requestUrl = "http://www.omdbapi.com/?t=" + movie + "&apikey=4b38cacc";
  
    fetch(requestUrl)
      .then(function (response) {
        if (response.ok) {
          console.log(response);
          response.json().then(function (data) {
            console.log(data);
            displayMovie(data);
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect to Movie server');
      });
  };

  var displayMovie = function (data) {

    var moviePoster = document.createElement('img');
    moviePoster.setAttribute('src', data.Poster);
    movieInfo.appendChild(moviePoster);

  }



  userFormEl.addEventListener('submit', formSubmitHandler);