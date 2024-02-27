import { useEffect, useState } from "react";
import Container from "../container-components/Container";
import Loading from "./Loading";
import ReviewDisp from "./ReviewDisp";
import BandCard from "./BandCard";

const Reviews = () => {
    const [renderedState, setRenderedState] = useState(<Loading />);
    const [fetchResults, setFetchResults] = useState();
    const [allReviews, setAllReviews] = useState([]);

    fetch('./reviews.json')
    .then(res => res.json())
    .then(data => {
        setFetchResults(data.reviews);
        setAllReviews(data.reviews.map((artist, i) =>
        <BandCard
            key={i}
            name={artist.band} 
            image={artist.image} 
            album={artist.title}
            onClick={() => handleClick(i)}
            />
    ))
    setRenderedState(allReviews)})
    .catch(err => console.error(err));



    
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