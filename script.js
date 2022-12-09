var playerInputEl = document.querySelector('#player')
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
      //appends the players name to the #PlayerStats <div>
      var playerName = document.createElement('div');
      playerName.textContent = 'Player stats for: ' + data.data[0].player.first_name + ' ' + data.data[0].player.last_name;
      playerStats.appendChild(playerName)

      //loops through 5 games and appends the stats to #PlayerStats <div>
      for (i = 0; i < 5; i++) {
        var points = document.createElement('div');
        var assists = document.createElement('div');
        var fgpercentage = document.createElement('div');

        points.textContent = 'points: ' + data.data[i].pts;
        assists.textContent = 'assists: ' + data.data[i].ast;
        fgpercentage.textContent = 'field goal percentage: ' + Math.floor(data.data[i].fg_pct * 100) + '%';

        playerStats.appendChild(points);
        playerStats.appendChild(assists);
        playerStats.appendChild(fgpercentage);
      }
      //stores players name in a variabele
      var name = data.data[0].player.first_name + ' ' + data.data[0].player.last_name;
      //gets team name and stores it in a variable
      var playerTeam = data.data[0].team.name;
      //runs Api call with the team name and player name as parameters
      getGameOdds(playerTeam, name);
    })
    .catch(err => console.error(err));
}

var getGameOdds = function (playerTeam, name) {
  const gameOdds = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ab81f85c68msh657a1c030dd42a6p1d14e5jsnad845cc2dca8',
      'X-RapidAPI-Host': 'odds.p.rapidapi.com'
    }
  };

  fetch('https://odds.p.rapidapi.com/v4/sports/basketball_nba/odds?regions=us&oddsFormat=decimal&markets=h2h%2Cspreads', gameOdds)
    .then(response => response.json())
    .then(function(data) {
      //console.log(data[0].away_team, data[0].home_team);
      //console.log(data[0].bookmakers[0].markets[1].outcomes[0].name);
      //console.log(data[0].bookmakers[0].markets[1].outcomes[0].point);
      for (i = 0; i < data.length; i++) {
        console.log(data);
        if (data[i].away_team.includes(playerTeam) || data[i].home_team.includes(playerTeam)) {
          var teamOdds = document.createElement('div');
          teamOdds.textContent = name + 's' + ' team odds: ' + data[i].bookmakers[0].markets[1].outcomes[0].point;
          playerStats.appendChild(teamOdds);
        }  
      }
    })
    .catch(err => console.error(err));
}

var getPreviousGames = function () {
  const gameOdds = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ab81f85c68msh657a1c030dd42a6p1d14e5jsnad845cc2dca8',
      'X-RapidAPI-Host': 'odds.p.rapidapi.com'
    }
  };

  fetch('https://odds.p.rapidapi.com/v4/sports/basketball_nba/odds/?regions=us&oddsFormat=decimal&markets=h2h%2Cspreads', gameOdds)
    .then(response => response.json())
    .then(function(data) {
      console.log(data);
    })
    .catch(err => console.error(err));
}
console.log("yo");

userFormEl.addEventListener('submit', formSubmitHandler);





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
