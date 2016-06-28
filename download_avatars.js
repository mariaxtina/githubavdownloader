var request = require('request');
var fs = require('fs');
var env = require('dotenv').config({path: './secure-variables.env'});

var repoOwner = process.argv[2];
var repoName = process.argv[3];

if (!process.argv.length == 3) {
  console.log("Try again. Please enter the right amount of arguments.");
  return false;
}

var username = process.env.username;
var password = process.env.password;

var targetDirectory = "./avatars";

fs.mkdir(targetDirectory,function(err){
   if (err) {
      return err;
    }
});


function getRepoContributors(repoOwner, repoName, callback) {

  var url = "https://" + username + ':' + password +
            "@api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors";

  request({
    url: url,
    headers: {
      // github requires a user-agent for api requests
      'User-Agent': username,
    }
  }, function (error, response, body) {
      if (error) { return null; }
      callback(JSON.parse(body));
  });
}

function downloadImageByURL(url, filePath) {
  console.log(`Downloading image ${url} to file ${filePath}`);
  request(url).pipe(fs.createWriteStream(filePath));
}

getRepoContributors(repoOwner, repoName, function(contributors) {
  for (var contributor of contributors) {
    downloadImageByURL(contributor.avatar_url, `./${targetDirectory}/${contributor.login}.jpg`);
  }
});
