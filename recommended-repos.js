var request = require('request');
var dotenv = require('dotenv').config({path: './secure-variables.env'});
var username = process.env.username;
var password = process.env.password;


var repoList = {

};

function recommendedRepos(usersStarredRepos, user) {
  var endpoint = "https://" + username + ":" + password + "@api.github.com/users/" + user + "/starred";
  var options = {
    url: endpoint,
    headers: {
      'User-Agent': username,}
    }

  request(options, endpoint, function(err, response, body) {
    if (err) {
      console.log("Error", err);
      return false;
    }
    var repoInfo = JSON.parse(body);
     repoInfo.forEach((repo) => {
        if (repoList[repo.name]) {
          return repoList[repo.name] += 1;
        } else {
          return repoList[repo.name] = 1;
        }
      })
     // console.log(repoList);
  });
}


function getMax(object) {
  var array = []
  for (var name in object) {
    console.log(name);
    array.push(name)

  }
   console.log(array);
   //callback function
   //use customsorting.js to compare each value in array and find the max
}

getMax(repoList);


module.exports = recommendedRepos;