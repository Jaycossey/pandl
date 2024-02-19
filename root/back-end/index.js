// Server and route creation for the API

// import fs
const fs = require('fs');

// parse the json file
const data = fs.readFileSync('./reviews.json');
const parsedData = JSON.parse(data);

// import express
const express = require('express');
const app = express();
app.use(express.json());

// port declaration
const PORT = process.env.PORT || 5000;

// listen on port for connection
app.listen(PORT, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Server listening on port: ${PORT}`);
    }
});

// status of server
app.get("/status", (req, res) => {
    const status = {
        "Status": "Running"
    };

    res.send(status);
});

// fetch all reviews
app.get("/reviews", (req, res) => {
    // test results logged
    const reviews = {
        "Reviews": parsedData.phil.reviews
    }
    // ensure that the parsed data works, tests for now
    // follow this structure for the remainder of this API 
    // will need to work with jswt for the login and "write review"
    // sections. For now I want the get requests working to 
    // handle the results and displaying on screen with the 
    // front end
    console.log(parsedData.phil.reviews[0]);

    res.send(reviews);
});