const request = require("request");
const fs = require("fs");
const domain = process.argv[2]; //get the user passed in URL for the source data
const path = process.argv[3]; //the file copy the source data to

request(domain, (error, response, body) => {
  if (error) {
    console.log("error", error);
  } // if there is error print the error message
  fs.writeFile(`${path}`, body, (error) => {
    //fs.writeFile first one is the file we want to write the info in.
    if (error) {
      console.log("error", error);
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
    }
  });
});
