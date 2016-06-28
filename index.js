var request = require('request');
var fs = require('fs');
var env = require('dotenv').config({path: './secure-variables.env'});

var downloadImageByURL = require('./download-image-by-URL.js');
var getRepoContributors = require('./get-repo-contributors.js');

var repoOwner = process.argv[2];
var repoName = process.argv[3];

if (process.argv.length !== 4) {
  console.log("Try again. Please enter the right amount of arguments.");
  return false;
}

var targetDirectory = "./avatars";

fs.mkdir(targetDirectory,function(err){
   if (err) {
      return err;
    }
});

getRepoContributors(repoOwner, repoName, function(contributors) {
  for (var contributor of contributors) {
    downloadImageByURL(contributor.avatar_url, `./${targetDirectory}/${contributor.login}.jpg`);
  }
});
