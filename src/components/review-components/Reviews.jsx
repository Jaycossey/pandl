import { useState } from 'react';
import Container from "../container-components/Container";
import ReviewGrid from './ReviewGrid';
import ReviewDisp from './ReviewDisp';
import bandList from '../utils/bandList';

const Reviews = (props) => {
    const [currentDisplay, setCurrentDisplay] = useState(<ReviewDisp band={bandList[0]} />);

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
            <Container content={currentDisplay} />

        </div>
    );
}

export default Reviews;