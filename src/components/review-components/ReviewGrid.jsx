import { useState, useEffect, useRef } from "react";
import fetchData from "../utils/fetchData";
import BandCard from "./BandCard";
import ReviewDisp from "./ReviewDisp";
import Loading from "./Loading";

const ReviewGrid = (props) => {
    // set state for review data and rendered elements
    const [renderedState, setRenderedState] = useState(<Loading />);
    // data from json file
    const [data, setData] = useState([]);
    
    let allCards;

    // on component load fetch data
    useEffect(() => {
        fetchData('./reviews.json', {mode: 'no-cors'})
            .then(res => setData(res.reviews))
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
                })
            })
            .then(() => {
                setRenderedState(allCards);
            })
            .catch(err => console.error(err));

    }, []);

    // handle closing of review and display grid again
    const handleClose = () => {
        console.log(allCards);
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
            {renderedState}
        </>
    );

}

export default ReviewGrid;

/**
 * Issue lies in state when it comes to re-rendering
 * I need to trigger the fetch call on the component's render
 * and then store that state somewhere so that the state is preserved
 * between each re-render
 * 
 */