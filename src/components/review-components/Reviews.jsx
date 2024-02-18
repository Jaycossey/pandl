import { useState } from 'react';
import Container from "../container-components/Container";
// import ReviewGrid from './ReviewGrid';
import ReviewDisp from './ReviewDisp';
// import fetchReview from '../utils/fetchReview.js';

const Reviews = (props) => {
    /**
     * IMPORTANT!!!!! TODAY THIS MUST BE FINISHED!!!!
     * I need to be able to target the reviews.json file I created
     * I need to update this page to fetch all the data, 
     * I need to then create a fetchReviews() functional util comp for that
     * I need to be able to dynamically show that data in the react components
     * I need to remove the components and remake to reflect the new data structure
     * I need to rework the staff section at a later point
     * 
     */

    // Function to fetch reviews from reviews.json
    // how am I targeting the data? would be ideal on this section to 
    // get a grid of all the reviews, but also I need to get the specific data
    // from the staff section, having just the one function to handle the 
    // fetches would be more efficient
    // what am i passing to identify the reviews needed?
    // on this page, its the entire collection, 
    // so I need to target reviews.phil.reviews, reviews.kris.reviews etc

    const [currentBand, setCurrentBand] = useState(0);
    const [currentDisplay, setCurrentDisplay] = useState(<ReviewDisp band={currentBand} />);
    
    /**
     * Important for later, the current band should be passed as props to the 
     * review display, so I need to just set state to the current data, 
     * work with promises and create a load animation until the promise resolves
     * 
     */

    /**
     * IMPORTANT FOR NOW!!! Need to work the backend out before continuing
     * with the front end, have to be able to handle the data before displaying it
     * 
     */



    return (
        <div className="pt-16
                        pb-8
                        h-screen
                        bg-gradient-to-r 
                        from-orange-500 
                        via-orange-300 
                        to-blue-400">

            {/* Review Select inst */}
            <Container content={"Our Staff have listened to some incredible bands, be that live or their studio work, browse our reviews below."} />
            <Container content={currentDisplay} />

        </div>
    );
}

export default Reviews;