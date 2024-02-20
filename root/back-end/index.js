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
const cors = require('cors');
const app = express();

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
app.get("/reviews", (req, res) => {
    // all reviews
    const reviews = {
        "Reviews": allReviews
    }

    res.send(reviews);
});

// fetch staff specific reviews
app.get("/phil/reviews", (req, res) => {
    const reviews = {
        "Reviews": parsedData.phil.reviews
    }

    res.send(reviews);
});

app.get("/laura/reviews", (req, res) => {
    const reviews = {
        "Reviews": parsedData.laura.reviews
    }

    res.send(reviews);
});

app.get("/kris/reviews", (req, res) => {
    const reviews = {
        "Reviews": parsedData.kris.reviews
    }

    res.send(reviews);
});

app.get("/josi/reviews", (req, res) => {
    const reviews = {
        "Reviews": parsedData.josi.reviews
    }

    res.send(reviews);
});
