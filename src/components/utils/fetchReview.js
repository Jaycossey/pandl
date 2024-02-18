import { readFile } from 'fs';

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