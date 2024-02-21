import { useEffect, useState, useRef } from 'react';
import Container from "../container-components/Container";
import ReviewGrid from './ReviewGrid';
// import ReviewDisp from './ReviewDisp';
import fetchData from '../utils/fetchData';

const Reviews = (props) => {
    // useRef to target individual cards, pass to reviewGrid
    const ref = useRef(null);

    // storage for reviewGrid display
    const allReviews = <ReviewGrid ref={ref} />;

    // set and handle currently displayed state
    const [currentDisplay, setCurrentDisplay] = useState(allReviews);

    let handleClick = () => {
        console.log(event.target);
        console.log(ref);
    };

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