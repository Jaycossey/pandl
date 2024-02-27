import { useState, useEffect, useRef } from "react";
import fetchData from "../utils/fetchData";
import BandCard from "./BandCard";
import ReviewDisp from "./ReviewDisp";
import Loading from "./Loading";

const ReviewGrid = (props) => {
    // set state for review data and rendered elements
    const [data, setData] = useState([]);
    const [allCards, setAllCards] = useState();
    const handleClick = props.onClick;

    useEffect(() => {
        fetchData('./reviews.json')
            .then(res => res.json())
            .then(data => setData(data.reviews))
            .catch(err => console.error(err));
        console.log(data);
        
    }, []);

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
    }, [data]);
    
    if (allCards) {
        return allCards;
    } else {
        return (<Loading />);
    }

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