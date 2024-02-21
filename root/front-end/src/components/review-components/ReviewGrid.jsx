import { useState, useEffect, forwardRef } from "react";
import fetchData from "../utils/fetchData";
import BandCard from "./BandCard";

const ReviewGrid = forwardRef((props, ref) => {

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
            {data.map((artist, i) => {
                return ( 
                    <BandCard  
                        key={i}
                        name={artist.band} 
                        image={artist.image} 
                        album={artist.title}
                        ref={ref} />
                );
            })}
        </>
    );
});

export default ReviewGrid;