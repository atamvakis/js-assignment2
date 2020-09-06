//main.js for Assignment 2
var htmlBuilder = "";

teams = ["Braves", "Nationals","Phillies","Mets","Marlins","Cardinals","Cubs","Brewers","Reds","Pirates","Dodgers","Diamondbacks","Giants","Padres","Rockies",];
wins = [89,79,74,72,51,81,76,74,67,62,93,75,69,66,60];
losses = [55,63,68,70,91,62,66,68,77,81,52,68,74,76,84];

//logic to determine the team with the most wins
var tempHighWins = 0;
var tempLeader = 0;

for (var i=0; i<teams.length; i++){
  if(wins[i] >= tempHighWins){
    tempHighWins = wins[i];
    tempLeader = i;
  }
}

var winningTeam = teams[tempLeader];
console.log("The team with the most wins of " + tempHighWins + " is " + winningTeam);

//Make the table
var table = document.getElementById("table")

var tableDisplay = `
  <table style="width:40%">
  <tr>
  <th>Teams</th>
  <th>Wins</th>
  <th>Losses</th>
  </tr>
          `

for (i=0; i<teams.length; i++){
  if(i==tempLeader){
    tableDisplay += "<tr style=\"font-weight:bold\">"
    tableDisplay += "<td>"+teams[i]+"</td>"
    tableDisplay += "<td>"+wins[i]+"</td>"
    tableDisplay += "<td>"+losses[i]+"</td>"
    tableDisplay += "</tr>"
  }else{
    tableDisplay += "<tr>"
    tableDisplay += "<td>"+teams[i]+"</td>"
    tableDisplay += "<td>"+wins[i]+"</td>"
    tableDisplay += "<td>"+losses[i]+"</td>"
    tableDisplay += "</tr>"
    }

}

tableDisplay += "</table>"

table.innerHTML = tableDisplay;


/*Make the team with the most wins bold
var htmlBuilder = ""

for (var i=0; i<teams.length; i++){
  if(wins[i] = tempLeader){
    htmlBuilder += “<strong>” + teams[tempLeader] + “close tag”;
  }
}*/
