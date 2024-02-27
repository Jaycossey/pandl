import { useEffect, useState } from "react";
import Container from "../container-components/Container";
import Loading from "./Loading";
import ReviewDisp from "./ReviewDisp";
import ReviewGrid from "./ReviewGrid";
import BandCard from "./BandCard";
import fetchData from "../utils/fetchData";

const Reviews = () => {
    const [renderedState, setRenderedState] = useState(<Loading />);
    const [cards, setCards] = useState();

    const data = fetchData('./reviews.json')
                    .then(res => res.reviews)
                    .catch(err => console.error(err));
    console.log(data);

    return (
        <div className="pt-16
                        pb-8
                        h-screen
                        bg-fixed
                        bg-gradient-to-r 
                        from-orange-500 
                        via-orange-300 
                        to-blue-400">

            {/* Review Select inst */}
            <Container content={"Our Staff have listened to some incredible bands, be that live or their studio work, browse our reviews below."} />
            <Container content={renderedState} />

        </div>
    );
}

export default Reviews;