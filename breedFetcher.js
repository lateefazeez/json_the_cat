const request = require('request');
const args = process.argv.slice(2);

const breed = args[0];
// const filePath = args[1];

request(`https://api.theeeecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    console.log('error:', error.code);
  }

  const data = JSON.parse(body);
  if (data[0]) {
    console.log(data[0].description);
    // console.log(typeof(data));
  } else {
    console.log("Sorry, the breed you are looking for does not exist. Please check and try again!");
  }
  
});