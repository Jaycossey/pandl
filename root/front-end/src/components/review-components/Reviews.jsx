import { useEffect, useState } from 'react';
import Container from "../container-components/Container";
import ReviewGrid from './ReviewGrid';
import ReviewDisp from './ReviewDisp';
import fetchData from '../utils/fetchData';

const Reviews = (props) => {
    let data = fetchData("reviews/all");
    const [currentBand, setCurrentBand] = useState(0);
    const [currentDisplay, setCurrentDisplay] = useState(<ReviewDisp band={currentBand} />);

    // console.log(logThis);

    useEffect(() => {
        console.log("useeffect data", data);
    }, [data]);

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