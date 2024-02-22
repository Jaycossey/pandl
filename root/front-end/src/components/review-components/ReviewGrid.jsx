import { useState, useEffect, useRef } from "react";
import fetchData from "../utils/fetchData";
import BandCard from "./BandCard";
import ReviewDisp from "./ReviewDisp";
import Loading from "./Loading";

const ReviewGrid = () => {
    // set state for review data and rendered elements
    const [renderedState, setRenderedState] = useState(<Loading />);
    const [data, setData] = useState([]);

    let allCards;

    // on component load fetch data
    useEffect(() => {
        fetchData('reviews/all')
            .then(res => setData(res.Reviews))
            .then(() => {
                allCards = data.map((artist, i) => {
                    return ( 
                        <BandCard  
                            key={i}
                            name={artist.band} 
                            image={artist.image} 
                            album={artist.title}
                            onClick={() => handleClick(i)}
                            />
                    );
                });
            })
            .then(() => {
                // set review grid to show all band cards
                setRenderedState(allCards);
            })
            .catch(err => console.error(err));
        
        console.log(data);
    }, []);

    // handle closing of review and display grid again
    const handleClose = () => {
        setRenderedState(allCards);
    }

    // handleClick will toggle rendered state
    const handleClick = (index) => {
        // ensure that click applies to image (useRef would be better)
        // if no id then ignore click
        if (!event.target.id) return;

        const review = <ReviewDisp bandData={data[index]} onClick={handleClose} />;

        console.log(event.target.id);
        console.log(index);

        setRenderedState(review);
    }

    return (
        <>
            {/* map over resulting array and display dynamically */}
            {renderedState}
        </>
    );

}

export default ReviewGrid;