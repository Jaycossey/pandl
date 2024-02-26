import { useState, useEffect, useRef } from "react";
import fetchData from "../utils/fetchData";
import BandCard from "./BandCard";
import ReviewDisp from "./ReviewDisp";
import Loading from "./Loading";

const ReviewGrid = () => {
    // set state for review data and rendered elements
    const [renderedState, setRenderedState] = useState(<Loading />);
    // data from json file
    const [data, setData] = useState([]);
    // all jsx card elements
    const [allCards, setAllCards] = useState([]);

    // on component load fetch data
    useEffect(() => {
        fetchData('./reviews.json', {mode: 'no-cors'})
            .then(res => setData(res.reviews))
            .then(() => {
                setAllCards(data.map((artist, i) => {
                    return ( 
                        <BandCard  
                            key={i}
                            name={artist.band} 
                            image={artist.image} 
                            album={artist.title}
                            onClick={() => handleClick(i)}
                            />
                    );
                }));
            })
            .then(() => {
                // set review grid to show all band cards
                console.log(allCards)
                setRenderedState(allCards);
            })
            .catch(err => console.error(err));

        // currently fetches on initial load (technically only on save of this file)
    }, []);

    // handle closing of review and display grid again
    const handleClose = () => {
        console.log('click', allCards);
        setRenderedState(allCards);
    }

    // handleClick will toggle rendered state
    const handleClick = (index) => {
        // ensure that click applies to image (useRef would be better)
        // if no id then ignore click
        if (!event.target.id) return;

        const review = <ReviewDisp bandData={data[index]} onClick={handleClose} />;

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