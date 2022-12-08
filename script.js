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

/*var formSubmitHandler = function (event) {
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

    var moviePlot = document.createElement('div');
    moviePlot.textContent = data.Plot;
    movieInfo.appendChild(moviePlot);

  }

  
var getMovieQuotes = function() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ab81f85c68msh657a1c030dd42a6p1d14e5jsnad845cc2dca8',
      'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
    }
  };
  
  fetch('https://free-nba.p.rapidapi.com/stats?page=0&per_page=25', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}


  userFormEl.addEventListener('submit', formSubmitHandler);userFormEl.addEventListener('submit', formSubmitHandler);*/

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ab81f85c68msh657a1c030dd42a6p1d14e5jsnad845cc2dca8',
      'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
    }
  };
  
  fetch('https://free-nba.p.rapidapi.com/players?page=0&per_page=25', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

    const options2 = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'ab81f85c68msh657a1c030dd42a6p1d14e5jsnad845cc2dca8',
        'X-RapidAPI-Host': 'odds.p.rapidapi.com'
      }
    };
    
    fetch('https://odds.p.rapidapi.com/v4/sports/basketball_nba/odds?regions=us&oddsFormat=decimal&markets=h2h%2Cspreads&dateFormat=iso', options2)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));

      /*var formSubmitHandler = function (event) {
    event.preventDefault();
  
    var movieInput = movieInputEl.value.trim();
  
    if (movieInput) {
      getMovieInfo(movieInput);
      
      
      movieInputEl.value = '';
    } else {
      alert('Please enter a valid movie title');
    }
  };*/