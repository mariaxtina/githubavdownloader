var fs = require('fs');
var request = require('request');

function downloadImageByURL(url, filePath) {
  console.log(`Downloading image ${url} to file ${filePath}`);
  request(url).pipe(fs.createWriteStream(filePath));
  console.log("Successfully downloaded.");
}

module.exports = downloadImageByURL;