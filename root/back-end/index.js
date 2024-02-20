// Server and route creation for the API

// import fs
const fs = require('fs');

// parse the json file
const data = fs.readFileSync('./reviews.json');
const parsedData = JSON.parse(data);

// dupe all reviews
const allReviews = [...parsedData.phil.reviews, ...parsedData.kris.reviews, ...parsedData.laura.reviews, ...parsedData.josi.reviews];

// import express
const express = require('express');
const app = express();

// import cors for data transfer
const cors = require('cors');

// use both methods in order to connect the front and back
app.use(cors());
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
app.get("/reviews/all", (req, res) => {
    // all reviews
    // returns array containing all reviews.
    const reviews = {
        "Reviews": allReviews
    }

    res.send(reviews);
});

// fetch staff specific reviews
app.get("/reviews/phil", (req, res) => {
    const reviews = {
        "Reviews": parsedData.phil.reviews
    }

    res.send(reviews);
});

app.get("/reviews/laura", (req, res) => {
    const reviews = {
        "Reviews": parsedData.laura.reviews
    }

    res.send(reviews);
});

app.get("/reviews/kris", (req, res) => {
    const reviews = {
        "Reviews": parsedData.kris.reviews
    }

    res.send(reviews);
});

app.get("/reviews/josi", (req, res) => {
    const reviews = {
        "Reviews": parsedData.josi.reviews
    }

    res.send(reviews);
});
