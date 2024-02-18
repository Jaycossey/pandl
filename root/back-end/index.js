// Server and route creation for the API

// import fs
const fs = require('fs');

// read the json file

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
    const reviews = {
        "Reviews": "Test Results phil"
    }

    res.send(reviews);
});