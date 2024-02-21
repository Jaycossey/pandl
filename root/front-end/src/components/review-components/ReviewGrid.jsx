import { useState, useEffect } from "react";
import fetchData from "../utils/fetchData";
import BandCard from "./BandCard";

const ReviewGrid = (props) => {
    // set state for review data
    const [data, setData] = useState([]);
    
    // on component load fetch data
    useEffect(() => {
        fetchData('reviews/all')
            .then(res => setData(res.Reviews))
            .catch(err => console.error(err));
        
        console.log(data);
    }, []);

    return (
        <>
            {/* map over resulting array and display dynamically */}
            {data.map((artist) => {
                return ( 
                    <BandCard 
                        key={`${artist.band}-card`}
                        name={artist.band} 
                        image={artist.image} 
                        album={artist.title} />
                );
            })}
        </>
    );
}

export default ReviewGrid;