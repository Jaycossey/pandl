// api call for data on the site
const fetchData = async (query) => {
    // returns promise obj
    return new Promise((res, rej) => {
        // where query is the endpoint -- url will need updating 
        fetch(query)
            .then(response => {
                if (!response.ok) {
                    throw new Error(503)
                }

                return response.json();
            })
            .then(data => {
                // console.log(data);
                res(data);
            })
            .catch(err => {
                console.error(`Error with request: ${err}`);
                rej(err);
            });
        });
}
export default fetchData;