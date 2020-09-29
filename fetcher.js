const request = require('request');
const fs = require('fs');
const { stringify } = require('querystring');



/// make an http request /// 
const inputUrl = process.argv[2];
const inputLocalPath = process.argv[3];

request(inputUrl, (error, response, body) => {
  // docs request for format. 
  if (error || response.statusCode !== 200) {
    console.log(`${error} opps you broke it!`)
  } else {


    fs.writeFile(inputLocalPath, body, () => {


      console.log(` Dowloaded and saved ${body.length} bytes to ${inputLocalPath}`)

    })

  }
  // console.log('error', error) // prints error if one happens 
  // console.log('statusCode', response && response.statusCode); // prints the response status code if a response was recieved
  // console.log('body', body); // prints the HTML for the homepage of url 


});


module.exports = request;

