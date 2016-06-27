// var request = require('request');

// request({
//   'url': 'https://api.github.com/repos/mariaxtina/githubavdownloader/contributors',
//   'headers': {
//     'User-Agent': 'request'
//   }
// }, function (error, response, body) {

//   if (!error) {

//     //body = JSON.parse(body);
//     console.log(body);

//   }
// });

function getRepoContributors(repoOwner, repoName, cb) {
  console.log(repoOwner);
  console.log(repoName);
}

getRepoContributors("mariaxtina", "githubavdownloader", (err, result) => {
  console.log("Errors:", err);
  console.log("Result:", result);
});