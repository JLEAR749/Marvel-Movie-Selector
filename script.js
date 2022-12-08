var playerInputEl = document.querySelector('#player')
var player = "the avengers"
var requestUrl = "http://www.omdbapi.com/?s=" + player + "&apikey=4b38cacc";
var userFormEl = document.querySelector('#user-form');
var playerInfo = document.querySelector('.subtitle')
var playerStats = document.querySelector('#Playerstats')
/*fetch(requestUrl)
.then(function (response) {
    return response.json();
})
.then (function(data) {
    console.log(data);
})*/

var formSubmitHandler = function (event) {
  event.preventDefault();

  var playerInput = playerInputEl.value.trim();

  if (playerInput) {
    playerStats.textContent = '';
    getPlayerId(playerInput);


  } else {
    alert('Please enter a valid player name');
  }
};

var getPlayerId = function (player) {
  const stats = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ab81f85c68msh657a1c030dd42a6p1d14e5jsnad845cc2dca8',
      'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
    }
  };

  fetch('https://free-nba.p.rapidapi.com/players/?search=' + player, stats)
    .then(response => response.json())
    .then(function (data) {
      var playerId = data.data[0].id;
      getPlayerInfo(playerId);
    })
    .catch(err => console.error(err));

};

var getPlayerInfo = function (playerId) {
  const stats = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ab81f85c68msh657a1c030dd42a6p1d14e5jsnad845cc2dca8',
      'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
    }
  };

  fetch('https://free-nba.p.rapidapi.com/stats?per_page=100&seasons[]=2022&player_ids[]=' + playerId, stats)
    .then(response => response.json())
    .then(function (data) {
      for (i = 0; i < 10; i++) {
        var points = document.createElement('div');
        var assists = document.createElement('div');
        var fgpercentage = document.createElement('div');

        points.textContent = 'points: ' + data.data[i].pts;
        assists.textContent = 'assists: ' + data.data[i].ast;
        fgpercentage.textContent = 'field goal percentage: ' + Math.floor(data.data[i].fg_pct * 100) + '%';
        
        playerStats.appendChild(points);
        playerStats.appendChild(assists);
        playerStats.appendChild(fgpercentage);

        console.log(data.data[i]);
      }
    })
    .catch(err => console.error(err));
}




userFormEl.addEventListener('submit', formSubmitHandler); userFormEl.addEventListener('submit', formSubmitHandler);



/*const gameOdds = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'ab81f85c68msh657a1c030dd42a6p1d14e5jsnad845cc2dca8',
    'X-RapidAPI-Host': 'odds.p.rapidapi.com'
  }
};
 
fetch('https://odds.p.rapidapi.com/v4/sports/basketball_nba/odds?regions=us&oddsFormat=decimal&markets=h2h%2Cspreads&dateFormat=iso', gameOdds)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

  /*const stats = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ab81f85c68msh657a1c030dd42a6p1d14e5jsnad845cc2dca8',
      'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
    }
  };
  
  fetch('https://free-nba.p.rapidapi.com/players?search=', stats)
    .then(response => response.json())
    .then (function(data) {
      console.log(data);
  })
    .catch(err => console.error(err));*/
