var request = require('request');
var env = require('dotenv').config({path: './secure-variables.env'});

var username = process.env.username;
var password = process.env.password;

function getRepoContributors(repoOwner, repoName, callback) {

  var url = "https://" + username + ':' + password +
            "@api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors";

  request({
    url: url,
    headers: {
      // github requires a user-agent for api requests
      'User-Agent': username,
    }
  },
  function (error, response, body) {
      if (error) {
        throw(error);
      } var parsedBody = JSON.parse(body);
      if (parsedBody.message === "Bad credentials") {
        console.log("Please enter the correct credentials");
        return false;
      } else if (parsedBody.message === "Not Found") {
        console.log("Please enter an existing owner or repo.");
        return false;
      } callback(parsedBody);
  });
};

module.exports = getRepoContributors;