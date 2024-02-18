import { readFile } from 'fs';

// IMPORTANT TO NOTE!!! node and fs run on server side
/**
 * I need to setup a node / express server for this backend code, 
 * I also need to restructure the file system 
 * I need to place this and the json file into their own directories
 * I need to create the server.js
 * I need to create a router for the data
 * I need to ensure that the API I am creating functions as such
 */

// Fetch all reviews from file
const fetchReview = async (url) => {
    // return promise obj remember to await results
    return new Promise((res, req) => {
        // parse through the json file
        readFile(url, 'utf-8', (err, content) => {
            // if err
            if (err) {
                reject(err);
            } 
            // try catch for resolution
            try {
                // respond with parsed content
                res(JSON.parse(content));
            } catch (err) {
                // reject with error codes
                reject(err);
            }
        });
    });
}

// console.log for testing
console.log(await fetchReview("./reviews.json"))

export default fetchReview;