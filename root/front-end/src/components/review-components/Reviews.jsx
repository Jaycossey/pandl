import { useEffect, useState, useRef } from 'react';
import Container from "../container-components/Container";
import ReviewGrid from './ReviewGrid';
import ReviewDisp from './ReviewDisp';
import fetchData from '../utils/fetchData';

const Reviews = (props) => {
    // useRef to target individual cards, pass to reviewGrid
    const childRef = useRef(null);
    // storage for reviewGrid display
    const allReviews = <ReviewGrid childRef={childRef} />;
    
    /**
     * PLANNING FOR STATE AND RENDERING MANAGEMENT
     * I need to target the bandCard grandchild component
     * I need to pass ref from this to reviewGrid to BandCard
     * That way I can target them and get their data
     * I need to use the targeting by key. Key needs to be specific to each band
     * I need to create an end point which filters through all reviews and returns
     *          that band's review only.
     * I need to then render the reviewDisp (individual review) component.
     * 
     * I COULD also and probably best practice, create an indexed dupe 
     * array of the review list. That way when ref is passed I can also pass the 
     * index to render that bands data without the need to handle another fetch
     * request (remember that I need to fetch the text files as well so less load
     * the better)
     */
    
    // set and handle currently displayed state
    const [currentDisplay, setCurrentDisplay] = useState(allReviews);

    // handleClick may not be needed, remember to update container 
    // component if needed
    const handleClick = () => {
        console.log(event.target);
    } // THIS MAY NOT BE RELEVANT!!!! 
    return (
        <div className="pt-16
                        pb-8
                        md:h-screen
                        bg-gradient-to-r 
                        from-orange-500 
                        via-orange-300 
                        to-blue-400">

            {/* Review Select inst */}
            <Container content={"Our Staff have listened to some incredible bands, be that live or their studio work, browse our reviews below."} />
            <Container onClick={handleClick} content={currentDisplay} />

        </div>
    );
}

export default Reviews;