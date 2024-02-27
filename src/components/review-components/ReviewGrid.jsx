import { useState, useEffect, useRef } from "react";
import fetchData from "../utils/fetchData";
import BandCard from "./BandCard";
import ReviewDisp from "./ReviewDisp";
import Loading from "./Loading";

const ReviewGrid = (props) => {
    const [allCards, setAllCards] = useState();
    const data = props.bandData;

    useEffect(() => {
        setAllCards(data.map((artist, i) => {
            <BandCard
                key={i}
                name={artist.band} 
                image={artist.image} 
                album={artist.title}
                onClick={() => handleClick(i)}
                />
        }))
        console.log(allCards)
    }, []);

    return allCards;
}

export default ReviewGrid;

/**
 * Issue lies in state when it comes to re-rendering
 * I need to trigger the fetch call on the component's render
 * and then store that state somewhere so that the state is preserved
 * between each re-render
 * 
    hoist the state to parent and pass as props, render via props only
 * 
 */