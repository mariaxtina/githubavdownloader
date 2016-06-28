var request = require('request');
var fs = require('fs');

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
  var url = "https://" + "mariaxtina" + ':' + "71dcdae7c7ca1c610b0a1e8c494fec4799abcf72" + "@api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors";

  request({
    url: url,
    headers: {
      'User-Agent': 'request'
    }
  }, function (error, response, body) {
      if (error) return null;
        cb(JSON.parse(body));
  });
}

getRepoContributors("mariaxtina", "githubavdownloader", function(result) {
  for (var keys in result) {
    var userInfo = result[keys];
    console.log("User Id(s):", userInfo.id);
    console.log("Contributor(s):", userInfo.login);
  }



  // console.log("Errors:", err);
  // console.log("Result:", result);
  // console.log("Login:", body[0].login);
  // console.log("URL", body[0].url);

  // body.forEach(function(body)) {
  //   downloadImageByUrL(body.avatar_url, "./avatars" + body.login + ".jpg");
  //}
});

// function downloadImageByURL(url, filePath) {
//   var url = "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors";
//   var headers = {'User-Agent': 'request'};

// });
// }